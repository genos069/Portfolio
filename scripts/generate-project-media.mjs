import { readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const extensions = new Set(["png", "jpg", "jpeg", "webp", "avif", "gif", "svg", "mp4", "webm", "ogg"]);
const files = ["projects", ""].flatMap((directory) => {
  try {
    return readdirSync(join(root, "public", directory), { withFileTypes: true })
      .filter((file) => file.isFile() && extensions.has(file.name.split(".").pop()?.toLowerCase()))
      .map((file) => ({
        name: file.name,
        url: `/${directory ? `${directory}/` : ""}${encodeURIComponent(file.name)}`,
      }));
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
});

writeFileSync(join(root, "src", "lib", "project-media.json"), `${JSON.stringify(files, null, 2)}\n`);
