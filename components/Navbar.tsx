"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./Button";
import ProjectSubmissionModal from "./ProjectSubmissionModal";
import { navLinks } from "@/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(11, 13, 17, 0.5)", "rgba(11, 13, 17, 0.95)"]
  );
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundColor,
        backdropFilter: `blur(${backdropBlur}px)`,
        WebkitBackdropFilter: `blur(${backdropBlur}px)`,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 transition-all duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div
            whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/logo.svg"
              alt="Devlixir Logo"
              width={120}
              height={40}
              priority
              className="h-8 w-auto"
            />
          </motion.div>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -2, scale: 1.05 }}
                className="text-white/80 hover:text-white transition-colors relative group"
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] group-hover:w-full transition-all duration-300"
                  layoutId={`underline-${link.href}`}
                />
              </motion.a>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="primary"
              className="hidden md:block"
              onClick={() => setIsModalOpen(true)}
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </div>
      <ProjectSubmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </motion.nav>
  );
}

