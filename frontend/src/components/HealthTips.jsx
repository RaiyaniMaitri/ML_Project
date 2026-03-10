import React from 'react';
import { 
  Lightbulb, Footprints, Salad, HeartPulse, 
  Stethoscope, CigaretteOff, GlassWater, ArrowRight 
} from 'lucide-react';

export default function HealthTips({ result }) {
  if (result === null) return null;

  const isHighRisk = result === 1;

  const highRiskTips = [
    { icon: Stethoscope, text: "Consult a cardiologist for a comprehensive stress test and cardiac evaluation immediately.", color: "#ef4444" },
    { icon: Salad, text: "Adopt a DASH diet: Focus on low-sodium, high-potassium foods to manage blood pressure effectively.", color: "#f59e0b" },
    { icon: HeartPulse, text: "Monitor your Blood Pressure twice daily and maintain a log for your clinical practitioner.", color: "#6366f1" },
    { icon: CigaretteOff, text: "Eliminate smoking and alcohol consumption as they significantly escalate artery stiffening.", color: "#ef4444" }
  ];

  const lowRiskTips = [
    { icon: Footprints, text: "Aim for at least 150 minutes of moderate aerobic activity per week to maintain heart elasticity.", color: "#10b981" },
    { icon: Salad, text: "Continue a fiber-rich diet with Omega-3 fatty acids (nuts, seeds, fish) for optimal lipid profiles.", color: "#10b981" },
    { icon: GlassWater, text: "Maintain optimal hydration and limit processed sugars to prevent future glucose spikes.", color: "#6366f1" },
    { icon: HeartPulse, text: "Schedule annual preventative screenings to track changes in cholesterol and BP levels.", color: "#6366f1" }
  ];

  const tips = isHighRisk ? highRiskTips : lowRiskTips;

  return (
    <div className="glass-card" style={{ padding: '2rem', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ padding: '10px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px' }}>
          <Lightbulb size={22} color={isHighRisk ? "#f59e0b" : "#10b981"} />
        </div>
        <h3 style={{ fontSize: '1.4rem', fontWeight: '700' }}>
          Clinical <span style={{ color: isHighRisk ? "#ef4444" : "#10b981" }}>Recommendations</span>
        </h3>
      </div>

      <div style={{ display: 'grid', gap: '1.25rem' }}>
        {tips.map((tip, index) => (
          <div key={index} style={{ 
            display: 'flex', 
            gap: '1.25rem', 
            padding: '1.25rem', 
            background: 'rgba(255, 255, 255, 0.03)', 
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            transition: 'transform 0.2s',
            cursor: 'default'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
          >
            <div style={{ 
              minWidth: '40px', 
              height: '40px', 
              borderRadius: '10px', 
              background: `${tip.color}15`, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <tip.icon size={20} color={tip.color} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.8)', fontWeight: '500' }}>
                {tip.text}
              </p>
            </div>
            <div style={{ opacity: 0.2 }}>
              <ArrowRight size={14} />
            </div>
          </div>
        ))}
      </div>

      <div style={{ 
        marginTop: '2rem', 
        padding: '1rem', 
        borderRadius: '12px', 
        background: isHighRisk ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.1)',
        fontSize: '0.8rem',
        color: isHighRisk ? '#fca5a5' : '#6ee7b7',
        textAlign: 'center',
        border: `1px dashed ${isHighRisk ? '#ef444450' : '#10b98150'}`
      }}>
        {isHighRisk 
          ? "⚠️ High priority guidelines based on current clinical indicators."
          : "✨ Maintenance protocols to sustain current cardiovascular health."}
      </div>
    </div>
  );
}
