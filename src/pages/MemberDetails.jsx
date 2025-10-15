import React from "react";
import { useParams } from "react-router-dom";
import membersData from "../data/members.json";
import PageNotFound from "./PageNotFound";

const MemberDetails = () => {
  const { id } = useParams();
  const member = membersData.find((m) => m.id === parseInt(id));

  if (!member) {
    return <PageNotFound />;
  }

  return (
    <div className="container mx-auto px-4 py-8 flex justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={member.photo}
            alt={member.name}
            className="w-48 h-48 rounded-full object-cover mb-6 md:mb-0 md:mr-8"
          />
          <div>
            <h1 className="text-4xl font-bold text-gray-800">{member.name}</h1>
            <p className="text-xl text-gray-600">{member.role}</p>
            <p className="text-lg text-gray-600 mt-4">
              <strong>Donation:</strong> ${member.donation}
            </p>
            <p className="text-lg text-gray-600">
              <strong>Location:</strong> {member.location}
            </p>
            <div className="mt-6">
              <a
                href={`mailto:${member.contact.email}`}
                className="bg-gradient-to-r from-emerald-500 to-green-700 text-white font-bold py-2 px-4 rounded-lg mr-4 transition-all duration-300 hover:opacity-90"
              >
                Email
              </a>
              <a
                href={`tel:${member.contact.phone}`}
                className="bg-gradient-to-r from-emerald-500 to-green-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:opacity-90"
              >
                Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;