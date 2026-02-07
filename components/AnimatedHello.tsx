"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const hellos = [
  "Hello",
  "Olá",
  "Bonjour",
  "Ciao",
  "こんにちは",
  "안녕하세요",
  "مرحبا",
];

export default function AnimatedHello() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % hellos.length);
    }, 1600); // tempo entre trocas

    return () => clearInterval(interval);
  }, []);

  return (
   <div className="h-[3rem] overflow-hidden">
        <AnimatePresence mode="wait">
            <motion.h1
            key={hellos[index]}
            initial={{
                opacity: 0,
                x: -20,
                filter: "blur(10px)",
                scale: 0.98,
            }}
            animate={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                scale: 1,
            }}
            exit={{
                opacity: 0,
                x: 20,
                filter: "blur(10px)",
                scale: 1.02,
            }}
            transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1], // easeOutQuint vibes
            }}
            className="mb-8 text-start text-2xl font-bold tracking-tight text-heading"
            >
            {hellos[index]}
            </motion.h1>
        </AnimatePresence>
    </div>
  );
}