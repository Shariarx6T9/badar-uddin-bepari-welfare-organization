import React from "react";
import { Link } from "react-router-dom";

export default function MemberCard({ member }) {
  return (
    <div className="group bg-white rounded-2xl shadow-md border border-gray-100 p-5 flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <img
        src={member.photo || "/assets/member_logo.jpeg"}
        alt={member.name}
        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-green-100 transition-transform duration-300 group-hover:scale-105"
      />

      <h2 className="text-lg font-semibold text-gray-800">{member.name}</h2>
      <p className="text-sm text-gray-500">{member.role || "সদস্য"}</p>

      <p className="mt-2 text-sm text-gray-600">
        মাসিক অনুদান:{" "}
        <span className="font-bold text-green-600">
          ৳{member.monthly_donation?.toLocaleString() || 0}
        </span>
      </p>

      {member.location && (
        <p className="text-xs text-gray-400 mt-1">{member.location}</p>
      )}

      <Link
        to={`/member/${member.id}`}
        className="mt-4 inline-block text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-green-700 px-6 py-2.5 rounded-full shadow-md transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-xl group-hover:from-green-600 group-hover:to-green-800"
      >
        বিস্তারিত দেখুন
      </Link>

      {member.contact && (
        <a
          href={`tel:${member.contact}`}
          className="mt-2 text-sm text-green-700 hover:text-green-900 transition-colors duration-300"
        >
          যোগাযোগ করুন
        </a>
      )}
    </div>
  );
}
