"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { Button } from "@/app/_components/ui/Button";
import { ArrowRightIcon } from "@/app/_components/ui/Icon";
import { SERVICE_OPTIONS } from "@/app/_data/contact";
import { submitContact } from "@/app/_actions/contact";
import { initialContactState } from "@/app/_lib/contact-form";

import styles from "./ContactForm.module.css";

function SubmitButton({ disabled }: { disabled?: boolean }) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className={styles.submit}
      disabled={pending || disabled}
      aria-busy={pending}
    >
      {pending ? "Sending…" : "Send message"}
      {!pending && <ArrowRightIcon />}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialContactState);

  const isSuccess = state.status === "success";
  const isError = state.status === "error";
  const errors = state.errors ?? {};

  return (
    <form action={formAction} className={styles.form}>
      {/* Honeypot — hidden field that bots tend to fill */}
      <div className={styles.honeypot} aria-hidden>
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className={styles.row}>
        <Field
          label="First name"
          name="fname"
          autoComplete="given-name"
          placeholder="Jane"
          required
          error={errors.fname}
        />
        <Field
          label="Last name"
          name="lname"
          autoComplete="family-name"
          placeholder="Smith"
          required
          error={errors.lname}
        />
      </div>

      <Field
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="jane@company.com"
        required
        error={errors.email}
      />

      <div className={styles.field}>
        <label htmlFor="service">What can we help with?</label>
        <select
          id="service"
          name="service"
          defaultValue=""
          required
          aria-invalid={Boolean(errors.service)}
          aria-describedby={errors.service ? "service-error" : undefined}
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id="service-error" className={styles.error}>
            {errors.service}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Tell us about your project</label>
        <textarea
          id="message"
          name="message"
          placeholder="Share your idea, challenge, or goal…"
          required
          rows={4}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className={styles.error}>
            {errors.message}
          </p>
        )}
      </div>

      <SubmitButton disabled={isSuccess} />

      <div
        className={[
          styles.status,
          isSuccess ? styles.statusSuccess : "",
          isError ? styles.statusError : "",
        ]
          .filter(Boolean)
          .join(" ")}
        role="status"
        aria-live="polite"
      >
        {state.message}
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
};

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  autoComplete,
  error,
}: FieldProps) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />
      {error && (
        <p id={errorId} className={styles.error}>
          {error}
        </p>
      )}
    </div>
  );
}
