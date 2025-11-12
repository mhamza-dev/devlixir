"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionTitle from "./SectionTitle";

const statements = [
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {statements.map((statement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-start gap-4 p-6 rounded-xl glass hover:glow-hover transition-all duration-300"
            >
              <CheckCircle2 className="w-6 h-6 text-[#7C3AED] flex-shrink-0 mt-1" />
              <p className="text-xl font-semibold text-white">
                {statement}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

