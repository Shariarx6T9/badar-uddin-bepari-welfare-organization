import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // ✅ Correct icon import
import members from "../data/members.json"; // ✅ Import JSON file

export default function MemberCard() {
  return (
    <div className="bg-[#f9fafb] min-h-screen py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        আমাদের সম্মানিত সদস্যবৃন্দ
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 mx-auto rounded-full mb-4 border-4 border-blue-100 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {member.name}
            </h3>
            <p className="text-gray-500 mb-3 flex items-center justify-center gap-1">
              <FaMapMarkerAlt className="text-blue-500" />
              যোগদানঃ {member.joining_date}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              {member.description}
            </p>
            <p className="font-medium text-blue-600">
              মাসিক অনুদান: ৳{member.monthly_donation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
