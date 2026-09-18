"use client";

import * as React from "react";
import { siteConfig, skillGroups } from "@/lib/data";

type Line = { type: "command" | "output"; text: string };

const commands: Record<string, string[]> = {
  whoami: [
    `${siteConfig.name}`,
    "Full-stack engineer · React / Node / Express / MongoDB",
    `Based in ${siteConfig.location}`,
  ],
  "cat stack.json": [
    "{",
    `  "frontend": [${skillGroups[0].skills.slice(0, 4).map((s) => `"${s}"`).join(", ")}],`,
    `  "backend": [${skillGroups[1].skills.map((s) => `"${s}"`).join(", ")}],`,
    `  "database": ["MongoDB"],`,
    `  "auth": ["JWT", "bcrypt"]`,
    "}",
  ],
  "git log --oneline -3": [
    "feat: integrate Razorpay checkout flow",
    "feat: role-based authorization for driver/admin",
    "fix: geolocation validation edge cases",
  ],
  "npm run status": [
    "> status",
    "",
    "open to work     ✓",
    "response time     < 24h",
  ],
  "clear": [],
};

const commandList = Object.keys(commands);

export function Terminal() {
  const [history, setHistory] = React.useState<Line[]>([
    { type: "output", text: `Welcome. Type a command or click one below.` },
  ]);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [typedCommand, setTypedCommand] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history, typedCommand]);

  function runCommand(cmd: string, idx: number) {
    if (isTyping) return;

    setActiveIndex(idx);
    setIsTyping(true);
    setTypedCommand("");

    let i = 0;

    const typeInterval = setInterval(() => {
      i++;
      setTypedCommand(cmd.slice(0, i));

      if (i >= cmd.length) {
        clearInterval(typeInterval);

        setTimeout(() => {
          // Clear terminal
          if (cmd === "cls" || cmd === "clear") {
            setHistory([]);
            setTypedCommand("");
            setIsTyping(false);
            return;
          }

          // Normal commands
          setHistory((h) => [
            ...h,
            { type: "command", text: cmd },
            ...commands[cmd].map((line) => ({
              type: "output" as const,
              text: line,
            })),
          ]);

          setTypedCommand("");
          setIsTyping(false);
        }, 250);
      }
    }, 28);
  }

  return (
    <div className="glass w-full max-w-xl rounded-[var(--radius-lg)] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)]">
      {/* Chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-raised/60">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono-tight text-xs text-muted">bharat@portfolio — zsh</span>
      </div>

      {/* Body */}
      <div ref={scrollRef} className="p-5 font-mono-tight text-[13px] leading-relaxed h-[280px] overflow-y-auto">
        {history.map((line, idx) => (
          <div key={idx} className={line.type === "command" ? "text-foreground mt-2" : "text-muted"}>
            {line.type === "command" ? (
              <span>
                <span className="text-signal">➜</span>{" "}
                <span className="text-accent-soft">~</span> {line.text}
              </span>
            ) : (
              <span className="block pl-0">{line.text || "\u00A0"}</span>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="text-foreground mt-2">
            <span className="text-signal">➜</span> <span className="text-accent-soft">~</span>{" "}
            {typedCommand}
            <span className="caret">▍</span>
          </div>
        )}

        {!isTyping && (
          <div className="text-foreground mt-2 opacity-60">
            <span className="text-signal">➜</span> <span className="text-accent-soft">~</span>{" "}
            <span className="caret">▍</span>
          </div>
        )}
      </div>

      {/* Command chips */}
      <div className="flex flex-wrap gap-2 px-4 pb-4 border-t border-border pt-3">
        {commandList.map((cmd, idx) => (
          <button
            key={cmd}
            onClick={() => runCommand(cmd, idx)}
            disabled={isTyping}
            className={`rounded-full border px-3 py-1.5 font-mono-tight text-[11px] transition-colors disabled:opacity-40 ${isTyping && activeIndex === idx
                ? "border-accent-soft text-accent-soft bg-accent-dim"
                : "border-border bg-surface-raised text-muted hover:text-foreground hover:border-border-strong"
              }`}
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
