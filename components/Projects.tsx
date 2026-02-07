"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 text-start text-2xl font-bold tracking-tight text-heading"
          >
            Featured Work
          </motion.h1>
          <p className="text-lg text-muted">
            Building products that solve real problems
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              highlights={project.highlights}
              stack={project.stack}
              link={project.link}
              image={project.image}
              gradient={project.gradient}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}