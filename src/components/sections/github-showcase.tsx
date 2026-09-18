"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star, GitFork, Github, AlertCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
};

const username = siteConfig.links.github.split("/").pop() ?? "";

export function GithubShowcase() {
  const [repos, setRepos] = React.useState<Repo[] | null>(null);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    let active = true;
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API unavailable");
        return res.json();
      })
      .then((data) => {
        if (active && Array.isArray(data)) setRepos(data);
      })
      .catch(() => {
        if (active) setError(true);
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="relative py-28 lg:py-36 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionLabel index="05" label="GitHub" />

        <div className="mt-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <Reveal className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.15]">
              Recent activity, straight from the source.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                <Github className="size-4" /> @{username}
              </Button>
            </a>
          </Reveal>
        </div>

        {/* Contribution graph */}
        <Reveal delay={0.15} className="mt-12">
          <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 overflow-hidden">
            <p className="font-mono-tight text-xs text-muted uppercase tracking-widest mb-4">
              Contribution graph
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element -- external SVG chart, no benefit from next/image */}
            <img
              src={`https://ghchart.rshah.org/6366f1/${username}`}
              alt={`${siteConfig.name} GitHub contribution graph`}
              className="w-full opacity-90 dark:opacity-100"
              loading="lazy"
            />
          </div>
        </Reveal>

        {/* Repos */}
        <div className="mt-6">
          {error && (
            <div className="flex items-center gap-2 text-sm text-muted-2 py-8 justify-center">
              <AlertCircle className="size-4" />
              GitHub data couldn&apos;t be loaded right now — set <code className="font-mono-tight">links.github</code> to a real username, or check the link above directly.
            </div>
          )}

          {!error && (
            <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.06}>
              {(repos ?? Array.from({ length: 6 })).map((repo, i) => (
                <RevealItem key={(repo as Repo)?.id ?? i}>
                  {repo ? (
                    <motion.a
                      href={(repo as Repo).html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className="block h-full rounded-[var(--radius-lg)] border border-border bg-surface p-6 hover:border-border-strong transition-colors"
                    >
                      <h3 className="font-semibold truncate">{(repo as Repo).name}</h3>
                      <p className="text-sm text-muted mt-2 line-clamp-2 min-h-[2.5rem]">
                        {(repo as Repo).description ?? "No description provided."}
                      </p>
                      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border text-xs text-muted-2">
                        {(repo as Repo).language && (
                          <span className="flex items-center gap-1.5">
                            <span className="size-2 rounded-full bg-accent-soft" />
                            {(repo as Repo).language}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Star className="size-3.5" /> {(repo as Repo).stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="size-3.5" /> {(repo as Repo).forks_count}
                        </span>
                      </div>
                    </motion.a>
                  ) : (
                    <div className="h-[148px] rounded-[var(--radius-lg)] border border-border bg-surface p-6 animate-pulse">
                      <div className="h-4 w-1/2 bg-surface-raised rounded" />
                      <div className="h-3 w-3/4 bg-surface-raised rounded mt-4" />
                      <div className="h-3 w-1/2 bg-surface-raised rounded mt-2" />
                    </div>
                  )}
                </RevealItem>
              ))}
            </RevealGroup>
          )}
        </div>
      </div>
    </section>
  );
}
