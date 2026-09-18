"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { Terminal } from "@/components/sections/terminal";

const titleWords = "Full-stack engineer who ships products, not just code.".split(" ");

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start lg:items-center pt-36 lg:pt-32 pb-20 overflow-hidden"
    >
      {/* Ambient backdrop — used once, only here */}
      <div className="absolute inset-0 grid-backdrop pointer-events-none" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-accent/10 dark:bg-accent/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-raised px-4 py-1.5 mb-8"
            >
              <span className="relative flex size-2">
                <span className="absolute inset-0 rounded-full bg-signal animate-ping" />
                <span className="relative rounded-full size-2 bg-signal" />
              </span>
              <span className="font-mono-tight text-xs text-muted">
                Available for opportunities
              </span>
            </motion.div>

            <h1 className="text-[2.75rem] sm:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[0.98]">
              <span className="block text-gradient">{siteConfig.name}</span>
            </h1>

            <div className="mt-6 flex flex-wrap gap-x-2 text-xl sm:text-2xl font-medium text-muted leading-snug max-w-2xl">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.045,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className={word.includes("ships") || word.includes("code.") ? "text-foreground" : ""}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-6 max-w-xl text-base text-muted leading-relaxed"
            >
              {siteConfig.longDescription} I care about clean architecture as much as
              clean UI — the kind of engineer who reads the error before googling it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.05 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Magnetic>
                <Button
                  size="lg"
                  onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View Projects <ArrowRight className="size-4" />
                </Button>
              </Magnetic>
              <Magnetic strength={0.25}>
                <a href={siteConfig.resumeUrl} download>
                  <Button size="lg" variant="outline">
                    <Download className="size-4" /> Download Resume
                  </Button>
                </a>
              </Magnetic>
              <Magnetic strength={0.25}>
                <Button
                  size="lg"
                  variant="ghost"
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Contact Me
                </Button>
              </Magnetic>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-10 flex items-center gap-5"
            >
              {[
                { icon: Github, href: siteConfig.links.github, label: "GitHub" },
                { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
                { icon: Mail, href: siteConfig.links.email, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="text-muted hover:text-foreground transition-colors"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: terminal signature element */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex justify-center lg:justify-end"
          >
            <Terminal />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono-tight text-[11px] text-muted-2 uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown className="size-4 text-muted-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
