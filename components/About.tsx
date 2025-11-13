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
          title="Meet the Founder"
          subtitle="Expertise that sets us apart"
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
              <div className="relative w-32 h-32 flex-shrink-0 rounded-full p-1 bg-gradient-to-r from-[#7C3AED] to-[#3B82F6]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0B0D11]">
                  <Image
                    src="/founder_image.png"
                    alt="Muhammad Hamza"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="text-3xl font-bold mb-2 gradient-text">
                  Muhammad Hamza
                </h3>
                <p className="text-xl text-white/80 mb-4">Founder & Lead Engineer</p>
                <p className="text-white/70 leading-relaxed">
                  With deep expertise in Elixir and Phoenix, Muhammad Hamza leads a team of exceptional engineers
                  dedicated to building systems that scale. Our Elixir expertise is unmatched—bet you'll never find a better team
                  for your real-time, fault-tolerant applications.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">Elixir Experts</h4>
              <p className="text-white/70 text-sm">
                Years of experience building production Elixir systems. You won't find better.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">Proven Track Record</h4>
              <p className="text-white/70 text-sm">
                Delivered countless successful projects with zero compromises on quality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">Elite Team</h4>
              <p className="text-white/70 text-sm">
                Handpicked engineers who share our passion for excellence and innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

