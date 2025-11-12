"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ButtonProps {
    variant?: "primary" | "outline" | "ghost";
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = "primary", className, children, onClick, type = "button", disabled }, ref) => {
        const baseStyles = "px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent";

        const variants = {
            primary: "bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white hover:shadow-lg hover:shadow-purple-500/50 focus:ring-purple-500",
            outline: "border-2 border-transparent bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] bg-clip-border p-[2px] hover:shadow-lg hover:shadow-purple-500/30",
            ghost: "text-white/80 hover:text-white hover:bg-white/5 focus:ring-white/20",
        };

        const innerStyles = {
            primary: "",
            outline: "bg-[#0B0D11] rounded-lg w-full h-full flex items-center justify-center",
            ghost: "",
        };

        if (variant === "outline") {
            return (
                <motion.button
                    ref={ref}
                    type={type}
                    disabled={disabled}
                    onClick={onClick}
                    className={cn(baseStyles, className)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className={innerStyles.outline}>{children}</span>
                </motion.button>
            );
        }

        return (
            <motion.button
                ref={ref}
                type={type}
                disabled={disabled}
                onClick={onClick}
                className={cn(baseStyles, variants[variant], className)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";

export default Button;

