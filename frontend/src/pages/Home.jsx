import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, ShieldCheck, Cpu, Database, HeartHandshake, ArrowRight } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero" style={{ 
        textAlign: 'center', 
        padding: '100px 20px', 
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          background: 'rgba(16, 185, 129, 0.1)',
          borderRadius: '99px',
          color: 'var(--primary)',
          fontSize: '0.9rem',
          fontWeight: '700',
          marginBottom: '2rem',
          border: '1px solid rgba(16, 185, 129, 0.2)'
        }}>
          <Activity size={16} /> Clinical AI Technology
        </div>
        
        <h1 style={{ 
          fontSize: '4.5rem', 
          fontWeight: '900', 
          lineHeight: '1.1', 
          marginBottom: '1.5rem',
          background: 'linear-gradient(135deg, #fff 50%, rgba(255,255,255,0.4))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.04em'
        }}>
          Revolutionizing Heart <br/> <span style={{ color: 'var(--primary)' }}>Risk Assessment.</span>
        </h1>
        
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'var(--text-muted)', 
          maxWidth: '700px', 
          margin: '0 auto 3rem',
          lineHeight: '1.6'
        }}>
          Our Clinical AI lab uses sophisticated machine learning models to detect subtle cardiovascular indicators, providing predictive precision that supports early intervention.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <button onClick={() => navigate('/predict')} className="btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
            Start Diagnostic <ArrowRight size={20} />
          </button>
          <button onClick={() => navigate('/about')} style={{ 
            background: 'rgba(255,255,255,0.05)', 
            border: '1px solid var(--glass-border)',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '12px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
          onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.05)'}
          >
            How it Works
          </button>
        </div>
      </section>

      {/* Feature Grid */}
      <section style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '2rem', 
        maxWidth: '1200px', 
        margin: '100px auto', 
        padding: '0 20px' 
      }}>
        {[
          { icon: Cpu, title: "Neural Learning", desc: "Trained on thousands of clinical records using Random Forest ensembles." },
          { icon: Database, title: "Data Driven", desc: "12 detailed biometric parameters optimized for predictive accuracy." },
          { icon: ShieldCheck, title: "Privacy First", desc: "Local-only analysis. Your biometric data is not stored permanently." }
        ].map((feat, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              background: 'rgba(16, 185, 129, 0.08)', 
              borderRadius: '16px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              border: '1px solid rgba(16, 185, 129, 0.1)'
            }}>
              <feat.icon size={30} color="var(--primary)" />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-main)' }}>{feat.title}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.5' }}>{feat.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
