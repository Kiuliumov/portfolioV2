import { useState, type FormEvent, type ChangeEvent } from "react";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { createMessage } from "../api/messages";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSuccess("");
    setError("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSuccess("");
    setError("");

    try {
      await createMessage({
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      });

      setSuccess("Your message has been sent. Thanks for reaching out!");
      setForm(initialForm);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-white/10 bg-[#0b1220]/50 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-colors duration-200 hover:border-white/20 focus:border-sky-500 focus:bg-[#0b1220]/70 focus:ring-1 focus:ring-sky-500/30";

  const labelClass = "mb-2 block text-sm font-medium text-slate-300";

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-gray-900 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-sky-400/10 to-indigo-700/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

          <div className="lg:sticky lg:top-32">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-sky-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                Contact
              </span>
            </div>

            <h2 className="max-w-md text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl">
              Let's get in touch.
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-slate-400">
              Have a project in mind, a question, or just want to say hello?
              Send me a message and I'll get back to you.
            </p>

            <div className="mt-12 border-t border-white/10 pt-7">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-sky-400" />
                <div>
                  <p className="text-sm font-medium text-white">
                    Bulgaria
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Open to remote opportunities and collaborations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#0b1220]/40 p-6 sm:p-8 md:p-10">
            <div className="mb-8">
              <h3 className="text-xl font-semibold tracking-tight">
                Send a message
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Fill out the form below to get in touch.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Name <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={labelClass}>
                  Subject
                  <span className="ml-2 text-xs font-normal text-slate-500">
                    Optional
                  </span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  maxLength={150}
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  className={inputClass}
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">
                    Message <span className="text-sky-400">*</span>
                  </label>
                  <span className="text-xs tabular-nums text-slate-500">
                    {form.message.length.toLocaleString()} / 10,000
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  maxLength={10000}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me what's on your mind..."
                  className={`${inputClass} min-h-40 resize-y leading-7`}
                />
              </div>

              {success && (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300"
                >
                  {success}
                </div>
              )}

              {error && (
                <div
                  role="alert"
                  className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                >
                  {error}
                </div>
              )}

              <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-500">
                  <span className="text-sky-400">*</span> Required fields
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-lg bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send message
                      <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;