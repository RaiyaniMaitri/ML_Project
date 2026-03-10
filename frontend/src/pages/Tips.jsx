import React from 'react';
import { useNavigate } from 'react-router-dom';
import HealthTips from '../components/HealthTips';
import { Lightbulb, Footprints, Salad, HeartPulse, Stethoscope, CigaretteOff, GlassWater, ArrowLeft, ArrowRight } from 'lucide-react';

export default function Tips({ predictionData }) {
  const navigate = useNavigate();

  if (!predictionData || predictionData.result === null) {
    return (
      <div style={{ maxWidth: '800px', margin: '150px auto', textAlign: 'center' }}>
        <div style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
          <Lightbulb size={64} style={{ opacity: 0.1, marginBottom: '2rem' }} color="var(--primary)" />
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>No Recommendations <br/> <span style={{ color: 'var(--primary)' }}>Yet</span></h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
            We need to analyze your health profile first to generate a customized set of clinical tips for heart risk maintenance.
          </p>
          <button onClick={() => navigate('/predict')} className="btn-primary" style={{ margin: '0 auto' }}>
            Get Your Risk Profile <ArrowRight size={20} />
          </button>
        </div>
      </div>
    );
  }

  const { result } = predictionData;

  return (
    <div style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 20px' }}>
      <button onClick={() => navigate('/analytics')} style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px', 
        background: 'transparent', 
        border: 'none', 
        color: 'var(--text-muted)', 
        cursor: 'pointer',
        fontWeight: '600',
        marginBottom: '2rem'
      }}>
        <ArrowLeft size={16} /> Back to Analytics
      </button>

      <div style={{ marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>Clinical <span style={{ color: result === 1 ? '#ef4444' : '#10b981' }}>Strategies</span></h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
          Personalized lifestyle modifications and medical protocols designed for a <span style={{ color: 'white', fontWeight: '700' }}>{result === 1 ? "High Risk Potential" : "Low Risk Active"}</span> profile.
        </p>
      </div>

      <div className="tips-dashboard" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        <div style={{ gridColumn: 'span 2' }}>
           <HealthTips result={result} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
           <div className="glass-card" style={{ padding: '2rem', border: '1px dashed var(--glass-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                <Stethoscope size={20} color="white" />
                <h4 style={{ fontWeight: '700' }}>Quick Note</h4>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                These tips are generated based on clinical machine learning patterns. 
                They complement but do not replace specialized medical advice from your physician.
              </p>
           </div>

           <div className="glass-card" style={{ padding: '2rem', background: 'rgba(99, 102, 241, 0.05)', borderColor: 'rgba(99, 102, 241, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                <Activity size={20} color="var(--primary)" />
                <h4 style={{ fontWeight: '700' }}>Next Step</h4>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Download your full clinical report in PDF format for your next hospital visit.
              </p>
              <button style={{ 
                width: '100%', 
                padding: '12px', 
                background: 'var(--primary)', 
                border: 'none', 
                borderRadius: '8px', 
                color: 'white', 
                fontWeight: '700', 
                cursor: 'pointer',
                fontSize: '0.8rem'
              }}>
                GENERATE REPORT (PDF)
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
