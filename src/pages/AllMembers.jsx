import React, { useState, useEffect } from "react"; 
import membersData from "../data/members.json";
import MemberCard from "../components/MemberCard";
import SearchBar from "../components/SearchBar";
import LoadingSpinner from "../components/LoadingSpinner";
import NotFound from "./NotFound";

export default function AllMembers() {
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("donation-desc");
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const debounce = setTimeout(() => {
      let members = [...membersData];

      if (query) {
        members = members.filter((member) =>
          member.name.toLowerCase().includes(query.toLowerCase())
        );
      }

      if (sortOrder === "donation-desc") members.sort((a,b)=>b.monthly_donation-a.monthly_donation);
      if (sortOrder === "donation-asc") members.sort((a,b)=>a.monthly_donation-b.monthly_donation);
      if (sortOrder === "name-asc") members.sort((a,b)=>a.name.localeCompare(b.name));

      setFilteredMembers(members);
      setLoading(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [query, sortOrder]);

  if (loading) return <div className="flex justify-center py-20"><LoadingSpinner /></div>;

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">আমাদের সকল সম্মানিত সদস্য</h1>
        <p className="text-gray-500 mt-2">আমাদের সংস্থার সকল সদস্য যারা মানবতার সেবায় অবদান রাখছেন।</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h3 className="font-semibold">{filteredMembers.length} জন সদস্য পাওয়া গেছে</h3>
        <div className="flex gap-4 items-center">
          <SearchBar value={query} onChange={setQuery} placeholder="সদস্য খুঁজুন..." />
          <select value={sortOrder} onChange={(e)=>setSortOrder(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg">
            <option value="donation-desc">অনুদান: বেশি-কম</option>
            <option value="donation-asc">অনুদান: কম-বেশি</option>
            <option value="name-asc">নাম অনুযায়ী</option>
          </select>
        </div>
      </div>

      {filteredMembers.length>0 ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredMembers.map(member=><MemberCard key={member.id} member={member} />)}
        </div>
      ) : (<NotFound />)}
    </div>
  );
}
