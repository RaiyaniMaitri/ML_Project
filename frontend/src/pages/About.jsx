import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart3, Brain, Database, FileText, 
  Settings, ShieldQuestion, ArrowLeft, ArrowRight 
} from 'lucide-react';

export default function About() {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 20px' }}>
      <button onClick={() => navigate('/')} style={{ 
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
        <ArrowLeft size={16} /> Back Home
      </button>

      <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem' }}>About <span style={{ color: 'var(--primary)' }}>Project</span></h1>
      
      <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '3rem' }}>
        CardioGuard AI is an advanced clinical support tool designed to analyze multi-dimensional biometric markers. 
        It leverages modern Ensemble Learning algorithms to detect early-stage cardiovascular risks with 
        machine precision.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <div className="glass-card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
            <Brain size={24} color="var(--primary)" />
            <h3 style={{ fontSize: '1.3rem', fontWeight: '700' }}>Algorithm Core</h3>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Utilizes a <span style={{ color: 'white' }}>Random Forest Classifier</span> with 200 estimators. 
            The system employs a depth-first strategy (max_depth=10) to prevent overfitting while capturing complex nonlinear relationships.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
            <Settings size={24} color="#10b981" />
            <h3 style={{ fontSize: '1.3rem', fontWeight: '700' }}>Feature Engineering</h3>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Beyond raw inputs, we calculate the <span style={{ color: 'white' }}>Body Mass Index (BMI)</span> as a 12th feature. 
            Continuous variables are normalized using Robust Standard Scaling before processing.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '2rem', gridColumn: 'span 2' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
            <Database size={24} color="#f59e0b" />
            <h3 style={{ fontSize: '1.3rem', fontWeight: '700' }}>Dataset & Integrity</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Our model is trained on a standardized clinical dataset of 70,000 patients, including 
              demographic info, medical metrics (Blood Pressure, Cholesterol), and lifestyle factors.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                "Age (Years/Days normalized)", "Gender Classifications", "Cardiovascular Biometrics", "Lifestyle Indicators"
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#fff', fontSize: '0.85rem', fontWeight: '500' }}>
                  <ShieldQuestion size={14} color="#f59e0b" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '4rem 0', borderTop: '1px solid var(--glass-border)' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.5rem' }}>Ready to analyze your risk?</h2>
        <button onClick={() => navigate('/predict')} className="btn-primary" style={{ margin: '0 auto' }}>
          Start Diagnostic Analysis <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
