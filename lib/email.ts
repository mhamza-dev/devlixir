import nodemailer from "nodemailer";

export interface ProjectSubmissionEmailPayload {
    projectName: string;
    roleType: string;
    techStacks: string[];
    documentUrls: string[];
    email: string;
    phone: string;
    description: string;
}

const smtpHost = process.env.NEXT_PUBLIC_SMTP_HOST;
const smtpPort = process.env.NEXT_PUBLIC_SMTP_PORT
    ? parseInt(process.env.NEXT_PUBLIC_SMTP_PORT, 10)
    : 587;
const smtpUser = process.env.NEXT_PUBLIC_SMTP_USER;
const smtpPass = process.env.NEXT_PUBLIC_SMTP_PASS;
const smtpFrom = process.env.NEXT_PUBLIC_SMTP_FROM || smtpUser || "";
const internalNotificationEmail =
    process.env.NEXT_PUBLIC_PROJECT_SUBMISSION_NOTIFY_EMAIL || smtpFrom;

// If SMTP is not configured, we silently skip sending emails in dev.
const isEmailConfigured = Boolean(smtpHost && smtpFrom);

const transporter =
    isEmailConfigured &&
    nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth:
            smtpUser && smtpPass
                ? {
                    user: smtpUser,
                    pass: smtpPass,
                }
                : undefined,
    });

export async function sendProjectSubmissionEmails(
    payload: ProjectSubmissionEmailPayload
) {
    if (!isEmailConfigured || !transporter) {
        console.warn(
            "SMTP is not fully configured; skipping project submission emails."
        );
        return;
    }

    const { userSubject, userHtml, userText } = getUserConfirmationTemplate(
        payload
    );
    const {
        internalSubject,
        internalHtml,
        internalText,
    } = getInternalNotificationTemplate(payload);

    // Send in parallel but don't block the API on email failures
    await Promise.allSettled([
        transporter.sendMail({
            from: smtpFrom,
            to: payload.email,
            subject: userSubject,
            text: userText,
            html: userHtml,
        }),
        transporter.sendMail({
            from: smtpFrom,
            to: internalNotificationEmail,
            subject: internalSubject,
            text: internalText,
            html: internalHtml,
        }),
    ]);
}

// Lazy imports to avoid circular issues
import {
    getUserConfirmationTemplate,
    getInternalNotificationTemplate,
} from "@/templates/project_submissions";


