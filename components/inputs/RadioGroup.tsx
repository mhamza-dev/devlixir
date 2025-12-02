"use client";

import { Field, ErrorMessage } from "formik";

interface RadioOption {
    value: string;
    label: string;
}

interface RadioGroupProps {
    name: string;
    label: string;
    options: RadioOption[];
    required?: boolean;
}

export default function RadioGroup({
    name,
    label,
    options,
    required,
}: RadioGroupProps) {
    return (
        <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
                {label} {required && <span className="text-red-400">*</span>}
            </label>
            <div className="grid grid-cols-2 gap-3">
                {options.map((option) => (
                    <label
                        key={option.value}
                        className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#7C3AED]/50 cursor-pointer transition-all"
                    >
                        <Field
                            type="radio"
                            name={name}
                            value={option.value}
                            className="w-4 h-4 text-[#7C3AED] focus:ring-[#7C3AED]"
                        />
                        <span className="text-sm text-white/90">
                            {option.label}
                        </span>
                    </label>
                ))}
            </div>
            <ErrorMessage
                name={name}
                component="div"
                className="mt-1 text-xs text-red-400"
            />
        </div>
    );
}


