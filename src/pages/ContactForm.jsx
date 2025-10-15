import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { ref, push } from "firebase/database";
import { database } from "../firebase.config";

export default function ContactForm() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  const handleContactChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast.error("Please fill all fields!");
      return;
    }

    try {
      await push(ref(database, "contactMessages"), contactForm);
      toast.success("Message sent successfully!");
      setContactForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message!");
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 transition-transform hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Contact Us</h2>

        <form onSubmit={handleContactSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={contactForm.name}
            onChange={handleContactChange}
            className="border border-gray-300 p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors hover:border-green-400"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={contactForm.email}
            onChange={handleContactChange}
            className="border border-gray-300 p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors hover:border-green-400"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={contactForm.message}
            onChange={handleContactChange}
            className="border border-gray-300 p-4 rounded-lg w-full h-36 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors hover:border-green-400"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
