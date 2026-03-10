import React from "react";
import { AlertCircle, CheckCircle2, ShieldAlert } from "lucide-react";

export default function ResultCard({ result }) {
  if (result === null) return null;

  const isHighRisk = result === 1;

  return (
    <div className={`result-card glass-card ${isHighRisk ? "prediction-danger" : "prediction-success"}`} style={{
      padding: "2.5rem 2rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "1.25rem",
      animation: "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
      border: `2px solid ${isHighRisk ? 'rgba(244, 63, 94, 0.2)' : 'rgba(16, 185, 129, 0.2)'}`
    }}>
      <div style={{
        padding: "1.25rem",
        borderRadius: "24px",
        backgroundColor: isHighRisk ? "rgba(244, 63, 94, 0.1)" : "rgba(16, 185, 129, 0.1)",
        display: "flex",
        boxShadow: `0 20px 40px -10px ${isHighRisk ? "rgba(244, 63, 94, 0.3)" : "rgba(16, 185, 129, 0.3)"}`
      }}>
        {isHighRisk ? (
          <ShieldAlert size={56} color="var(--danger)" strokeWidth={2} />
        ) : (
          <CheckCircle2 size={56} color="var(--success)" strokeWidth={2} />
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <h3 style={{
          fontSize: "2rem",
          fontWeight: "800",
          letterSpacing: "-0.03em",
          color: isHighRisk ? "var(--danger)" : "var(--success)"
        }}>
          {isHighRisk ? "High Risk Potential" : "Low Risk Detected"}
        </h3>
        <p style={{
          fontSize: "1rem",
          color: "var(--text-muted)",
          maxWidth: "400px",
          lineHeight: "1.6",
          fontWeight: "500"
        }}>
          {isHighRisk 
            ? "Our neural analysis indicates significant cardiovascular indicators. We strongly recommend immediate consultation with a heart specialist."
            : "No significant clinical indicators for heart disease were detected during this biometric sweep. Maintain current health protocols."
          }
        </p>
      </div>

      <div style={{
        marginTop: "1rem",
        padding: "0.8rem 1.75rem",
        borderRadius: "14px",
        background: "rgba(255, 255, 255, 0.03)",
        fontSize: "0.75rem",
        fontWeight: "700",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        border: "1px solid var(--glass-border)",
        color: "rgba(255,255,255,0.4)",
        textTransform: "uppercase",
        letterSpacing: "0.1em"
      }}>
        <AlertCircle size={14} /> AI Diagnostic Protocol v3.0
      </div>
      
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
