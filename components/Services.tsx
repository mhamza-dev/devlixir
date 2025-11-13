"use client";

import { motion } from "framer-motion";
import { Code2, Database, Smartphone, Server, Code } from "lucide-react";
import SectionTitle from "./SectionTitle";

const services = [
  {
    title: "Elixir Development",
    description: "Real-time, fault-tolerant systems built with Elixir and Phoenix for unmatched scalability.",
    icon: Server,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "MERN/MEAN Development",
    description: "Full-stack applications using MongoDB, Express, React/Angular, and Node.js.",
    icon: Code2,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Laravel Development",
    description: "Robust PHP applications with Laravel framework for rapid development.",
    icon: Database,
    gradient: "from-red-500 to-orange-500",
  },
  {
    title: "React Native Apps",
    description: "Cross-platform mobile applications with native performance and smooth UX.",
    icon: Smartphone,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Python/Flask Development",
    description: "Scalable Python applications with Flask framework for rapid API development and microservices.",
    icon: Code,
    gradient: "from-yellow-500 to-orange-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive development solutions tailored to your needs"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass rounded-2xl p-6 hover:glow-hover transition-all duration-300 group cursor-pointer"
              >
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

