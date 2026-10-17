import { useState, type FormEvent } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
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

		setSuccess("Your message has been sent successfully. Thank you!");
		setForm({
			name: "",
			email: "",
			subject: "",
			message: "",
		});
	} catch {
		setError(
			"Sorry, your message could not be sent. Please try again later.",
		);
	} finally {
		setIsSubmitting(false);
	}
};

const inputClasses =
	"w-full rounded-lg border border-gray-700 bg-gray-800/80 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20";

return (
	<section className="relative min-h-screen overflow-hidden bg-gray-900 text-white">
		<div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-sky-400/20 to-indigo-700/10 blur-3xl" />

		<div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-28">
			<div className="mb-14 text-center animate-fadeInUp">
				<p className="mb-4 font-semibold uppercase tracking-[0.3em] text-sky-400">
					Get in touch
				</p>

				<h1 className="text-4xl font-extrabold md:text-6xl">
					Let's <span className="text-sky-400">talk.</span>
				</h1>

				<p className="mx-auto mt-6 max-w-2xl leading-relaxed text-gray-300">
					Have a question, a project idea, or just want to connect? Feel
					free to send me a message. I'd love to hear from you.
				</p>
			</div>

			<div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
				<div className="flex flex-col gap-6 animate-fadeInUp">
					<div className="rounded-2xl border border-gray-700/60 bg-gray-800/50 p-7 shadow-xl backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
						<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-xl text-sky-400">
							<FaEnvelope />
						</div>

						<h2 className="text-xl font-bold">Send me a message</h2>
						<p className="mt-3 leading-relaxed text-gray-400">
							Use the form and I'll get back to you as soon as I can.
						</p>
					</div>

					<div className="rounded-2xl border border-gray-700/60 bg-gray-800/50 p-7 shadow-xl backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
						<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-xl text-purple-400">
							<FaMapMarkerAlt />
						</div>

						<h2 className="text-xl font-bold">Based in Bulgaria</h2>
						<p className="mt-3 leading-relaxed text-gray-400">
							Available for conversations about software development,
							technology, and interesting projects.
						</p>
					</div>

					<div className="rounded-2xl border border-gray-700/60 bg-gradient-to-br from-sky-500/10 to-purple-500/10 p-7">
						<h2 className="text-lg font-semibold text-sky-400">
							Have an idea?
						</h2>
						<p className="mt-2 text-gray-300">
							Tell me a little about it. Let's see what we can build
							together.
						</p>
					</div>
				</div>

				<div className="animate-fadeInUp rounded-2xl border border-gray-700/60 bg-gray-800/60 p-6 shadow-2xl backdrop-blur-sm sm:p-9">
					<h2 className="mb-2 text-2xl font-bold">Send a message</h2>
					<p className="mb-8 text-sm text-gray-400">
						Fields marked with * are required.
					</p>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="grid gap-6 sm:grid-cols-2">
							<div>
								<label
									htmlFor="name"
									className="mb-2 block text-sm font-medium text-gray-300"
								>
									Your name *
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
									Your email *
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
								Subject
							</label>
							<input
								id="subject"
								name="subject"
								type="text"
								maxLength={150}
								value={form.subject}
								onChange={handleChange}
								placeholder="What would you like to discuss?"
								className={inputClasses}
							/>
						</div>

						<div>
							<label
								htmlFor="message"
								className="mb-2 block text-sm font-medium text-gray-300"
							>
								Your message *
							</label>
							<textarea
								id="message"
								name="message"
								rows={6}
								maxLength={10000}
								required
								value={form.message}
								onChange={handleChange}
								placeholder="Write your message here..."
								className={`${inputClasses} resize-y`}
							/>
							<p className="mt-2 text-right text-xs text-gray-500">
								{form.message.length}/10000
							</p>
						</div>

						{success && (
							<div
								role="status"
								aria-live="polite"
								className="rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-300"
							>
								{success}
							</div>
						)}

						{error && (
							<div
								role="alert"
								className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300"
							>
								{error}
							</div>
						)}

						<button
							type="submit"
							disabled={isSubmitting}
							className="flex w-full items-center justify-center gap-3 rounded-lg bg-sky-500 px-6 py-4 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 sm:w-auto"
						>
							<FaPaperPlane />
							{isSubmitting ? "Sending..." : "Send Message"}
						</button>
					</form>
				</div>
			</div>
		</div>
	</section>
);

};

export default Contact;