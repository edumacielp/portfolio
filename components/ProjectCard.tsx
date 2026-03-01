"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";

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
  total,
  gradient,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const isLast = index === total - 1;

  // Parse a safe accent color from the gradient string (fallback: emerald)
  const accentColor = gradient
    ? gradient.split(",")[0].replace(/[^#\w]/g, "").slice(-7)
    : "#10b981";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={`group ${!isLast ? "border-b border-border" : ""}`}
    >
      {/* Main row — always visible */}
      <div
        className="flex cursor-pointer items-start gap-4 py-7 sm:gap-6"
        onClick={() => setExpanded((v) => !v)}
      >
        {/* Index number */}
        <span className="mt-0.5 w-6 shrink-0 text-[11px] font-medium tabular-nums text-muted-foreground/50 sm:w-8">
          {(index + 1).toString().padStart(2, "0")}
        </span>

        {/* Name + description */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            {/* Animated accent dot */}
            <span
              className="mt-0.5 h-2 w-2 shrink-0 rounded-full transition-transform duration-300 group-hover:scale-125"
              style={{ backgroundColor: gradient ? accentColor : "#10b981" }}
            />
            <h3 className="text-base font-semibold tracking-tight text-heading transition-colors group-hover:text-foreground sm:text-lg">
              {name}
            </h3>
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-2 sm:line-clamp-none">
            {description}
          </p>
        </div>

        {/* Right side: link + expand */}
        <div className="flex shrink-0 items-center gap-2 pt-0.5">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-foreground/30 hover:text-foreground hover:shadow-sm"
            aria-label={`Visit ${name}`}
          >
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex h-8 w-8 items-center justify-center text-muted-foreground/50"
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </div>
      </div>

      {/* Expandable detail panel */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-10 sm:pl-14">
              {/* Highlights */}
              <ul className="mb-5 space-y-2">
                {highlights.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.25 }}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full"
                      style={{
                        backgroundColor: gradient ? accentColor : "#10b981",
                      }}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* Stack chips */}
              <div className="flex flex-wrap gap-1.5">
                {stack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.2 }}
                    className="rounded-full border border-border bg-card-muted px-3 py-1 text-[11px] font-medium tracking-wide text-muted-foreground"
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