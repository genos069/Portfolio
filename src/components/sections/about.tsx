"use client";

import { GraduationCap, Code2, Layers, Sparkles } from "lucide-react";
import { education } from "@/lib/data";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

const pillars = [
  {
    icon: Code2,
    title: "Backend-leaning, full-stack by trade",
    body: "I like the part of the stack most people skip past — schema design, auth flows, the API contract that everything else depends on. React is where I express it; Node and MongoDB are where I think.",
  },
  {
    icon: Layers,
    title: "Product thinking, not just feature thinking",
    body: "Before writing a route, I ask what happens when it fails. Every project I've built treats error states, edge cases, and permissions as first-class — not an afterthought bolted on before a demo.",
  },
  {
    icon: Sparkles,
    title: "Always mid-build on something",
    body: "Between coursework and side projects, there's usually a repo open. The fastest way I learn a new tool is to ship something real with it, then go back and read why it worked.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionLabel index="01" label="About" />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.15] max-w-xl">
              I build the systems underneath the interface, then make sure the interface
              earns them.
            </h2>
            <p className="mt-6 text-muted leading-relaxed max-w-lg">
              I&apos;m a Computer Science undergraduate who treats every side project like a
              real product — not a tutorial follow-along. That means thinking about auth
              before features, data modeling before UI polish, and what happens when a
              user does something I didn&apos;t expect.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center size-10 rounded-[var(--radius-sm)] bg-accent-dim text-accent-soft">
                  <GraduationCap className="size-5" />
                </div>
                <span className="font-mono-tight text-xs uppercase tracking-widest text-muted">
                  Education
                </span>
              </div>
              <h3 className="font-semibold text-lg">{education.institution}</h3>
              <p className="text-muted text-sm mt-1">{education.degree}</p>
              <div className="mt-5 flex items-center gap-6">
                <div>
                  <p className="font-mono-tight text-2xl font-semibold text-foreground">
                    {education.cgpa}
                  </p>
                  <p className="text-xs text-muted-2 mt-0.5">CGPA</p>
                </div>
                <div className="h-8 w-px bg-border" />
                <div>
                  <p className="font-mono-tight text-2xl font-semibold text-foreground">
                    {education.duration}
                  </p>
                  <p className="text-xs text-muted-2 mt-0.5">Duration</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <RevealGroup className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((p) => (
            <RevealItem key={p.title}>
              <div className="h-full rounded-[var(--radius-lg)] border border-border bg-surface p-7 hover:border-border-strong transition-colors duration-300">
                <p.icon className="size-6 text-accent-soft mb-5" strokeWidth={1.75} />
                <h3 className="font-semibold mb-2.5 leading-snug">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
