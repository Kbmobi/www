"use client";

import { FormEvent, useMemo, useState } from "react";

type SubmitState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<SubmitState>("idle");

  const endpoint = useMemo(() => {
    const emailChars = [
      105, 110, 102, 111, 64, 107, 101, 101, 103, 97, 110, 98, 97, 105, 108, 101,
      121, 46, 99, 111, 109,
    ];
    const email = String.fromCharCode(...emailChars);
    return `https://formsubmit.co/ajax/${email}`;
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.currentTarget);

    // Basic bot trap. Real users won't fill this hidden field.
    if ((formData.get("_website") as string)?.trim()) {
      setStatus("success");
      event.currentTarget.reset();
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4 rounded-lg border border-zinc-200 bg-white p-6">
      <input type="hidden" name="_subject" value="New message from keeganbailey.com" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />

      <label className="block">
        <span className="mb-1 block text-sm font-medium text-zinc-800">Name</span>
        <input
          type="text"
          name="name"
          required
          className="w-full rounded-md border border-zinc-300 px-3 py-2 outline-none ring-zinc-300 focus:ring"
        />
      </label>

      <label className="block">
        <span className="mb-1 block text-sm font-medium text-zinc-800">Email</span>
        <input
          type="email"
          name="email"
          required
          className="w-full rounded-md border border-zinc-300 px-3 py-2 outline-none ring-zinc-300 focus:ring"
        />
      </label>

      <label className="block">
        <span className="mb-1 block text-sm font-medium text-zinc-800">Message</span>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full rounded-md border border-zinc-300 px-3 py-2 outline-none ring-zinc-300 focus:ring"
        />
      </label>

      <label className="hidden" aria-hidden="true">
        Website
        <input type="text" name="_website" tabIndex={-1} autoComplete="off" />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-md bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-sm text-emerald-700">Message sent. Thanks, I will reply soon.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-700">Could not send right now. Please try again shortly.</p>
      )}
    </form>
  );
}
