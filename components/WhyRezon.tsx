"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionTitle from "./SectionTitle";

const statements = [
  "Elixir expertise unmatched—bet you'll never find a better team.",
  "We design for scale, not patches.",
  "We write clean, maintainable code.",
  "We ship production-ready systems.",
];

export default function WhyRezon() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <SectionTitle
          title="Why REZON"
          subtitle="Built for the long term, designed for excellence"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {statements.map((statement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="flex items-start gap-4 p-6 rounded-xl glass hover:glow-hover transition-all duration-300 cursor-pointer group"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.15 + 0.2,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  rotate: 360, 
                  scale: 1.2,
                  transition: { duration: 0.5 }
                }}
              >
                <CheckCircle2 className="w-6 h-6 text-[#7C3AED] flex-shrink-0 mt-1 group-hover:text-[#3B82F6] transition-colors" />
              </motion.div>
              <motion.p
                className="text-xl font-semibold text-white group-hover:gradient-text transition-all duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
              >
                {statement}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

