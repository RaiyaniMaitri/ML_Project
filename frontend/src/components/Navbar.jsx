import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HeartPulse, LayoutDashboard, ClipboardList, Info, Home as HomeIcon, Lightbulb } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: HomeIcon },
    { name: "Predict", path: "/predict", icon: ClipboardList },
    { name: "Analytics", path: "/analytics", icon: LayoutDashboard },
    { name: "About", path: "/about", icon: Info },
  ];

  return (
    <nav className="navbar-container" style={{
      padding: "1.25rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "1400px",
      margin: "0 auto",
      width: "100%",
      position: "relative",
      zIndex: 100
    }}>
      <div className="logo" style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        fontSize: "1.5rem",
        fontWeight: "800",
        color: "white",
        letterSpacing: "-0.025em"
      }}>
        <div style={{
          padding: "8px",
          borderRadius: "12px",
          background: "linear-gradient(135deg, #10b981, #6366f1)",
          display: "flex",
          boxShadow: "0 8px 15px -3px rgba(16, 185, 129, 0.4)"
        }}>
          <HeartPulse size={24} color="white" />
        </div>
        <span style={{ cursor: "default" }}>CardioGuard <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: "500" }}>AI</span></span>
      </div>

      <div className="nav-links" style={{ display: "flex", gap: "0.5rem", background: "rgba(255,255,255,0.03)", padding: "4px", borderRadius: "14px", border: "1px solid var(--glass-border)" }}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 18px",
              borderRadius: "10px",
              fontSize: "0.9rem",
              fontWeight: "600",
              textDecoration: "none",
              color: location.pathname === link.path ? "white" : "rgba(255,255,255,0.5)",
              background: location.pathname === link.path ? "var(--primary)" : "transparent",
              transition: "0.2s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow: location.pathname === link.path ? "0 4px 12px rgba(16, 185, 129, 0.3)" : "none"
            }}
          >
            <link.icon size={16} />
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
