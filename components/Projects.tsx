"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-end justify-between border-b border-border pb-5"
        >
          <div>
            <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Selected work
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
              Projects
            </h2>
          </div>
          <span className="text-sm tabular-nums text-muted-foreground">
            {projects.length.toString().padStart(2, "0")}
          </span>
        </motion.div>

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
        </div>
      </div>
    </section>
  );
}