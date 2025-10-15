import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import ContactForm from "./pages/ContactForm";
import AllMembers from "./pages/AllMembers";
import MemberDetails from "./pages/MemberDetails";
import Revenue from "./pages/Revenue";
import NewsFeed from "./pages/NewsFeed";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <Router>
      <Header />
      <Toaster position="top-right" reverseOrder={false} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/members" element={<AllMembers />} />
        <Route path="/member/:id" element={<MemberDetails />} />
        <Route path="/revenue" element={<Revenue />} />
        <Route path="/news" element={<NewsFeed />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}
