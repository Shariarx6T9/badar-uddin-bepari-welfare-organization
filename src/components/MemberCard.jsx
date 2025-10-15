import React from "react";
import { Link } from "react-router-dom";

const MemberCard = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={member.photo}
        alt={member.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {member.name}
        </h3>
        <p className="text-gray-600 mb-4">Donation: ${member.donation}</p>
        <Link to={`/member/${member.id}`}>
          <button className="w-full bg-gradient-to-r from-emerald-500 to-green-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:opacity-90">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MemberCard;