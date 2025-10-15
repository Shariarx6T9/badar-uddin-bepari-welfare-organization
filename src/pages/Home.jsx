// src/pages/Home.jsx
import React, { useState, useRef } from "react";
import { toast } from "react-hot-toast";
import { ref, push } from "firebase/database";
import { database } from "../firebase.config";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const contactRef = useRef(null);

  // Member login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Demo login credentials
  const demoEmail = "member@example.com";
  const demoPassword = "123456";

  const handleLogin = () => {
    if (!email.trim() || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (email === demoEmail && password === demoPassword) {
      toast.success("Login Successful!");
      navigate("/admin-dashboard"); // Redirect to admin dashboard
    } else {
      toast.error("Access Denied. Contact Shariar");
    }
  };

  const handleForgotPassword = () => toast.error("Forgot Password: Contact Shariar");
  const handleRegister = () => toast.error("Register: Contact Shariar");

  // Contact form state
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

  const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Banner Section */}
      <section
        className="banner text-white text-center py-20 rounded-xl relative overflow-hidden mb-12"
        style={{ background: "linear-gradient(180deg, #10b981 0%, #065f46 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Welfare Organization</h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Making a difference in lives, one step at a time.
          </p>

          {/* Member Login Card */}
          <div className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-gray-800 mt-8">
            <h2 className="text-2xl font-bold mb-4 text-center">সদস্য হিসেবে লগইন করুন</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
              className="space-y-4"
            >
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 hover:border-green-500 transition"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 hover:border-green-500 transition"
              />
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
              >
                LOGIN
              </button>
            </form>

            <div className="flex justify-between text-sm text-green-700 mt-2">
              <button onClick={handleForgotPassword} className="underline hover:text-green-900 transition">
                Forgot Password?
              </button>
              <button onClick={handleRegister} className="underline hover:text-green-900 transition">
                Register
              </button>
            </div>
          </div>

          {/* Scroll to Contact Button */}
          <button
            onClick={scrollToContact}
            className="mt-6 px-6 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Motive & Ambition Section */}
      <section className="motive-ambition flex-1 py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-2">
          <div className="card p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-4 text-green-800">Our Motive</h2>
            <p className="text-gray-700">
              To create a compassionate community where every individual,
              regardless of their background, has access to opportunities,
              education, and support. We strive to empower people to uplift
              themselves and contribute positively to society.
            </p>
          </div>

          <div className="card p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-4 text-green-800">Our Ambition</h2>
            <p className="text-gray-700">
              Our ambition is to become a beacon of hope and sustainable change,
              inspiring collective action and driving initiatives that address
              social, educational, and health challenges. Through dedication,
              innovation, and collaboration, we aim to transform lives and
              foster a better tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={contactRef} className="contact-form py-16 px-4">
        <div className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-center text-green-800">Contact Us</h2>

          <form onSubmit={handleContactSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={contactForm.name}
              onChange={handleContactChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 hover:border-green-500 transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={contactForm.email}
              onChange={handleContactChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 hover:border-green-500 transition"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={contactForm.message}
              onChange={handleContactChange}
              className="w-full px-4 py-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-green-500 hover:border-green-500 transition"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
