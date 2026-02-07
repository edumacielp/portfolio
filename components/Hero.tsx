"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedHello from "@/components/AnimatedHello";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <header className="flex min-h-[65vh] flex-col items-center justify-center p-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl"
      >
        {profile.avatar && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-4 flex justify-start"
          >
            <div className="relative h-16 w-16 overflow-hidden rounded-full">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                className="object-cover"
                sizes="96px"
                priority
              />
            </div>
          </motion.div>
        )}
        
        <AnimatedHello />
        
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-6 text-left text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          <p>
            I'm <span className="font-medium text-heading">{profile.name}</span>, {profile.title}. 
            Currently working with scalable solutions in {" "}
            <span className="font-medium text-[#2563EB]">.NET</span> ecosystem and modern cloud technologies.
          </p>
          
          <p>
            When away from coding, you'll find me {profile.bio}
          </p>
        </motion.div>
      </motion.div>
    </header>
  );
}