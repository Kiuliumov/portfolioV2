import { useState, type FormEvent, type ChangeEvent } from "react";
import { FaArrowRight } from "react-icons/fa";
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

		setForm((prev) => ({ ...prev, [name]: value }));
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

			setSuccess("Message sent successfully. Thanks for reaching out!");
			setForm(initialForm);
		} catch {
			setError("Something went wrong. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	const inputClass =
		"w-full rounded-lg border border-white/10 bg-gray-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-sky-400";

	const labelClass = "mb-2 block text-sm font-medium text-slate-300";

	return (
		<section
			id="contact"
			className="relative overflow-hidden bg-gray-900 px-6 py-24 text-white"
		>
			<div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-sky-400/10 to-indigo-700/10 blur-3xl" />

			<div className="relative z-10 mx-auto w-full max-w-xl">
				<div className="mb-10 text-center">
					<div className="mx-auto mb-5 h-1 w-10 rounded-full bg-sky-400" />
					<h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
						Contact <span className="text-sky-400">Me</span>
					</h2>
				</div>

				<div className="rounded-2xl border border-white/10 bg-[#111827]/90 p-6 shadow-xl shadow-black/10 sm:p-9">
					<form onSubmit={handleSubmit} className="space-y-7">
						<div className="grid gap-6 sm:grid-cols-2">
							<div>
								<label htmlFor="name" className={labelClass}>
									Name *
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
									Email *
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
							</label>
							<input
								id="subject"
								name="subject"
								type="text"
								maxLength={150}
								value={form.subject}
								onChange={handleChange}
								placeholder="Subject (optional)"
								className={inputClass}
							/>
						</div>

						<div>
							<label htmlFor="message" className={labelClass}>
								Message *
							</label>
							<textarea
								id="message"
								name="message"
								rows={5}
								required
								maxLength={10000}
								value={form.message}
								onChange={handleChange}
								placeholder="Your message..."
								className={`${inputClass} resize-none leading-7`}
							/>
						</div>

						{success && (
							<p
								role="status"
								aria-live="polite"
								className="text-sm text-emerald-400"
							>
								{success}
							</p>
						)}

						{error && (
							<p role="alert" className="text-sm text-red-400">
								{error}
							</p>
						)}

						<div className="flex items-center justify-between border-t border-white/10 pt-6">
							<span className="text-xs text-slate-500">* Required</span>

							<button
								type="submit"
								disabled={isSubmitting}
								className="inline-flex items-center gap-3 rounded-lg bg-sky-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-50"
							>
								{isSubmitting ? "Sending..." : "Send message"}
								{!isSubmitting && <FaArrowRight className="text-xs" />}
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
