import React, { useState, useEffect } from "react";
import MemberCard from "../components/MemberCard";
import SearchBar from "../components/SearchBar";
import LoadingSpinner from "../components/LoadingSpinner";
import NotFound from "./NotFound.jsx";
import membersData from "../data/members.json";

const AllMembers = () => {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setMembers(membersData);
      setFilteredMembers(membersData);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let result = members.filter((member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOption === "donation-high-low") {
      result.sort((a, b) => b.donation - a.donation);
    } else if (sortOption === "donation-low-high") {
      result.sort((a, b) => a.donation - b.donation);
    } else if (sortOption === "name-a-z") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredMembers(result);
  }, [searchTerm, sortOption, members]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <select
          onChange={(e) => setSortOption(e.target.value)}
          className="mt-4 md:mt-0 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="">Sort By</option>
          <option value="donation-high-low">Donation: High to Low</option>
          <option value="donation-low-high">Donation: Low to High</option>
          <option value="name-a-z">Name: A to Z</option>
        </select>
      </div>

      {filteredMembers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default AllMembers;