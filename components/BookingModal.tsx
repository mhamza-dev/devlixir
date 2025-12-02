"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "./Button";
import Modal from "./Modal";
import TextInput from "./inputs/TextInput";
import FormikForm from "./forms/FormikForm";

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

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Pick a time">
            {!calendlyUrl ? (
                <FormikForm<BookingFormValues>
                    initialValues={{ email: "" }}
                    validationSchema={BookingSchema}
                    onSubmit={(values) => {
                        const baseUrl =
                            process.env.NEXT_PUBLIC_CALENDLY_BOOKING_URL ?? "";
                        if (!baseUrl) return;

                        const trimmedEmail = values.email.trim();
                        const url = `${baseUrl}${
                            baseUrl.includes("?") ? "&" : "?"
                        }email=${encodeURIComponent(trimmedEmail)}`;

                        setCalendlyUrl(url);
                    }}
                    className="space-y-4"
                >
                    {({ isSubmitting }) => (
                        <>
                            <p className="text-sm text-white/70">
                                Enter your email and then pick a time that works
                                for you. We&apos;ll use this email for the
                                invite.
                            </p>
                            <TextInput
                                name="email"
                                label="Your email"
                                type="email"
                                required
                                placeholder="you@example.com"
                            />
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
                        </>
                    )}
                </FormikForm>
            ) : (
                <>
                    <p className="text-sm text-white/70 mb-4">
                        You&apos;re scheduling as{" "}
                        <span className="font-semibold">
                            {emailFromUrl(calendlyUrl)}
                        </span>
                        .
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
        </Modal>
    );
}


