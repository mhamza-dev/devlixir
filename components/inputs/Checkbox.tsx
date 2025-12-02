"use client";

import { Field } from "formik";
import { ReactNode } from "react";

interface CheckboxProps {
    name: string;
    value: string;
    label: ReactNode;
    className?: string;
}

export default function Checkbox({
    name,
    value,
    label,
    className = "",
}: CheckboxProps) {
    return (
        <label
            className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#7C3AED]/50 cursor-pointer transition-all text-sm ${className}`}
        >
            <Field
                type="checkbox"
                name={name}
                value={value}
                className="w-4 h-4 text-[#7C3AED] focus:ring-[#7C3AED] rounded"
            />
            <span className="text-white/90">{label}</span>
        </label>
    );
}


