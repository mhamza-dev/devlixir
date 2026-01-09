"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import Image from "next/image";
import ProjectSubmissionModal from "./ProjectSubmissionModal";

interface Particle {
  id: number;
  initialX: number;
  initialY: number;
  targetX: number;
  targetY: number;
  duration: number;
  delay: number;
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const newParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        initialX: Math.random() * window.innerWidth,
        initialY: Math.random() * window.innerHeight,
        targetX: Math.random() * window.innerWidth,
        targetY: Math.random() * window.innerHeight,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      }));
      setParticles(newParticles);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Particles */}
      {mounted && (
        <div className="absolute inset-0 z-0">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] rounded-full opacity-30"
              initial={{
                x: particle.initialX,
                y: particle.initialY,
              }}
              animate={{
                y: [particle.initialY, particle.targetY],
                x: [particle.initialX, particle.targetX],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      {/* Background Network SVG */}
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        animate={{
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/hero-network.svg"
            alt="Network background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D11] via-[#0B0D11]/80 to-[#0F1117] z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Engineering That{" "}
            <motion.span
              className="gradient-text inline-block"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Scales.
            </motion.span>
            <br />
            Code That{" "}
            <motion.span
              className="gradient-text inline-block"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              Performs.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Devlixir is an AI software and product engineering studio. We design, build, and maintain systems across
            Php/Laravel, MEAN & MERN, Elixir/Phoenix, Go, React Native, and Python/Flask—plus practical AI integration
            and automation. From greenfield builds to long-term maintenance and upgrades, we keep your software fast,
            scalable, and reliable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="primary"
              className="w-full sm:w-auto"
              onClick={() => setIsModalOpen(true)}
            >
              Start a Project
            </Button>
            {/* <Button
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => {
                document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Our Work
            </Button> */}
          </motion.div>
        </motion.div>
      </div>
      <ProjectSubmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

