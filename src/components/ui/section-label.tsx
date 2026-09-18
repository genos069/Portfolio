import { cn } from "@/lib/utils";

export function SectionLabel({
  index,
  label,
  className,
}: {
  index: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="font-mono-tight text-xs text-accent-soft">{index}</span>
      <span className="h-px w-8 bg-border-strong" />
      <span className="font-mono-tight text-xs uppercase tracking-[0.18em] text-muted">
        {label}
      </span>
    </div>
  );
}
