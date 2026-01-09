"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyDevlixir from "@/components/WhyDevlixir";
import TechStack from "@/components/TechStack";
import ContactCTA from "@/components/ContactCTA";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <main className="min-h-screen">
        <Navbar />
        <motion.div
          variants={sectionVariants}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <Hero />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <Services />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <WhyDevlixir />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <TechStack />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <ContactCTA />
        </motion.div>
      </main>
    </motion.div>
  );
}
