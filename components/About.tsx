"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Users, Zap } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <SectionTitle
          title="About REZON"
          subtitle="Where expertise meets innovation, and code meets excellence"
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-2xl p-8 md:p-12 mb-12"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              <motion.div
                className="relative w-32 h-32 flex-shrink-0 rounded-full p-1 bg-gradient-to-r from-[#7C3AED] to-[#3B82F6]"
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="w-full h-full rounded-full overflow-hidden bg-[#0B0D11]"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src="/founder_image.png"
                    alt="Muhammad Hamza"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
              <div className="text-center md:text-left flex-1">
                <h3 className="text-3xl font-bold mb-2 gradient-text">
                  Muhammad Hamza
                </h3>
                <p className="text-xl text-white/80 mb-4">Founder & Lead Engineer</p>
                <p className="text-white/70 leading-relaxed mb-4">
                  With over 5+ years of deep expertise in Elixir and Phoenix, Muhammad Hamza is a seasoned engineer
                  who has architected and delivered production-grade systems handling millions of concurrent users.
                  His passion for building fault-tolerant, real-time applications has led to the creation of REZON—a
                  team of elite engineers dedicated to excellence.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Under his leadership, REZON has become synonymous with unmatched Elixir expertise. We've built
                  everything from high-frequency trading platforms to real-time collaboration tools, always prioritizing
                  scalability, maintainability, and performance. Bet you'll never find a better team for your mission-critical applications.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="glass rounded-2xl p-6 text-center cursor-pointer group"
            >
              <motion.div
                className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Zap className="w-8 h-8 text-white" />
              </motion.div>
              <h4 className="text-xl font-bold mb-2 text-white group-hover:gradient-text transition-all duration-300">Elixir Experts</h4>
              <p className="text-white/70 text-sm">
                5+ years of production Elixir experience. We've built systems handling millions of concurrent connections.
                Our expertise in OTP, GenServer patterns, and Phoenix LiveView is unmatched in the industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="glass rounded-2xl p-6 text-center cursor-pointer group"
            >
              <motion.div
                className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Award className="w-8 h-8 text-white" />
              </motion.div>
              <h4 className="text-xl font-bold mb-2 text-white group-hover:gradient-text transition-all duration-300">Proven Track Record</h4>
              <p className="text-white/70 text-sm">
                100+ projects delivered across fintech, healthcare, and SaaS. Zero downtime deployments, 99.9% uptime
                guarantees, and clients who trust us with their most critical systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="glass rounded-2xl p-6 text-center cursor-pointer group"
            >
              <motion.div
                className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Users className="w-8 h-8 text-white" />
              </motion.div>
              <h4 className="text-xl font-bold mb-2 text-white group-hover:gradient-text transition-all duration-300">Elite Team</h4>
              <p className="text-white/70 text-sm">
                Handpicked senior engineers with expertise across Elixir, MERN/MEAN, Laravel, Python, and React Native.
                We don't just code—we architect solutions that stand the test of time.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

