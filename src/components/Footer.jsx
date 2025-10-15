import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #065f46 0%, #10b981 100%)",
        color: "#f0fdf4",
        padding: "32px 20px", // reduced padding
        fontSize: "14px",
        borderTop: "3px solid #34d399"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "24px", // reduced gap
        }}
      >
        {/* About Section */}
        <div>
          <h3 style={{ fontWeight: 700, color: "#f0fdf4", marginBottom: '12px' }}>
            বদর উদ্দিন বেপারী কল্যাণ সংস্থা
          </h3>
          <p style={{ fontStyle: 'italic', color: '#d1fae5', marginBottom: '10px' }}>
            "সেবা ও উন্নয়ণ'ই আমাদের মূল লক্ষ্য"
          </p>
          <p style={{ lineHeight: 1.6, marginBottom: '10px' }}>
            এটি একটি অলাভজনক প্রতিষ্ঠান যা সমাজের দুঃস্থ ও অসহায় মানুষের সেবায় নিয়োজিত।
          </p>
          <NavLink
            to="/contact"
            style={{
              display: "inline-block",
              background: "#059669",
              color: "#f8fafc",
              padding: "6px 14px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: 500,
              marginTop: '8px'
            }}
          >
            Contact Us
          </NavLink>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{ fontWeight: 700, color: "#f0fdf4", marginBottom: '12px' }}>গুরুত্বপূর্ণ লিংক</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '6px' }}><a href="/" style={{ color: "#d1fae5", textDecoration: 'none' }}>হোম</a></li>
            <li style={{ marginBottom: '6px' }}><a href="/members" style={{ color: "#d1fae5", textDecoration: 'none' }}>আমাদের সদস্য</a></li>
            <li style={{ marginBottom: '6px' }}><a href="/revenue" style={{ color: "#d1fae5", textDecoration: 'none' }}>তহবিল</a></li>
            <li style={{ marginBottom: '6px' }}><a href="/newsfeed" style={{ color: "#d1fae5", textDecoration: 'none' }}>সংস্থার খবর</a></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div>
          <h3 style={{ fontWeight: 700, color: "#f0fdf4", marginBottom: '12px' }}>যোগাযোগ</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <FaMapMarkerAlt />
              <span>রেলগেইট, ফাজিলপুর বাজার সংলগ্ন, ফেনী, বাংলাদেশ</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <FaPhoneAlt />
              <span>+880 1840 242 448</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <FaEnvelope />
              <span>info@bubwo.org</span>
            </li>
          </ul>
          <div style={{ display: "flex", gap: 14, marginTop: 16 }}>
            <a href="#" style={{ color: "#f0fdf4" }}><FaFacebook size={20} /></a>
            <a href="#" style={{ color: "#f0fdf4" }}><FaTwitter size={20} /></a>
            <a href="#" style={{ color: "#f0fdf4" }}><FaYoutube size={20} /></a>
          </div>
        </div>
      </div>

      <div style={{
          textAlign: 'center',
          marginTop: '32px',
          paddingTop: '12px',
          borderTop: '1px solid #34d399'
      }}>
          <p>© {new Date().getFullYear()} বদর উদ্দিন বেপারী কল্যাণ সংস্থা। সর্বস্বত্ব সংরক্ষিত।</p>
      </div>
    </footer>
  );
}
