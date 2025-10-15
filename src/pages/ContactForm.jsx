import React, { useState } from "react";
import { ref, push } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { database as db } from "../firebase.config";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      push(ref(db, "messages"), {
        name,
        email,
        message,
      })
        .then(() => {
          toast.success("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch(() => {
          toast.error("Failed to send message. Please try again.");
        });
    } else {
      toast.warn("Please fill in all fields.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 flex justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600 mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 to-green-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:opacity-90"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;