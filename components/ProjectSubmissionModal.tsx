"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "./Button";
import { Upload, X, FileText } from "lucide-react";
import { roleTypes, availableTechStacks } from "@/constants";
import TextInput from "./inputs/TextInput";
import Textarea from "./inputs/Textarea";
import MultiSelect from "./inputs/MultiSelect";
import RadioGroup from "./inputs/RadioGroup";
import FormikForm from "./forms/FormikForm";
import Modal from "./Modal";

const ProjectSchema = Yup.object({
    projectName: Yup.string().required("Project name is required"),
    roleType: Yup.string().required("Please select a role type"),
    techStacks: Yup.array().min(1, "Please select at least one tech stack"),
    email: Yup.string().email("Please enter a valid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    description: Yup.string().required("Description is required"),
});

interface ProjectFormValues {
    projectName: string;
    roleType: string;
    techStacks: string[];
    documents: Array<{ file: File; id: string }>;
    documentUrls: string[];
    email: string;
    phone: string;
    description: string;
}

interface ProjectFormProps {
    isSubmitting: boolean;
    uploading: boolean;
    values: ProjectFormValues;
    setFieldValue: (field: string, value: any) => void;
    uploadProgress: Record<string, number>;
    handleFileUpload: (
        file: File,
        fileId: string,
        setFieldValue: (field: string, value: any) => void,
        documentUrls: string[]
    ) => Promise<void> | void;
    onClose: () => void;
}

function ProjectForm({
    isSubmitting,
    uploading,
    values,
    setFieldValue,
    uploadProgress,
    handleFileUpload,
    onClose,
}: ProjectFormProps) {
    return (
        <>
            {/* Project Name */}
            <TextInput
                name="projectName"
                label="Project Name"
                required
                placeholder="e.g., E-commerce Platform"
            />

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                    name="email"
                    label="Email"
                    type="email"
                    required
                    placeholder="you@example.com"
                />
                <TextInput
                    name="phone"
                    label="Phone"
                    required
                    placeholder="+1 234 567 890"
                />
            </div>

            {/* Role Type */}
            <RadioGroup
                name="roleType"
                label="What are you looking for?"
                required
                options={roleTypes}
            />

            {/* Tech Stack Selection */}
            <MultiSelect
                name="techStacks"
                label="Tech Stack"
                options={availableTechStacks}
                required
            />

            {/* Project Description */}
            <Textarea
                name="description"
                label="Project Description"
                required
                placeholder="Tell us about your project, goals, timeline, and any important context."
            />

            {/* File Upload */}
            <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                    Documents (Optional)
                </label>
                <div className="space-y-2">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/20 rounded-lg bg-white/5 hover:bg-white/10 hover:border-[#7C3AED]/50 cursor-pointer transition-all">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-2 text-white/60" />
                            <p className="text-sm text-white/70">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-white/50 mt-1">
                                PDF, DOC, DOCX, PNG, JPG (MAX. 10MB)
                            </p>
                        </div>
                        <input
                            type="file"
                            className="hidden"
                            multiple
                            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                            onChange={(e) => {
                                const files = Array.from(e.target.files || []);
                                const filesWithIds = files.map((file) => ({
                                    file,
                                    id: `${file.name}-${Date.now()}-${Math.random()}`,
                                }));
                                setFieldValue("documents", [...values.documents, ...filesWithIds]);
                                filesWithIds.forEach(({ file, id }) => {
                                    handleFileUpload(file, id, setFieldValue, values.documentUrls || []);
                                });
                            }}
                        />
                    </label>

                    {/* Uploaded Files List */}
                    {values.documents.length > 0 && (
                        <div className="space-y-2 mt-2">
                            {values.documents.map((docItem, index) => {
                                const progress = uploadProgress[docItem.id];
                                const isUploading = progress !== undefined && progress < 100;
                                const isComplete = progress === 100;

                                return (
                                    <div
                                        key={docItem.id}
                                        className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10"
                                    >
                                        <div className="flex items-center gap-2 flex-1">
                                            <FileText className="w-4 h-4 text-white/60" />
                                            <span className="text-sm text-white/80 truncate flex-1">
                                                {docItem.file.name}
                                            </span>
                                            <span className="text-xs text-white/50">
                                                {(docItem.file.size / 1024 / 1024).toFixed(2)} MB
                                            </span>
                                        </div>
                                        {isUploading && (
                                            <div className="flex items-center gap-2 ml-2">
                                                <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] transition-all"
                                                        style={{
                                                            width: `${progress}%`,
                                                        }}
                                                    />
                                                </div>
                                                <span className="text-xs text-white/50">
                                                    {Math.round(progress)}%
                                                </span>
                                            </div>
                                        )}
                                        {isComplete && (
                                            <span className="text-xs text-green-400 ml-2">✓ Uploaded</span>
                                        )}
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const newDocs = values.documents.filter(
                                                    (_, i) => i !== index
                                                );
                                                const newUrls = values.documentUrls.filter((_, i) => i !== index);
                                                setFieldValue("documents", newDocs);
                                                setFieldValue("documentUrls", newUrls);
                                            }}
                                            className="ml-2 text-red-400 hover:text-red-300"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end gap-3 pt-4">
                <Button
                    type="button"
                    variant="ghost"
                    className="px-5 py-2 text-sm"
                    onClick={onClose}
                >
                    Cancel
                </Button>
                <Button
                    type="submit"
                    variant="primary"
                    className="px-5 py-2 text-sm"
                    disabled={isSubmitting || uploading}
                >
                    {isSubmitting ? "Submitting..." : "Submit Project"}
                </Button>
            </div>
        </>
    );
}

export default function ProjectSubmissionModal({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});
    const [submitted, setSubmitted] = useState(false);
    const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

    const handleFileUpload = async (
        file: File,
        fileId: string,
        setFieldValue: (field: string, value: any) => void,
        documentUrls: string[]
    ) => {
        setUploading(true);
        setUploadProgress((prev) => ({ ...prev, [fileId]: 0 }));

        try {
            const formData = new FormData();
            formData.append("file", file);

            const xhr = new XMLHttpRequest();

            xhr.upload.addEventListener("progress", (e) => {
                if (e.lengthComputable) {
                    const percentComplete = (e.loaded / e.total) * 100;
                    setUploadProgress((prev) => ({ ...prev, [fileId]: percentComplete }));
                }
            });

            xhr.addEventListener("load", async () => {
                if (xhr.status === 200) {
                    try {
                        const response = JSON.parse(xhr.responseText);
                        setUploadProgress((prev) => ({ ...prev, [fileId]: 100 }));
                        const uploadedUrl = response.url;
                        setFieldValue("documentUrls", [...documentUrls, uploadedUrl]);
                        console.log("Upload successful:", uploadedUrl);
                    } catch (parseError) {
                        console.error("Error parsing response:", parseError);
                        alert(`Failed to upload ${file.name}. Please try again.`);
                    }
                } else {
                    console.error("Upload failed:", xhr.statusText);
                    alert(`Failed to upload ${file.name}. Please try again.`);
                }
                setUploading(false);
            });

            xhr.addEventListener("error", () => {
                console.error("Upload error");
                alert(`Error uploading ${file.name}. Please try again.`);
                setUploading(false);
            });

            xhr.open("POST", "/api/upload");
            xhr.send(formData);
        } catch (error) {
            console.error("Error uploading file:", error);
            alert(`Error uploading ${file.name}. Please try again.`);
            setUploading(false);
        }
    };

    const handleClose = () => {
        setSubmitted(false);
        setSubmittedEmail(null);
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={handleClose}
            title={submitted ? "Thank you!" : "Start Your Project"}
        >
            {submitted ? (
                <div className="space-y-4">
                    <p className="text-sm text-white/80">
                        Thank you for sharing your project. Our team will review the
                        details and contact you shortly
                        {submittedEmail && (
                            <>
                                {" "}
                                at{" "}
                                <span className="font-semibold">
                                    {submittedEmail}
                                </span>
                            </>
                        )}
                        .
                    </p>
                    <div className="flex justify-end pt-2">
                        <Button
                            type="button"
                            variant="primary"
                            className="px-5 py-2 text-sm"
                            onClick={handleClose}
                        >
                            Close
                        </Button>
                    </div>
                </div>
            ) : (
                <FormikForm<ProjectFormValues>
                    initialValues={{
                        projectName: "",
                        email: "",
                        phone: "",
                        description: "",
                        roleType: "",
                        techStacks: [],
                        documents: [],
                        documentUrls: [],
                    }}
                    validationSchema={ProjectSchema}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        try {
                            const response = await fetch("/api/submit-project", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                    projectName: values.projectName,
                                    roleType: values.roleType,
                                    techStacks: values.techStacks,
                                    documentUrls: values.documentUrls || [],
                                    email: values.email,
                                    phone: values.phone,
                                    description: values.description,
                                }),
                            });

                            const data = await response.json();

                            if (!response.ok) {
                                throw new Error(
                                    data.error || "Failed to submit project"
                                );
                            }

                            resetForm();
                            setUploadProgress({});
                            setSubmitted(true);
                            setSubmittedEmail(values.email);
                        } catch (error: any) {
                            console.error(
                                "Error submitting project:",
                                error
                            );
                            alert(
                                error.message ||
                                "Failed to submit project. Please try again."
                            );
                        } finally {
                            setSubmitting(false);
                        }
                    }}
                >
                    {({ isSubmitting, setFieldValue, values }) => (
                        <ProjectForm
                            isSubmitting={isSubmitting}
                            uploading={uploading}
                            values={values}
                            setFieldValue={setFieldValue}
                            uploadProgress={uploadProgress}
                            handleFileUpload={handleFileUpload}
                            onClose={handleClose}
                        />
                    )}
                </FormikForm>
            )}
        </Modal>
    );
}

