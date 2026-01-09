import type { ProjectSubmissionEmailPayload } from "@/lib/email";

export function getUserConfirmationTemplate(payload: ProjectSubmissionEmailPayload) {
  const subject = `We received your project: ${payload.projectName}`;
  const text = [
    `Hi,`,
    ``,
    `Thank you for submitting your project "${payload.projectName}".`,
    `Our team at Devlixir will review the details and get back to you shortly.`,
    ``,
    `Summary:`,
    `- Role type: ${payload.roleType}`,
    `- Tech stack: ${payload.techStacks.join(", ")}`,
    `- Phone: ${payload.phone}`,
    ``,
    `Best,`,
    `Devlixir`,
  ].join("\n");

  const html = `
      <div style="margin:0;padding:0;background:#020617;">
        <div style="max-width:640px;margin:0 auto;padding:32px 24px;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#e5e7eb;">
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;">
            <tr>
              <td style="padding-bottom:24px;text-align:center;">
                <div style="display:inline-flex;align-items:center;gap:8px;">
                  <div style="width:10px;height:10px;border-radius:999px;background:linear-gradient(135deg,#7C3AED,#3B82F6);"></div>
                  <span style="font-size:14px;letter-spacing:.12em;text-transform:uppercase;color:#9ca3af;">Devlixir</span>
                </div>
              </td>
            </tr>
          </table>

          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;background:radial-gradient(circle at 0 0,#111827 0,#020617 55%);border-radius:18px;border:1px solid rgba(156,163,175,0.35);overflow:hidden;">
            <tr>
              <td style="padding:24px 24px 8px 24px;">
                <h1 style="margin:0 0 8px 0;font-size:20px;line-height:1.4;color:#f9fafb;">Thanks for sharing your project 👋</h1>
                <p style="margin:0 0 16px 0;font-size:14px;line-height:1.6;color:#d1d5db;">
                  We’ve received your project <strong>${payload.projectName}</strong>. Our engineering team will review the details and get back to you shortly.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 24px 20px 24px;">
                <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;background:rgba(15,23,42,0.9);border-radius:14px;border:1px solid rgba(75,85,99,0.7);">
                  <tr>
                    <td style="padding:16px 18px 6px 18px;border-bottom:1px solid rgba(55,65,81,0.8);">
                      <p style="margin:0;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#9ca3af;">Summary</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 18px 14px 18px;">
                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;">
                        <tr>
                          <td style="padding:4px 0;font-size:13px;color:#9ca3af;width:110px;">Role type</td>
                          <td style="padding:4px 0;font-size:13px;color:#e5e7eb;">${payload.roleType}</td>
                        </tr>
                        <tr>
                          <td style="padding:4px 0;font-size:13px;color:#9ca3af;width:110px;vertical-align:top;">Tech stack</td>
                          <td style="padding:4px 0;font-size:13px;color:#e5e7eb;">${payload.techStacks.join(
    ", "
  )}</td>
                        </tr>
                        <tr>
                          <td style="padding:4px 0;font-size:13px;color:#9ca3af;width:110px;">Phone</td>
                          <td style="padding:4px 0;font-size:13px;color:#e5e7eb;">${payload.phone}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:0 24px 22px 24px;">
                <p style="margin:0;font-size:12px;line-height:1.6;color:#9ca3af;">
                  You’re receiving this email because you submitted a project on the Devlixir website.
                </p>
                <p style="margin:4px 0 0 0;font-size:12px;line-height:1.6;color:#9ca3af;">
                  Best,<br/>The Devlixir team
                </p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    `;

  return { userSubject: subject, userText: text, userHtml: html };
}

