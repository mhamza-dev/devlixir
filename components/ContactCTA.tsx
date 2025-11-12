"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function ContactCTA() {
    return (
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                        Let's build something that{" "}
                        <span className="gradient-text">lasts.</span>
                    </h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Button variant="primary" className="text-lg px-8 py-4">
                            Book a Meeting
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

