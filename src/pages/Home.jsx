import React, { useState } from "react";
import { toast } from "react-hot-toast";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

    toast.error("Access Denied. Contact Shariar");
  };

  const handleForgotPassword = () => {
    toast.error("Forgot Password: Contact Shariar");
  };

  const handleRegister = () => {
    toast.error("Register: Contact Shariar");
  };

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

          {/* Login Card */}
          <div className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-lg text-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-center">সদস্য হিসেবে লগইন করুন</h2>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              onClick={handleLogin}
              className="w-full mb-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
            >
              LOGIN
            </button>

            <div className="flex justify-between text-sm text-green-700">
              <button onClick={handleForgotPassword} className="underline">
                Forgot Password?
              </button>
              <button onClick={handleRegister} className="underline">
                Register
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Motive & Ambition Section */}
      <section className="motive-ambition flex-1 py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-2">
          {/* Motive Card */}
          <div className="card p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-green-800">Our Motive</h2>
            <p className="text-gray-700">
              To create a compassionate community where every individual,
              regardless of their background, has access to opportunities,
              education, and support. We strive to empower people to uplift
              themselves and contribute positively to society.
            </p>
          </div>

          {/* Ambition Card */}
          <div className="card p-6 bg-white rounded-xl shadow-md">
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
    </div>
  );
}
