"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 header border-b border-white/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/logo.svg"
              alt="REZON Logo"
              width={120}
              height={40}
              priority
              className="h-8 w-auto"
            />
          </motion.div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-white/80 hover:text-white transition-colors">
              Services
            </a>
            <a href="#tech" className="text-white/80 hover:text-white transition-colors">
              Tech Stack
            </a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">
              Contact
            </a>
          </div>
          <Button variant="primary" className="hidden md:block">
            Get Started
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}

