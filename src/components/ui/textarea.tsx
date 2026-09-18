import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[140px] w-full rounded-[var(--radius-sm)] border border-border bg-surface-raised px-4 py-3 text-sm text-foreground placeholder:text-muted-2 transition-colors duration-200 outline-none resize-none",
          "focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent-dim",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-red-500/15",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
