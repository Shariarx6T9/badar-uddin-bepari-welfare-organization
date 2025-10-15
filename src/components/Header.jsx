import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";

export default function Header() {
  const headerStyle = {
    background: "linear-gradient(135deg, #065f46 0%, #10b981 100%)",
    color: "#f8fafc",
    padding: "12px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    flexWrap: "wrap",
    gap: "10px",
  };

  const logoStyle = {
    height: "50px",
    width: "50px",
    borderRadius: "8px",
    objectFit: "cover",
  };

  const getNavLinkStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? "#6ee7b7" : "#f8fafc",
    fontWeight: isActive ? 700 : 500,
    fontSize: "16px",
    padding: "8px 12px",
    borderRadius: "6px",
    transition: "all 0.3s ease",
    backgroundColor: isActive ? "rgba(255,255,255,0.1)" : "transparent",
  });

  const navContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  };

  const buttonStyle = {
    background: "#059669",
    color: "#f8fafc",
    padding: "8px 16px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "14px",
    transition: "background-color 0.3s ease",
    marginLeft: "10px",
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = "#047857";
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "#059669";
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        {/* Logo & Name */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src={logo}
            alt="বদর উদ্দিন বেপারী কল্যাণ সংস্থা"
            style={logoStyle}
          />
          <div>
            <span style={{ fontWeight: 700, fontSize: "16px", display: "block" }}>
              বদর উদ্দিন বেপারী কল্যাণ সংস্থা
            </span>
            <p style={{ fontSize: "12px", color: "#d1fae5", margin: 0, marginTop: "2px" }}>
              “সেবা ও উন্নয়নই আমাদের মূল লক্ষ্য”
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav style={navContainerStyle}>
          <NavLink to="/" style={getNavLinkStyle}>HOME</NavLink>
          <NavLink to="/members" style={getNavLinkStyle}>ALL MEMBERS</NavLink>
          <NavLink to="/newsfeed" style={getNavLinkStyle}>NEWS FEED</NavLink>
          <NavLink to="/revenue" style={getNavLinkStyle}>REVENUE</NavLink>
        </nav>

        {/* Contact & Admin Login */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <NavLink
            to="/contact"
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/login"
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Admin Login
          </NavLink>
        </div>
      </div>
    </header>
  );
}
