import { Github, Linkedin, Mail, Download } from "lucide-react";
import { siteConfig, navItems } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          <div>
            <p className="font-mono-tight text-sm font-semibold">{siteConfig.name}</p>
            <p className="text-sm text-muted mt-2 max-w-xs">{siteConfig.description}</p>
            <div className="flex items-center gap-4 mt-5">
              <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-foreground transition-colors">
                <Github className="size-4.5" />
              </a>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-foreground transition-colors">
                <Linkedin className="size-4.5" />
              </a>
              <a href={siteConfig.links.email} aria-label="Email" className="text-muted hover:text-foreground transition-colors">
                <Mail className="size-4.5" />
              </a>
            </div>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="font-mono-tight text-xs uppercase tracking-widest text-muted-2 mb-4">Navigate</p>
              <ul className="flex flex-col gap-2.5">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-sm text-muted hover:text-foreground transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono-tight text-xs uppercase tracking-widest text-muted-2 mb-4">Resources</p>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a href={siteConfig.resumeUrl} download className="flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors">
                    <Download className="size-3.5" /> Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted-2 font-mono-tight">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS &amp; Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
