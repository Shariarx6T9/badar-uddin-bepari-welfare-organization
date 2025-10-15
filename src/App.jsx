import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast"; 

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AllMembers from "./pages/AllMembers";
import MemberDetails from "./pages/MemberDetails";
import Revenue from "./pages/Revenue";
import NewsFeed from "./pages/NewsFeed";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-[#f9fafb] text-gray-800">
        <Header />

        {/* 🔹 Only one Toaster needed */}
        <Toaster position="top-right" reverseOrder={false} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<AllMembers />} />
            <Route path="/member/:id" element={<MemberDetails />} />
            <Route path="/revenue" element={<Revenue />} />
            <Route path="/newsfeed" element={<NewsFeed />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
