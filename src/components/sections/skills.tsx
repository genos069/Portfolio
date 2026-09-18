"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

export function Skills() {
  return (
    <section id="skills" className="relative py-28 lg:py-36 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionLabel index="02" label="Skills" />

        <Reveal className="mt-8 max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.15]">
            The stack, end to end.
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Grouped by where they sit in the request lifecycle — from the browser down
            to the database and back.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.07}>
          {skillGroups.map((group) => (
            <RevealItem key={group.category}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group h-full rounded-[var(--radius-lg)] border border-border bg-surface p-7 hover:border-accent-soft/40 hover:shadow-[0_20px_50px_-20px_rgba(79,70,229,0.25)] transition-shadow duration-300"
              >
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-semibold text-lg">{group.category}</h3>
                  <span className="font-mono-tight text-xs text-muted-2">
                    {String(group.skills.length).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-sm text-muted mb-5">{group.description}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-surface-raised px-3 py-1.5 text-xs font-medium text-muted group-hover:border-border-strong group-hover:text-foreground transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
