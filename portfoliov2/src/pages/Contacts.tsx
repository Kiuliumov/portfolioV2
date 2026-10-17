import { useState, type FormEvent } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaArrowRight,
  FaCheckCircle,
  FaCode,
} from "react-icons/fa";
import { createMessage } from "../api/messages";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSuccess("");
    setError("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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

      setSuccess("Message sent successfully! I'll get back to you soon.");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setError(
        "Something went wrong while sending your message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-white/[0.10] bg-gray-950/60 px-4 py-3.5 text-sm text-white placeholder:text-gray-600 outline-none transition-all duration-200 hover:border-white/20 focus:border-sky-400/70 focus:bg-gray-950/90 focus:ring-4 focus:ring-sky-400/[0.08]";

  return (
    <section
      id="contact"
      className="relative isolate min-h-screen overflow-hidden bg-[#080c16] text-white"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-sky-500/[0.12] blur-[120px]" />
        <div className="absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-violet-600/[0.12] blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        {/* Hero */}
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-sky-400/20 bg-sky-400/[0.06] px-4 py-2 text-xs font-semibold tracking-wide text-sky-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            OPEN TO INTERESTING PROJECTS
          </div>

          <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-sky-400 sm:text-sm">
            Get in touch
          </p>

          <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Let's build
            <br />
            something{" "}
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              great.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            Have an idea, a question, or an exciting project in mind?
            I'd love to hear about it. Drop me a message and let's
            make something happen.
          </p>

          <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" />
        </header>

        {/* Main content */}
        <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          {/* Contact information */}
          <aside className="space-y-5">
            <div className="mb-7">
              <p className="mb-2 text-sm font-semibold text-sky-400">
                CONTACT DETAILS
              </p>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Let's start a conversation.
              </h2>
              <p className="mt-3 max-w-md leading-7 text-gray-400">
                Whether it's a new opportunity or just a quick hello,
                my inbox is always open.
              </p>
            </div>

            <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/[0.045]">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-400/20 bg-gradient-to-br from-sky-400/15 to-blue-500/5 text-lg text-sky-300 transition-transform duration-300 group-hover:scale-105">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Send me a message
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    Have something on your mind? Tell me about it
                    using the contact form.
                  </p>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-sky-300">
                    Usually happy to chat
                    <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>

            <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.045]">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-gradient-to-br from-violet-400/15 to-purple-500/5 text-lg text-violet-300 transition-transform duration-300 group-hover:scale-105">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Based in Bulgaria
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    Open to connecting with people and teams around
                    the world.
                  </p>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-violet-300">
                    Worldwide collaboration
                    <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-sky-400/15 bg-gradient-to-br from-sky-500/[0.10] via-indigo-500/[0.06] to-violet-500/[0.10] p-6 sm:p-7">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-white/[0.06]" />
              <div className="absolute -right-3 -top-3 h-16 w-16 rounded-full border border-white/[0.06]" />

              <div className="relative">
                <FaCode className="mb-4 text-2xl text-sky-300" />
                <h3 className="text-lg font-bold">Have an idea?</h3>
                <p className="mt-2 text-sm leading-6 text-gray-300">
                  Share your vision, the problem you're solving,
                  or the project you'd love to bring to life.
                </p>
              </div>
            </div>
          </aside>

          {/* Contact form */}
          <div className="rounded-2xl border border-white/[0.10] bg-gray-900/70 p-5 shadow-[0_20px_80px_-25px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
                  <span className="h-px w-5 bg-sky-400" />
                  Your message
                </div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Tell me about it.
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Fill out the form below and I'll be in touch.
                </p>
              </div>

              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-xl text-sky-300 sm:flex">
                <FaPaperPlane />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Your name <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={100}
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Email address <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Subject <span className="text-xs font-normal text-gray-500">(optional)</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  maxLength={150}
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  className={inputClasses}
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Your message <span className="text-sky-400">*</span>
                  </label>
                  <span
                    className={`text-xs tabular-nums ${
                      form.message.length > 9000
                        ? "text-amber-400"
                        : "text-gray-500"
                    }`}
                  >
                    {form.message.length.toLocaleString()}/10,000
                  </span>
                </div>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  maxLength={10000}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me a little about your idea..."
                  className={`${inputClasses} min-h-40 resize-y leading-7`}
                />
              </div>

              {success && (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex items-start gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07] p-4 text-sm leading-6 text-emerald-300"
                >
                  <FaCheckCircle className="mt-1 shrink-0" />
                  <p>{success}</p>
                </div>
              )}

              {error && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-400/20 bg-red-400/[0.07] p-4 text-sm leading-6 text-red-300"
                >
                  {error}
                </div>
              )}

              <div className="flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-5 text-gray-500">
                  <span className="text-sky-400">*</span> Required fields
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-sky-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-400 hover:shadow-xl hover:shadow-sky-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <FaPaperPlane className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        <footer className="mt-16 text-center">
          <p className="text-xs tracking-wide text-gray-600">
            Thanks for stopping by. I look forward to hearing from you.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
