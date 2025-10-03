import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

const firebaseConfig = {
  apiKey: "AIzaSyAj4hbemsnaFT6kaX3uffXiTf93ZdQQeWs",
  authDomain: "reviews-7bc09.firebaseapp.com",
  projectId: "reviews-7bc09",
  storageBucket: "reviews-7bc09.firebasestorage.app",
  messagingSenderId: "1087527214005",
  appId: "1:1087527214005:web:b08ba8e386994a1e3017fc",
  measurementId: "G-9503YFZX7X",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [formMessage, setFormMessage] = useState("");
  const [messageColor, setMessageColor] = useState("text-gray-700");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setFormMessage("Please fill in all fields.");
      setMessageColor("text-red-600");
      return;
    }

    try {
      await db.collection("contacts").add({
        name,
        email,
        message,
        date: new Date().toISOString(),
      });
      setFormMessage("Message sent successfully. Thank you!");
      setMessageColor("text-green-600");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setFormMessage("There was an error sending your message. Please try again.");
      setMessageColor("text-gray-700");
    }
  };

  return (
    <section className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-sky-400/20 to-indigo-700/10 blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10 w-full max-w-3xl px-6 py-16 md:py-20 flex flex-col items-center">
        <h2 className="text-4xl font-extrabold mb-4 text-center text-sky-400 pt-5">Contact Me</h2>
        <p className="text-gray-300 text-center mb-12">
          Have a question or want to work together? Fill out the form below and I’ll get back to you as soon as possible.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-gray-800 p-8 rounded-2xl shadow-2xl backdrop-blur-md w-full"
        >
          <div className="flex items-center gap-3 bg-gray-700 rounded-md p-3 focus-within:ring-2 focus-within:ring-sky-500 transition">
            <FaUser className="text-gray-300" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent text-white w-full focus:outline-none"
              required
            />
          </div>

          <div className="flex items-center gap-3 bg-gray-700 rounded-md p-3 focus-within:ring-2 focus-within:ring-sky-500 transition">
            <FaEnvelope className="text-gray-300" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent text-white w-full focus:outline-none"
              required
            />
          </div>

          <div className="flex items-start gap-3 bg-gray-700 rounded-md p-3 focus-within:ring-2 focus-within:ring-sky-500 transition">
            <FaCommentDots className="text-gray-300 mt-2" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="bg-transparent text-white w-full focus:outline-none resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-400 font-medium py-3 rounded-xl transition-transform duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {formMessage && (
          <p className={`mt-6 text-center ${messageColor} font-medium`}>{formMessage}</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
