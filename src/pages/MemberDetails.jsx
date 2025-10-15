import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import membersData from "../data/members.json";
import "../index.css";

export default function MemberDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState(null);

  useEffect(() => {
    const numericId = Number(id);
    const foundMember = membersData.find((m) => m.id === numericId);
    if (foundMember) {
      setMember(foundMember);
    }
  }, [id]);

  if (!member) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-[70vh] text-center gap-4"
      >
        <h2>অনুরোধকৃত সদস্যের তথ্য পাওয়া যায়নি।</h2>
        <button
          onClick={() => navigate("/members")}
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
        >
          সদস্য তালিকায় ফিরে যান
        </button>
      </div>
    );
  }

  return (
    <div className="member-details px-5 py-10 max-w-4xl mx-auto">
      {/* ===== Header Section ===== */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
        <img
          src={member.image}
          alt={member.name}
          className="w-36 h-36 rounded-xl object-cover border border-gray-300"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-2">{member.name}</h2>
          <p className="text-gray-600 mb-1">
            যোগদানের তারিখ: <strong>{member.joining_date}</strong>
          </p>
          <p className="text-gray-600">
            মাসিক অনুদান:{" "}
            <strong className="text-green-600">
              ৳{member.monthly_donation}
            </strong>
          </p>
        </div>
      </div>

      {/* ===== Description ===== */}
      <div className="bg-white p-5 rounded-lg shadow mb-10">
        <h3 className="text-xl font-semibold mb-3">বিস্তারিত</h3>
        <p className="text-gray-700 leading-relaxed">{member.description}</p>
      </div>

      {/* ===== Donation Chart ===== */}
      <div className="bg-white p-5 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-5 text-center">অনুদান ইতিহাস</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={member.donation_history}
            margin={{ top: 20, right: 40, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#0b61ff" barSize={30} radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
