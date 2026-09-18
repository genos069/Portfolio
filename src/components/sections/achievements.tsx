"use client";

import * as React from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ShieldCheck, GitBranch, Workflow, CreditCard, Server, Lock } from "lucide-react";
import { stats, achievements } from "@/lib/data";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

const icons = [Server, ShieldCheck, Workflow, CreditCard, GitBranch, Lock];

function AnimatedStat({ value, suffix, label }: { value: string; suffix?: string; label: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const numericValue = parseInt(value, 10);
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 80, damping: 20 });
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (inView) motionVal.set(numericValue);
  }, [inView, motionVal, numericValue]);

  React.useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsub;
  }, [spring]);

  return (
    <div ref={ref}>
      <p className="font-mono-tight text-4xl sm:text-5xl font-semibold text-foreground tabular-nums">
        {display}
        <span className="text-accent-soft">{suffix}</span>
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}

export function Achievements() {
  return (
    <section className="relative py-28 lg:py-36 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionLabel index="04" label="Experience Highlights" />

        <Reveal className="mt-8 max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.15]">
            What the work actually involved.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-8 pb-14 mb-14 border-b border-border">
          {stats.map((stat) => (
            <RevealItem key={stat.label}>
              <AnimatedStat value={stat.value} suffix={stat.suffix} label={stat.label} />
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.06}>
          {achievements.map((a, i) => {
            const Icon = icons[i % icons.length];
            return (
              <RevealItem key={a.title}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="h-full rounded-[var(--radius-lg)] border border-border bg-surface p-6"
                >
                  <Icon className="size-5 text-accent-soft mb-4" strokeWidth={1.75} />
                  <h3 className="font-semibold text-base mb-2 leading-snug">{a.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{a.description}</p>
                </motion.div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
