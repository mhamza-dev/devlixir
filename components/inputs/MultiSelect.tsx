"use client";

import { ErrorMessage } from "formik";
import Checkbox from "./Checkbox";

interface MultiSelectProps {
    name: string;
    label: string;
    options: string[];
    required?: boolean;
}

export default function MultiSelect({
    name,
    label,
    options,
    required,
}: MultiSelectProps) {
    return (
        <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
                {label} {required && <span className="text-red-400">*</span>}
            </label>
            <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto p-2 rounded-lg bg-white/5 border border-white/10">
                {options.map((option) => (
                    <Checkbox
                        key={option}
                        name={name}
                        value={option}
                        label={option}
                    />
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


