"use server";

import { SERVICE_OPTIONS } from "@/app/_data/contact";
import type { ContactState } from "@/app/_lib/contact-form";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getString(formData: FormData, key: string): string {
  const v = formData.get(key);
  return typeof v === "string" ? v.trim() : "";
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot — silently succeed if filled (likely bot)
  const honey = getString(formData, "company");
  if (honey) {
    return { status: "success", message: "Thanks — we'll be in touch within 24 hours." };
  }

  const fname = getString(formData, "fname");
  const lname = getString(formData, "lname");
  const email = getString(formData, "email");
  const service = getString(formData, "service");
  const message = getString(formData, "message");

  const errors: ContactState["errors"] = {};
  if (fname.length < 1) errors.fname = "Please enter your first name.";
  if (lname.length < 1) errors.lname = "Please enter your last name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email.";
  if (service.length < 1) {
    errors.service = "Please select a service.";
  } else if (!(SERVICE_OPTIONS as readonly string[]).includes(service)) {
    errors.service = "Please select a valid service.";
  }
  if (message.length < 10) {
    errors.message = "Please share a bit more about your project (at least 10 characters).";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      errors,
    };
  }

  // In production, forward to email provider / CRM here.
  // e.g. await sendEmail({ to: "hello@zero2one.digital", from: email, body: message })

  return {
    status: "success",
    message: "Thanks — we'll be in touch within 24 hours.",
  };
}
