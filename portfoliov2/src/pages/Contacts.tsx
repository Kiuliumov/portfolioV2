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
    "w-full rounded-lg border border-gray-700 bg-gray-950/50 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition-colors duration-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20";

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-gray-900 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-sky-400/10 to-indigo-700/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <header className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-400">
            Get in touch
          </p>

          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Let's build something{" "}
            <span className="text-sky-400">great.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-gray-300">
            Have an idea, a question, or an exciting project in mind?
            I'd love to hear from you. Send me a message and let's talk.
          </p>
        </header>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <aside className="space-y-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Let's start a conversation.
              </h2>
              <p className="mt-3 leading-relaxed text-gray-400">
                Whether it's a new opportunity or just a quick hello,
                I'm always happy to connect.
              </p>
            </div>

            <div className="group flex gap-4 rounded-xl border border-gray-700/70 bg-gray-800/50 p-5 transition-all duration-300 hover:border-sky-400/40 hover:bg-gray-800">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-xl text-sky-400">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="font-semibold">Send me a message</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  Use the contact form to tell me about your idea,
                  ask a question, or discuss a potential collaboration.
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm text-sky-400">
                  I'd love to hear from you
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>

            <div className="group flex gap-4 rounded-xl border border-gray-700/70 bg-gray-800/50 p-5 transition-all duration-300 hover:border-sky-400/40 hover:bg-gray-800">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-xl text-sky-400">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="font-semibold">Based in Bulgaria</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  Open to connecting and collaborating with people
                  and teams from around the world.
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm text-sky-400">
                  Worldwide collaboration
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-sky-400/20 bg-gradient-to-br from-sky-500/10 to-indigo-500/10 p-6">
              <FaCode className="mb-4 text-2xl text-sky-400" />
              <h3 className="text-lg font-bold">Have a project in mind?</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-300">
                Tell me what you're working on, the problem you're solving,
                or what you'd like to build together.
              </p>
            </div>
          </aside>

          <div className="rounded-xl border border-gray-700/70 bg-gray-800/60 p-5 shadow-xl sm:p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Tell me about it.
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Fill out the form below and I'll get back to you.
              </p>
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
                  Subject{" "}
                  <span className="text-xs font-normal text-gray-500">
                    (optional)
                  </span>
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
                  className="flex items-start gap-3 rounded-lg border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-relaxed text-emerald-300"
                >
                  <FaCheckCircle className="mt-1 shrink-0" />
                  <p>{success}</p>
                </div>
              )}

              {error && (
                <div
                  role="alert"
                  className="rounded-lg border border-red-400/20 bg-red-400/10 p-4 text-sm leading-relaxed text-red-300"
                >
                  {error}
                </div>
              )}

              <div className="flex flex-col gap-4 border-t border-gray-700 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-gray-500">
                  <span className="text-sky-400">*</span> Required fields
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <FaPaperPlane className="transition-transform duration-200 group-hover:translate-x-1" />
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