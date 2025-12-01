"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "./Button";

const BookingSchema = Yup.object({
    email: Yup.string().email("Enter a valid email").required("Email is required"),
});

interface BookingFormValues {
    email: string;
}

const emailFromUrl = (url: string) => {
    const urlObj = new URL(url);
    const urlParams = urlObj.searchParams;
    return urlParams.get("email") ?? "";
};

export default function BookingModal({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const [calendlyUrl, setCalendlyUrl] = useState<string | null>(null);

    if (!isOpen) return null;
    console.log("calendlyUrl->", calendlyUrl);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-2xl rounded-2xl bg-[#050816] border border-white/10 shadow-2xl p-6 relative"
            >
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-white/60 hover:text-white text-sm"
                    aria-label="Close"
                >
                    ✕
                </button>
                <h3 className="text-2xl font-semibold mb-4 text-white">Pick a time</h3>
                {!calendlyUrl ? (
                    <Formik<BookingFormValues>
                        initialValues={{ email: "" }}
                        validationSchema={BookingSchema}
                        onSubmit={(values) => {
                            const baseUrl = process.env.NEXT_PUBLIC_CALENDLY_BOOKING_URL ?? "";
                            if (!baseUrl) return;

                            const trimmedEmail = values.email.trim();
                            const url = `${baseUrl}${baseUrl.includes("?") ? "&" : "?"
                                }email=${encodeURIComponent(trimmedEmail)}`;

                            console.log(url);
                            setCalendlyUrl(url);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="space-y-4">
                                <p className="text-sm text-white/70">
                                    Enter your email and then pick a time that works for you. We&apos;ll use this
                                    email for the invite.
                                </p>
                                <div>
                                    <label
                                        htmlFor="booking-email"
                                        className="block text-sm font-medium text-white/80 mb-1"
                                    >
                                        Your email
                                    </label>
                                    <Field
                                        id="booking-email"
                                        name="email"
                                        type="email"
                                        className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                                        placeholder="you@example.com"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="mt-1 text-xs text-red-400"
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        className="px-5 py-2 text-sm"
                                        disabled={isSubmitting}
                                    >
                                        Continue to scheduling
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                ) : (
                    <>
                        <p className="text-sm text-white/70 mb-4">
                            You&apos;re scheduling as{" "}
                            <span className="font-semibold">{emailFromUrl(calendlyUrl)}</span>.
                        </p>
                        <div className="w-full h-[600px] rounded-xl overflow-hidden border border-white/10">
                            <iframe
                                src={calendlyUrl}
                                className="w-full h-full"
                                title="Book a meeting with Rezon"
                                sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                            />
                        </div>
                    </>
                )}
            </motion.div>
        </div>
    );
}


