"use client";

import { startTransition, useId, useState } from "react";
import type { FormEvent } from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistForm() {
  const inputId = useId();
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedEmail = email.trim();

    if (!EMAIL_PATTERN.test(normalizedEmail)) {
      setError("Enter a valid email address.");
      return;
    }

    startTransition(() => {
      setSubmittedEmail(normalizedEmail);
      setEmail("");
      setError("");
    });
  };

  return (
    <div className="waitlist-form-shell">
      <form className="waitlist-form" onSubmit={handleSubmit} noValidate>
        <label className="waitlist-form__label" htmlFor={inputId}>
          Email address
        </label>
        <div className="waitlist-form__row">
          <input
            id={inputId}
            className="waitlist-form__input"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-describedby={error ? `${inputId}-error` : `${inputId}-hint`}
            aria-invalid={error ? "true" : "false"}
          />
          <button className="button waitlist-form__button" type="submit">
            Join waitlist
          </button>
        </div>
        <p className="waitlist-form__hint" id={`${inputId}-hint`}>
          Launch notes only. No weekly marketing emails.
        </p>
        {error ? (
          <p className="waitlist-form__error" id={`${inputId}-error`}>
            {error}
          </p>
        ) : null}
      </form>

      {submittedEmail ? (
        <p className="waitlist-form__success">
          {submittedEmail} is on the list. We&apos;ll send launch timing and finish
          availability first.
        </p>
      ) : null}
    </div>
  );
}
