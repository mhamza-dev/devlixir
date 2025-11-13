"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function ContactCTA() {
    return (
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated background gradient */}
            <motion.div
                className="absolute inset-0 opacity-20"
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
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold mb-8 text-white"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Let's build something that{" "}
                        <motion.span
                            className="gradient-text inline-block"
                            animate={{
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            lasts.
                        </motion.span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button variant="primary" className="text-lg px-8 py-4 relative overflow-hidden group">
                            <motion.span
                                className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                animate={{
                                    x: ["-100%", "100%"],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />
                            <span className="relative z-10">Book a Meeting</span>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

