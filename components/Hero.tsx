"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Network SVG */}
      <div className="absolute inset-0 z-0 opacity-20">
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
      </div>

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
            <span className="gradient-text">Scales.</span>
            <br />
            Code That{" "}
            <span className="gradient-text">Performs.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            We architect real-time, fault-tolerant systems using Elixir. Also delivering MERN/MEAN, Laravel, and React Native solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="primary" className="w-full sm:w-auto">
              Start a Project
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              View Work
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

