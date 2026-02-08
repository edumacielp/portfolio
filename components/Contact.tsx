"use client";

import { motion } from "framer-motion";
import { contact, writings } from "@/lib/data";

export function Contact() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: contact.linkedin,
    },
    {
      name: "GitHub",
      href: contact.github,
    },
    {
      name: "Email",
      href: `mailto:${contact.email}`,
    },
  ];

  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-2xl">

        {/* Writing section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 text-start text-2xl font-bold tracking-tight text-heading"
          >
            Writing
          </motion.h2>
          <ul className="space-y-5">
            {writings.map((post, index) => (
              <motion.li
                key={post.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <a
                  href={post.href}
                  className="group block"
                >
                  <h3 className="mb-1 text-lg text-heading transition-colors group-hover:text-muted-foreground">
                    {post.title}
                  </h3>
                  <p className="mb-2 text-sm text-muted">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Find me section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 text-start text-2xl font-bold tracking-tight text-heading"
          >
            Find me
          </motion.h2>
          <ul className="space-y-3">
            {socialLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <a
                  href={link.href}
                  target={link.name === "Email" ? undefined : "_blank"}
                  rel={link.name === "Email" ? undefined : "noopener noreferrer"}
                  className="group inline-flex items-center gap-2 text-lg text-muted-foreground transition-colors hover:text-heading"
                >
                  {link.name}
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
      </div>
    </section>
  );
}