"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  name: string;
  description: string;
  highlights: string[];
  stack: string[];
  link: string;
  index: number;
  gradient?: string | null;
}

export function ProjectCard({ 
  name, 
  description, 
  highlights,
  stack, 
  link, 
  index, 
  gradient 
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block"
      >
        {/* Gradient border effect on hover */}
        <div className="absolute -inset-px rounded-3xl bg-linear-to-br from-transparent via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ 
            background: gradient ? `linear-gradient(135deg, ${gradient.split(',')[0].split('(')[1]} 0%, ${gradient.split(',')[1].split(')')[0]} 100%)` : undefined,
            filter: 'blur(8px)'
          }}
        />
        
        {/* Main card */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 group-hover:border-border/50 group-hover:shadow-2xl group-hover:shadow-black/5 md:p-10">
          {/* Subtle gradient overlay on hover */}
          <div 
            className="absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10"
            style={{ background: gradient || "linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 100%)" }}
          />
          
          <div className="relative space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-3">
                  {/* Animated dot indicator */}
                  <div className="flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-medium uppercase tracking-wider text-emerald-500">
                      Live
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-medium tracking-tight text-heading transition-colors group-hover:text-foreground md:text-2xl">
                  {name}
                </h3>
              </div>
              
              {/* Icon badge with hover effect */}
              <div className="relative">
                <div 
                  className="h-14 w-14 rounded-2xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl md:h-16 md:w-16"
                  style={{ background: gradient || "linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 100%)" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg 
                    className="h-7 w-7 text-white opacity-90 md:h-8 md:w-8" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M13 10V3L4 14h7v7l9-11h-7z" 
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-[15px] leading-relaxed text-muted-foreground md:text-base">
              {description}
            </p>

            {/* Highlights with modern checkmarks */}
            <ul className="space-y-3">
              {highlights.map((highlight, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.3 }}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                    <svg 
                      className="h-3 w-3 text-emerald-500" 
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                  </div>
                  <span className="flex-1 pt-0.5">{highlight}</span>
                </motion.li>
              ))}
            </ul>

            {/* Stack tags with modern pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {stack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.2 }}
                  className="group/tag relative overflow-hidden rounded-full border border-border bg-card-muted px-4 py-1.5 text-xs font-medium text-foreground transition-all hover:border-border/80 hover:bg-card"
                >
                  <span className="relative z-10">{tech}</span>
                  {/* Subtle hover effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity group-hover/tag:opacity-100" />
                </motion.span>
              ))}
            </div>

            {/* CTA with arrow animation */}
            <div className="flex items-center gap-2 pt-4 text-sm font-semibold text-accent transition-colors group-hover:text-foreground">
              <span>View project</span>
              <svg 
                className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </motion.article>
  );
}