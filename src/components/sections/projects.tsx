"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ImageIcon, CheckCircle2 } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { useState } from "react";


function ProjectImagePlaceholder({
  name,
  media,
}: {
  name: string;
  media?: string;
}) {
  const [hasError, setHasError] = useState(false);

  const isVideo = media
    ? /\.(mp4|webm|ogg|mov)$/i.test(media)
    : false;

  return (
    <div className="relative w-full aspect-[16/10] rounded-[20px] border-2 border-blue-500 bg-surface-raised overflow-hidden">
      {!media || hasError ? (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--accent-dim),transparent_60%)]" />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <ImageIcon
              className="size-7 text-muted-2"
              strokeWidth={1.5}
            />

            <p className="font-mono-tight text-[11px] text-muted-2 text-center px-4">
              On The Way — {name}
            </p>
          </div>
        </>
      ) : isVideo ? (
        <video
          src={media}
          className="absolute inset-0 w-full h-full max-w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onError={() => setHasError(true)}
        />
      ) : (
        <img
          src={media}
          alt={name}
          className="absolute inset-0 w-full h-full max-w-full object-cover"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}



function ProjectCard({ project, featured }: { project: Project; featured: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`group relative rounded-[var(--radius-lg)] border border-border bg-surface overflow-hidden hover:border-border-strong hover:shadow-[0_30px_70px_-30px_rgba(0,0,0,0.35)] transition-shadow duration-400 ${featured ? "lg:col-span-7" : "lg:col-span-5"
        }`}
    >
      <div className="p-7 lg:p-8 flex flex-col h-full">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <span className="font-mono-tight text-xs text-accent-soft uppercase tracking-widest">
              {project.accentLabel}
            </span>
            <h3 className="text-2xl font-semibold tracking-tight mt-1.5">{project.name}</h3>
            <p className="text-sm text-muted mt-1">{project.tagline}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} repository`}
              className="flex items-center justify-center size-9 rounded-full border border-border text-muted hover:text-foreground hover:border-border-strong transition-colors"
            >
              <Github className="size-4" />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live demo`}
              className="flex items-center justify-center size-9 rounded-full bg-accent text-white hover:brightness-110 transition-all"
            >
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        <div className="mb-6">
            <ProjectImagePlaceholder name={project.name} media={project.media} />
        </div>

        <p className="text-sm text-muted leading-relaxed mb-6">{project.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
          {project.features.map((feature) => (
            <div key={feature} className="flex items-start gap-2 text-sm text-muted">
              <CheckCircle2 className="size-4 text-accent-soft mt-0.5 shrink-0" strokeWidth={2} />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-5 border-t border-border">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-surface-raised border border-border px-3 py-1 font-mono-tight text-[11px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-28 lg:py-36 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionLabel index="03" label="Projects" />

        <Reveal className="mt-8 max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.15]">
            Built like products, not assignments.
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Two end-to-end builds — each taken from data model to deployment, with real
            auth, real payment flows, and the edge cases that come with both.
          </p>
        </Reveal>

        <div className="flex flex-wrap gap-6 mt-14">
          {projects.map((project, i) => (
            <Reveal
              key={project.slug}
              delay={i * 0.1}
              className="w-full lg:w-[calc(50%-12px)]"
            >
              <ProjectCard project={project} featured={project.size === "large"} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-8 flex justify-center">
          <a href="https://github.com/genos069?tab=repositories" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              View all repositories <ArrowUpRight className="size-4" />
            </Button>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
