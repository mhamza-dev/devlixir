"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { testimonials } from "@/constants";

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background gradient */}
            <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                    background: [
                        "radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.3) 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                        "radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.3) 0%, transparent 50%)",
                    ],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="container mx-auto relative z-10">
                <SectionTitle
                    title="Client Testimonials"
                    subtitle="What our clients say about working with REZON"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="glass rounded-2xl p-6 border border-white/10 hover:border-[#7C3AED]/50 transition-all duration-300 relative"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-4 right-4 opacity-20">
                                <Quote className="w-8 h-8 text-[#7C3AED]" />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]"
                                    />
                                ))}
                            </div>

                            {/* Feedback */}
                            <p className="text-white/80 text-sm mb-6 leading-relaxed relative z-10">
                                {testimonial.feedback}
                            </p>

                            {/* Project Badge */}
                            <div className="mb-4 pb-4 border-b border-white/10">
                                <p className="text-xs text-white/50 mb-1">Project</p>
                                <p className="text-sm font-semibold text-[#7C3AED]">{testimonial.projectName}</p>
                                <div className="flex flex-wrap gap-1 mt-2">
                                    {testimonial.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-0.5 rounded text-xs bg-[#7C3AED]/20 text-[#7C3AED] border border-[#7C3AED]/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Client Info */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] flex items-center justify-center text-white font-bold text-lg">
                                    {testimonial.clientName.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">{testimonial.clientName}</p>
                                    <p className="text-white/60 text-xs">{testimonial.role}</p>
                                    <p className="text-white/50 text-xs">{testimonial.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

