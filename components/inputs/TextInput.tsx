"use client";

import { Field, ErrorMessage } from "formik";

interface TextInputProps {
    name: string;
    label: string;
    type?: string;
    required?: boolean;
    placeholder?: string;
}

export default function TextInput({
    name,
    label,
    type = "text",
    required,
    placeholder,
}: TextInputProps) {
    return (
        <div>
            <label
                htmlFor={name}
                className="block text-sm font-medium text-white/80 mb-1"
            >
                {label} {required && <span className="text-red-400">*</span>}
            </label>
            <Field
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
            />
            <ErrorMessage
                name={name}
                component="div"
                className="mt-1 text-xs text-red-400"
            />
        </div>
    );
}


