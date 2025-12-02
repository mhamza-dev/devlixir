"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    maxWidthClass?: string;
}

export default function Modal({
    isOpen,
    onClose,
    title,
    children,
    maxWidthClass = "max-w-2xl",
}: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.2 }}
                className={`w-full ${maxWidthClass} max-h-[90vh] overflow-y-auto rounded-2xl bg-[#050816] border border-white/10 shadow-2xl p-6 relative`}
            >
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-white/60 hover:text-white text-sm z-10"
                    aria-label="Close"
                >
                    ✕
                </button>
                {title && (
                    <h3 className="text-2xl font-semibold mb-6 text-white">
                        {title}
                    </h3>
                )}
                {children}
            </motion.div>
        </div>
    );
}


