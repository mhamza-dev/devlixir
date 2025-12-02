"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import TechIcon from "./TechIcon";
import { techCategories } from "@/constants";

export default function TechStack() {
  return (
    <section id="tech" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <SectionTitle
          title="Our Tech Stack"
          subtitle="Cutting-edge technologies for modern solutions"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold mb-4 gradient-text">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                    whileHover={{ scale: 1.15, y: -4 }}
                    className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-[#7C3AED]/50 hover:glow-purple transition-all duration-300 cursor-pointer"
                  >
                    <TechIcon name={tech} className="w-5 h-5 flex-shrink-0" />
                    <span>{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

