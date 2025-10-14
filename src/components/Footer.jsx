import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #065f46 0%, #10b981 100%)", // green gradient
        color: "#f0fdf4",
        padding: "48px 20px",
        marginTop: "60px",
        fontSize: "14px",
        borderTop: "4px solid #34d399"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "32px",
        }}
      >
        {/* About Section */}
        <div>
          <h3 style={{ fontWeight: 700, color: "#f0fdf4", marginBottom: '16px' }}>বদর উদ্দিন বেপারী কল্যাণ সংস্থা</h3>
          <p style={{ fontStyle: 'italic', color: '#d1fae5', marginBottom: '12px' }}>
            "সেবা ও উন্নয়ণ'ই আমাদের মূল লক্ষ্য"
          </p>
          <p style={{ lineHeight: 1.6 }}>
            এটি একটি অলাভজনক প্রতিষ্ঠান যা সমাজের দুঃস্থ ও অসহায় মানুষের সেবায় নিয়োজিত।
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{ fontWeight: 700, color: "#f0fdf4", marginBottom: '16px' }}>গুরুত্বপূর্ণ লিংক</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '8px' }}><a href="/" style={{ color: "#d1fae5", textDecoration: 'none' }}>হোম</a></li>
            <li style={{ marginBottom: '8px' }}><a href="/members" style={{ color: "#d1fae5", textDecoration: 'none' }}>আমাদের সদস্য</a></li>
            <li style={{ marginBottom: '8px' }}><a href="/revenue" style={{ color: "#d1fae5", textDecoration: 'none' }}>তহবিল</a></li>
            <li style={{ marginBottom: '8px' }}><a href="/newsfeed" style={{ color: "#d1fae5", textDecoration: 'none' }}>সংস্থার খবর</a></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div>
          <h3 style={{ fontWeight: 700, color: "#f0fdf4", marginBottom: '16px' }}>যোগাযোগ</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <FaMapMarkerAlt />
              <span>রেলগেইট, ফাজিলপুর বাজার সংলগ্ন, ফেনী, বাংলাদেশ</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <FaPhoneAlt />
              <span>+880 1840 242 448</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <FaEnvelope />
              <span>info@bubwo.org</span>
            </li>
          </ul>
          <div style={{ display: "flex", gap: 16, marginTop: 20 }}>
            <a href="#" style={{ color: "#f0fdf4" }}><FaFacebook size={20} /></a>
            <a href="#" style={{ color: "#f0fdf4" }}><FaTwitter size={20} /></a>
            <a href="#" style={{ color: "#f0fdf4" }}><FaYoutube size={20} /></a>
          </div>
        </div>
      </div>
      <div style={{
          textAlign: 'center',
          marginTop: '40px',
          paddingTop: '20px',
          borderTop: '1px solid #34d399'
      }}>
          <p>© {new Date().getFullYear()} বদর উদ্দিন বেপারী কল্যাণ সংস্থা। সর্বস্বত্ব সংরক্ষিত।</p>
      </div>
    </footer>
  );
}
