"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  highlights: string[];
  stack: string[];
  link: string;
  index: number;
  total: number;
  gradient?: string | null;
}

export function ProjectCard({
  name,
  description,
  highlights,
  stack,
  link,
  index,
  gradient,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  // Pull the first hex-ish color from gradient string, fallback to teal
  const accentColor = (() => {
    if (!gradient) return "#2dd4bf";
    const match = gradient.match(/#[0-9a-fA-F]{3,6}/);
    return match ? match[0] : "#2dd4bf";
  })();

  const num = (index + 1).toString().padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Animated left accent bar */}
      <motion.div
        className="absolute left-0 top-0 w-[3px] rounded-full"
        style={{ backgroundColor: accentColor }}
        initial={{ height: 0 }}
        animate={{ height: expanded ? "100%" : "0%" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Top divider */}
      <div className="h-px w-full bg-border" />

      {/* Clickable main row */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="group w-full cursor-pointer text-left"
        aria-expanded={expanded}
        aria-label={`Toggle details for ${name}`}
      >
        <div className="flex items-start gap-5 py-8 pl-5 pr-1 transition-all duration-200 sm:pl-6">
          {/* Decorative large index number */}
          <div
            className="relative hidden shrink-0 select-none sm:block"
            aria-hidden="true"
          >
            <span
              className="font-mono text-[4rem] font-black leading-none tracking-tighter opacity-[0.07] transition-opacity duration-300 group-hover:opacity-[0.12]"
              style={{ color: accentColor }}
            >
              {num}
            </span>
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            {/* Mobile index */}
            <span
              className="mb-2 block font-mono text-[10px] font-bold tracking-[0.25em] sm:hidden"
              style={{ color: accentColor }}
            >
              {num}
            </span>

            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3
                  className="text-xl font-bold leading-tight tracking-tight text-heading transition-colors duration-200 group-hover:text-foreground sm:text-2xl"
                  style={{
                    // Subtle accent tint on hover via CSS custom property
                  }}
                >
                  {name}
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>

              {/* External link */}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Visit ${name}`}
                className="group/link mt-0.5 flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground transition-all duration-200 hover:border-foreground/20 hover:text-foreground hover:shadow-sm"
              >
                <span className="hidden sm:inline">Visit</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>

            {/* Collapsed state: tech pills (first 3 only) */}
            <AnimatePresence>
              {!expanded && (
                <motion.div
                  initial={false}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 flex flex-wrap gap-1.5"
                >
                  {stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-card-muted px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-muted-foreground/70"
                    >
                      {tech}
                    </span>
                  ))}
                  {stack.length > 4 && (
                    <span className="px-1 py-0.5 text-[10px] text-muted-foreground/50">
                      +{stack.length - 4}
                    </span>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </button>

      {/* Expandable panel */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 pl-5 sm:pl-[calc(4rem+1.25rem+1.5rem)]">
              {/* Numbered highlights */}
              <div className="mb-6 space-y-3">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.28 }}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="mt-0.5 shrink-0 font-mono text-[10px] font-bold tracking-widest"
                      style={{ color: accentColor }}
                    >
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Full stack chips */}
              <div className="flex flex-wrap gap-1.5">
                {stack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.04 + i * 0.035, duration: 0.22 }}
                    className="rounded-full border border-border bg-card-muted px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground transition-colors duration-150 hover:border-foreground/20 hover:text-foreground"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}