import type { Project } from "@/lib/data";
import mediaManifest from "@/lib/project-media.json";

const username = "genos069";
const mediaFiles: Array<{ name: string; url: string }> = mediaManifest;

type GithubRepo = {
  id: number;
  name: string;
  full_name: string;
  owner: { login: string };
  html_url: string;
  description: string | null;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
};

function normalized(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function findMedia(repo: GithubRepo) {
  const fullName = normalized(repo.full_name);
  const name = normalized(repo.name);
  return mediaFiles.find((file) => normalized(file.name.replace(/\.[^.]+$/, "")) === fullName)?.url
    ?? mediaFiles.find((file) => normalized(file.name.replace(/\.[^.]+$/, "")) === name)?.url;
}

function demoUrl(homepage: string | null): string | undefined {
  if (!homepage) return undefined;
  try {
    const url = new URL(homepage);
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : undefined;
  } catch {
    return undefined;
  }
}

export async function getStarredProjects(): Promise<{ projects: Project[]; error: boolean }> {
  const repos: GithubRepo[] = [];

  try {
    // GitHub returns at most 100 repositories per page, ordered by the most recent star.
    for (let page = 1; page <= 10; page++) {
      const response = await fetch(
        `https://api.github.com/users/${username}/starred?per_page=100&page=${page}`,
        {
          headers: { Accept: "application/vnd.github+json" },
          next: { revalidate: 3600 },
          signal: AbortSignal.timeout(10000),
        },
      );
      if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
      const batch: unknown = await response.json();
      if (!Array.isArray(batch)) throw new Error("Unexpected GitHub response");
      repos.push(...(batch as GithubRepo[]));
      if (batch.length < 100) break;
    }
  } catch (error) {
    console.error("Could not load starred repositories:", error instanceof Error ? error.message : error);
    return { projects: [], error: true };
  }

  return {
    error: false,
    projects: repos.map((repo) => ({
      slug: repo.full_name,
      name: repo.name.replace(/[-_]+/g, " ").trim(),
      tagline: repo.language ?? "GitHub repository",
      description: repo.description || "Explore this project on GitHub.",
      stack: [...new Set([repo.language, ...(repo.topics ?? [])].filter((item): item is string => Boolean(item)))],
      repo: repo.html_url,
      demo: demoUrl(repo.homepage),
      accentLabel: repo.owner.login,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      media: findMedia(repo),
    })),
  };
}
