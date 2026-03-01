"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="relative px-5 py-12 sm:px-8">
      {/* Subtle background texture blob — purely decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-32 top-16 h-96 w-96 rounded-full bg-linear-to-br from-teal-500/5 via-transparent to-transparent blur-3xl" />
        <div className="absolute -left-32 bottom-16 h-80 w-80 rounded-full bg-linear-to-tr from-violet-500/4 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl">
        {/* Section header */}
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          {/* Eyebrow */}
          <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60">
            Selected work
          </p>

          {/* Heading row */}
          <div className="flex items-baseline justify-between gap-4 border-b border-border pb-6">
            <h2 className="text-4xl font-black tracking-tighter text-heading sm:text-5xl">
              Projects
            </h2>
            {/* Project count, styled as a badge */}
            <span className="shrink-0 rounded-full border border-border bg-card-muted px-3 py-1 font-mono text-xs font-semibold tabular-nums text-muted-foreground">
              {projects.length.toString().padStart(2, "0")} total
            </span>
          </div>
        </motion.header>

        {/* Project list */}
        <div>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              highlights={project.highlights}
              stack={project.stack}
              link={project.link}
              gradient={project.gradient}
              index={index}
              total={projects.length}
            />
          ))}

          {/* Closing divider */}
          <div className="h-px w-full bg-border" />
        </div>
      </div>
    </section>
  );
}