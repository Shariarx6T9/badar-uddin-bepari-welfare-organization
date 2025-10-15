// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { ref, onValue, remove } from "firebase/database";
import { database } from "../firebase.config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const messagesRef = ref(database, "contactMessages");

    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const parsedMessages = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setMessages(parsedMessages);
      } else {
        setMessages([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        await remove(ref(database, `contactMessages/${id}`));
        toast.success("Message deleted successfully!");
      } catch (error) {
        console.error(error);
        toast.error("Failed to delete message!");
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Banner Section */}
      <section
        className="banner text-white text-center py-20 rounded-xl relative overflow-hidden mb-12"
        style={{ background: "linear-gradient(180deg, #10b981 0%, #065f46 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 relative">
          <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Welcome to your dashboard. Here you can view messages submitted through the contact form.
          </p>

          {/* Logout Button */}
          <button
            onClick={() => navigate("/")}
            className="absolute top-5 right-5 px-4 py-2 bg-white text-green-700 rounded-lg hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </div>
      </section>

      {/* Contact Messages Card */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-gray-800 overflow-x-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-800">Contact Messages</h2>

        {messages.length === 0 ? (
          <p className="text-center text-gray-500">No messages yet.</p>
        ) : (
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Name</th>
                <th className="border p-3 text-left">Email</th>
                <th className="border p-3 text-left">Message</th>
                <th className="border p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg.id} className="hover:bg-gray-50">
                  <td className="border p-3">{msg.name}</td>
                  <td className="border p-3">{msg.email}</td>
                  <td className="border p-3">{msg.message}</td>
                  <td className="border p-3">
                    <button
                      onClick={() => handleDelete(msg.id)}
                      className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
