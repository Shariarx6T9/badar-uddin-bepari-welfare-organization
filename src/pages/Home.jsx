import React, { useState } from "react";
import { toast } from "react-toastify";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter both email and password.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // 🔹 Replaced alert with toast
    toast.error("Access Denied. Contact Shariar 🚫");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Banner Section */}
      <section
        className="banner text-white text-center py-20"
        style={{
          background: "linear-gradient(180deg, #10b981 0%, #065f46 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Welfare Organization</h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Making a difference in lives, one step at a time.
          </p>

          {/* Login card inside banner */}
          <div className="mx-auto max-w-md card">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Member Login
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/90 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-300"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white/90 mb-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
                  className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-300"
                  required
                />
              </div>

              {error && (
                <p className="text-sm text-red-200 bg-red-800/20 px-3 py-2 rounded">
                  {error}
                </p>
              )}

              <div className="flex items-center justify-between gap-4">
                <button
                  type="submit"
                  className="flex-1 rounded-md bg-white/90 text-green-800 font-semibold px-4 py-2 hover:opacity-95 transition"
                >
                  Sign In
                </button>

                <a
                  href="#"
                  className="text-sm text-white/90 underline hover:text-white"
                >
                  Forgot?
                </a>
              </div>
            </form>

            <p className="mt-4 text-xs text-white/80">
              Don't have an account?{" "}
              <a href="#" className="underline text-white">
                Register
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Motive & Ambition Section */}
      <section className="motive-ambition flex-1 py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-2">
          {/* Motive Card */}
          <div className="card">
            <h2 className="text-2xl font-semibold mb-4 text-green-800">
              Our Motive
            </h2>
            <p className="text-gray-700">
              To create a compassionate community where every individual,
              regardless of their background, has access to opportunities,
              education, and support. We strive to empower people to uplift
              themselves and contribute positively to society.
            </p>
          </div>

          {/* Ambition Card */}
          <div className="card">
            <h2 className="text-2xl font-semibold mb-4 text-green-800">
              Our Ambition
            </h2>
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
};

export default Home;
