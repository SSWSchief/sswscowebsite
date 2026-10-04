import { DISPATCH } from "@/lib/site";
import { NextResponse } from "next/server";

type QuotePayload = {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  projectType?: string;
  dumpsterSize?: string;
  deliveryDate?: string;
  details?: string;
  formType?: string;
};

function formatConfirmation(data: Pick<QuotePayload, "name" | "phone" | "projectType" | "dumpsterSize">): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="font-family:Arial,sans-serif;background:#f4f7fa;margin:0;padding:32px;">
  <div style="max-width:520px;margin:0 auto;background:#fff;border-top:4px solid #105499;">
    <div style="background:#052F66;padding:20px 24px;">
      <p style="color:#B1C7DA;font-size:11px;text-transform:uppercase;letter-spacing:2px;margin:0 0 4px;">Silver State Waste Solutions</p>
      <h1 style="color:#fff;font-size:20px;margin:0;">We got your quote request!</h1>
    </div>
    <div style="padding:24px;">
      <p style="font-size:14px;color:#1E2328;margin:0 0 16px;">Hi ${data.name},</p>
      <p style="font-size:14px;color:#626367;line-height:1.6;margin:0 0 16px;">
        Thanks for reaching out to Silver State Waste Solutions. We've received your quote request and will get back to you shortly.
      </p>
      ${data.dumpsterSize || data.projectType ? `
      <div style="background:#f4f7fa;border-left:4px solid #105499;padding:12px 16px;margin:0 0 16px;">
        ${data.dumpsterSize ? `<p style="font-size:13px;color:#1E2328;margin:0 0 4px;"><strong>Dumpster Size:</strong> ${data.dumpsterSize}</p>` : ""}
        ${data.projectType ? `<p style="font-size:13px;color:#1E2328;margin:0;"><strong>Project Type:</strong> ${data.projectType}</p>` : ""}
      </div>` : ""}
      <p style="font-size:14px;color:#626367;line-height:1.6;margin:0 0 16px;">
        For a faster response, contact dispatch directly:
      </p>
      <a href="${DISPATCH.e164 ? DISPATCH.tel : "https://sswsco.com/contact"}" style="display:inline-block;background:#105499;color:#fff;padding:12px 24px;font-size:14px;font-weight:600;text-decoration:none;letter-spacing:0.05em;">${DISPATCH.display}</a>
    </div>
    <div style="padding:16px 24px;background:#f4f7fa;border-top:1px solid #e5e7eb;">
      <p style="font-size:12px;color:#95989D;margin:0;">Silver State Waste Solutions — Serving Las Vegas, North Las Vegas &amp; Henderson</p>
    </div>
  </div>
</body>
</html>`;
}

function formatBody(data: QuotePayload): string {
  const rows = [
    ["Name", data.name],
    ["Phone", data.phone],
    data.email ? ["Email", data.email] : null,
    data.address ? ["Address", data.address] : null,
    data.projectType ? ["Project Type", data.projectType] : null,
    data.dumpsterSize ? ["Dumpster Size", data.dumpsterSize] : null,
    data.deliveryDate ? ["Preferred Delivery", data.deliveryDate] : null,
    data.details ? ["Details", data.details] : null,
    ["Form Source", data.formType ?? "General"],
    ["Submitted", new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })],
  ].filter(Boolean) as [string, string][];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 16px;background:#f4f7fa;font-weight:600;font-size:13px;color:#1E2328;white-space:nowrap;border-bottom:1px solid #e5e7eb;">${label}</td><td style="padding:8px 16px;font-size:13px;color:#626367;border-bottom:1px solid #e5e7eb;">${value}</td></tr>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="font-family:Arial,sans-serif;background:#f4f7fa;margin:0;padding:32px;">
  <div style="max-width:520px;margin:0 auto;background:#fff;border-top:4px solid #105499;">
    <div style="background:#052F66;padding:20px 24px;">
      <p style="color:#B1C7DA;font-size:11px;text-transform:uppercase;letter-spacing:2px;margin:0 0 4px;">Silver State Waste Solutions</p>
      <h1 style="color:#fff;font-size:20px;margin:0;">New Quote Request</h1>
    </div>
    <div style="padding:0;">
      <table style="width:100%;border-collapse:collapse;">${tableRows}</table>
    </div>
    <div style="padding:16px 24px;background:#f4f7fa;border-top:1px solid #e5e7eb;">
      <p style="font-size:12px;color:#95989D;margin:0;">Reply directly to this email or call the customer at the number above.</p>
    </div>
  </div>
</body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, address, projectType, dumpsterSize, deliveryDate, details, formType } =
      body as QuotePayload;

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);

      const fromAddress = process.env.QUOTE_EMAIL_FROM ?? "quotes@sswsco.com";

      await resend.emails.send({
        from: fromAddress,
        to: process.env.QUOTE_EMAIL_TO ?? "info@sswsco.com",
        replyTo: email ?? undefined,
        subject: `New Quote Request — ${formType ?? "General"} — ${name}`,
        html: formatBody({ name, phone, email, address, projectType, dumpsterSize, deliveryDate, details, formType }),
      });

      if (email) {
        await resend.emails.send({
          from: fromAddress,
          to: email,
          replyTo: process.env.QUOTE_EMAIL_TO ?? "info@sswsco.com",
          subject: "We received your quote request — Silver State Waste Solutions",
          html: formatConfirmation({ name, phone, projectType, dumpsterSize }),
        });
      }
    } else {
      // No API key set — log to console for local dev
      console.log("Quote request received (no RESEND_API_KEY set):", {
        formType, name, phone, email, address, projectType, dumpsterSize, deliveryDate, details,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Quote route error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
