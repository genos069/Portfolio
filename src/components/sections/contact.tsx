"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Errors = Partial<FormState>;
type Status = "idle" | "submitting" | "success" | "error";

const contactDetails = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: siteConfig.links.email },
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: siteConfig.location, href: undefined },
];

function validate(form: FormState): Errors {
  const errors: Errors = {};
  if (!form.name.trim()) errors.name = "Enter your name.";
  if (!form.email.trim()) {
    errors.email = "Enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.message.trim()) {
    errors.message = "Add a short message.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export function Contact() {
  const [form, setForm] = React.useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = React.useState<Errors>({});
  const [touched, setTouched] = React.useState<Record<string, boolean>>({});
  const [status, setStatus] = React.useState<Status>("idle");

  function handleChange(field: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (touched[field]) {
      setErrors(validate({ ...form, [field]: value }));
    }
  }

  function handleBlur(field: keyof FormState) {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(form));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(validation).length > 0) return;

    setStatus("submitting");
    // Wired to mailto fallback — replace with a real form handler (Resend, Formspree, etc.) when deploying.
    await new Promise((r) => setTimeout(r, 900));
    try {
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
        `Portfolio message from ${form.name}`
      )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`;
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-28 lg:py-36 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionLabel index="06" label="Contact" />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.15]">
              Let&apos;s talk about what you&apos;re building.
            </h2>
            <p className="mt-4 text-muted leading-relaxed max-w-md">
              Open to full-stack roles, internships, and interesting freelance work.
              I usually reply within a day.
            </p>

            <div className="mt-10 flex flex-col gap-5">
              {contactDetails.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <div className="flex items-center gap-4 group">
                    <div className="flex items-center justify-center size-11 rounded-[var(--radius-sm)] bg-surface-raised border border-border text-accent-soft group-hover:border-border-strong transition-colors">
                      <Icon className="size-4.5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-2">{label}</p>
                      <p className="text-sm font-medium">{value}</p>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href} className="w-fit">
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-7 lg:p-9">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <CheckCircle2 className="size-12 text-signal mb-4" strokeWidth={1.5} />
                    <h3 className="font-semibold text-lg">Message ready to send</h3>
                    <p className="text-sm text-muted mt-2 max-w-xs">
                      Your email client should have opened with the message pre-filled.
                      If it didn&apos;t, email directly at {siteConfig.email}.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => {
                        setStatus("idle");
                        setForm({ name: "", email: "", message: "" });
                        setTouched({});
                      }}
                    >
                      Send another message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col gap-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="text-xs font-medium text-muted mb-2 block">
                          Name
                        </label>
                        <Input
                          id="name"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          onBlur={() => handleBlur("name")}
                          aria-invalid={!!errors.name}
                          placeholder="Your name"
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1.5">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="text-xs font-medium text-muted mb-2 block">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          onBlur={() => handleBlur("email")}
                          aria-invalid={!!errors.email}
                          placeholder="you@example.com"
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="text-xs font-medium text-muted mb-2 block">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        value={form.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        onBlur={() => handleBlur("message")}
                        aria-invalid={!!errors.message}
                        placeholder="What are you working on?"
                      />
                      {errors.message && <p className="text-xs text-red-500 mt-1.5">{errors.message}</p>}
                    </div>

                    <Button type="submit" size="lg" disabled={status === "submitting"} className="self-start">
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="size-4 animate-spin" /> Sending
                        </>
                      ) : (
                        <>
                          Send Message <Send className="size-4" />
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