export function getInternalNotificationTemplate(
  payload: ProjectSubmissionEmailPayload
) {
  const subject = `New project submission: ${payload.projectName}`;
  const text = [
    `New project submission received via the website.`,
    ``,
    `Project: ${payload.projectName}`,
    `Role type: ${payload.roleType}`,
    `Tech stack: ${payload.techStacks.join(", ")}`,
    ``,
    `Contact:`,
    `- Email: ${payload.email}`,
    `- Phone: ${payload.phone}`,
    ``,
    `Description:`,
    payload.description,
    ``,
    `Documents:`,
    payload.documentUrls.length
      ? payload.documentUrls.join("\n")
      : "None",
  ].join("\n");

  const html = `
      <div style="margin:0;padding:0;background:#020617;">
        <div style="max-width:720px;margin:0 auto;padding:32px 24px;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#e5e7eb;">
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;">
            <tr>
              <td style="padding-bottom:24px;text-align:left;">
                <div style="display:inline-flex;align-items:center;gap:8px;">
                  <div style="width:10px;height:10px;border-radius:999px;background:linear-gradient(135deg,#7C3AED,#3B82F6);"></div>
                  <span style="font-size:14px;letter-spacing:.12em;text-transform:uppercase;color:#9ca3af;">Devlixir – New Project</span>
                </div>
              </td>
            </tr>
          </table>

          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;background:radial-gradient(circle at 0 0,#111827 0,#020617 55%);border-radius:18px;border:1px solid rgba(156,163,175,0.35);overflow:hidden;">
            <tr>
              <td style="padding:24px 24px 12px 24px;">
                <h1 style="margin:0 0 6px 0;font-size:20px;line-height:1.4;color:#f9fafb;">New project submission</h1>
                <p style="margin:0 0 4px 0;font-size:13px;line-height:1.6;color:#9ca3af;">
                  A new project was submitted via the website. Details below.
                </p>
                <p style="margin:0;font-size:13px;line-height:1.6;color:#9ca3af;">
                  Submitted by <a href="mailto:${payload.email}" style="color:#60a5fa;text-decoration:none;">${payload.email
    }</a>
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:12px 24px 4px 24px;">
                <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;background:rgba(15,23,42,0.9);border-radius:14px;border:1px solid rgba(75,85,99,0.7);margin-bottom:12px;">
                  <tr>
                    <td style="padding:16px 18px 6px 18px;border-bottom:1px solid rgba(55,65,81,0.8);">
                      <p style="margin:0;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#9ca3af;">Project</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 18px 14px 18px;">
                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;">
                        <tr>
                          <td style="padding:4px 0;font-size:13px;color:#9ca3af;width:120px;">Name</td>
                          <td style="padding:4px 0;font-size:13px;color:#e5e7eb;">${payload.projectName}</td>
                        </tr>
                        <tr>
                          <td style="padding:4px 0;font-size:13px;color:#9ca3af;width:120px;">Role type</td>
                          <td style="padding:4px 0;font-size:13px;color:#e5e7eb;">${payload.roleType}</td>
                        </tr>
                        <tr>
                          <td style="padding:4px 0;font-size:13px;color:#9ca3af;width:120px;vertical-align:top;">Tech stack</td>
                          <td style="padding:4px 0;font-size:13px;color:#e5e7eb;">${payload.techStacks.join(
      ", "
    )}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;background:rgba(15,23,42,0.9);border-radius:14px;border:1px solid rgba(75,85,99,0.7);margin-bottom:12px;">
                  <tr>
                    <td style="padding:16px 18px 6px 18px;border-bottom:1px solid rgba(55,65,81,0.8);">
                      <p style="margin:0;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#9ca3af;">Contact</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 18px 14px 18px;">
                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;">
                        <tr>
                          <td style="padding:4px 0;font-size:13px;color:#9ca3af;width:120px;">Email</td>
                          <td style="padding:4px 0;font-size:13px;color:#e5e7eb;">
                            <a href="mailto:${payload.email}" style="color:#60a5fa;text-decoration:none;">${payload.email
    }</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:4px 0;font-size:13px;color:#9ca3af;width:120px;">Phone</td>
                          <td style="padding:4px 0;font-size:13px;color:#e5e7eb;">${payload.phone}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;background:rgba(15,23,42,0.9);border-radius:14px;border:1px solid rgba(75,85,99,0.7);margin-bottom:12px;">
                  <tr>
                    <td style="padding:16px 18px 6px 18px;border-bottom:1px solid rgba(55,65,81,0.8);">
                      <p style="margin:0;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#9ca3af;">Description</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 18px 14px 18px;">
                      <p style="white-space:pre-line;margin:0;font-size:13px;line-height:1.6;color:#e5e7eb;">
                        ${payload.description}
                      </p>
                    </td>
                  </tr>
                </table>

                <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;background:rgba(15,23,42,0.9);border-radius:14px;border:1px solid rgba(75,85,99,0.7);">
                  <tr>
                    <td style="padding:16px 18px 6px 18px;border-bottom:1px solid rgba(55,65,81,0.8);">
                      <p style="margin:0;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#9ca3af;">Documents</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 18px 14px 18px;font-size:13px;color:#e5e7eb;">
                      ${payload.documentUrls.length
      ? `<ul style="padding-left:18px;margin:0;">
                            ${payload.documentUrls
        .map(
          (url) =>
            `<li style="margin:2px 0;"><a href="${url}" target="_blank" rel="noopener noreferrer" style="color:#60a5fa;text-decoration:none;">${url}</a></li>`
        )
        .join("")}
                          </ul>`
      : "<p style='margin:0;color:#9ca3af;'>None</p>"
    }
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </div>
    `;

  return {
    internalSubject: subject,
    internalText: text,
    internalHtml: html,
  };
}


