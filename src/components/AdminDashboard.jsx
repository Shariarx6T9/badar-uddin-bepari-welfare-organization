import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase.config";

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesRef = ref(database, "contactMessages");

    // Listen for realtime updates
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert object to array with id
        const parsedMessages = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setMessages(parsedMessages);
      } else {
        setMessages([]);
      }
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl my-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Admin Dashboard - Contact Messages
      </h2>

      {messages.length === 0 ? (
        <p className="text-center text-gray-500">No messages yet.</p>
      ) : (
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg.id}>
                <td className="border p-2">{msg.name}</td>
                <td className="border p-2">{msg.email}</td>
                <td className="border p-2">{msg.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
