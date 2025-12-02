"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { projects, type Project } from "@/constants";

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <SectionTitle
                    title="Our Work"
                    subtitle="Real projects, real results, real impact"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative rounded-2xl overflow-hidden glass border border-white/10 hover:border-[#7C3AED]/50 transition-all duration-300"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#7C3AED]/20 to-[#3B82F6]/20">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center p-6">
                                        <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] flex items-center justify-center">
                                            <span className="text-2xl font-bold text-white">
                                                {project.name.charAt(0)}
                                            </span>
                                        </div>
                                        <p className="text-white/80 text-sm font-medium">{project.name}</p>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D11] via-[#0B0D11]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#7C3AED]/20 text-[#7C3AED] border border-[#7C3AED]/30">
                                        {project.category}
                                    </span>
                                    <div className="flex gap-2">
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#7C3AED]/50 transition-all"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <ExternalLink className="w-4 h-4 text-white/70 hover:text-[#7C3AED]" />
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#7C3AED]/50 transition-all"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <Github className="w-4 h-4 text-white/70 hover:text-[#7C3AED]" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-2 text-white group-hover:gradient-text transition-all duration-300">
                                    {project.name}
                                </h3>
                                <p className="text-white/70 text-sm mb-4 line-clamp-3">{project.description}</p>

                                {/* Client Name */}
                                <div className="mb-4 pb-4 border-b border-white/10">
                                    <p className="text-xs text-white/50 mb-1">Client</p>
                                    <p className="text-sm font-medium text-white/90">{project.clientName}</p>
                                </div>

                                {/* Tech Stack */}
                                <div>
                                    <p className="text-xs text-white/50 mb-2">Tech Stack</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.slice(0, 4).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 rounded text-xs bg-white/5 text-white/70 border border-white/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 4 && (
                                            <span className="px-2 py-1 rounded text-xs bg-white/5 text-white/70 border border-white/10">
                                                +{project.techStack.length - 4}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

