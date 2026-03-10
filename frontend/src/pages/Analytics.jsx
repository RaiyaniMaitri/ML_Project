import React from 'react';
import { useNavigate } from 'react-router-dom';
import RiskMeter from '../components/RiskMeter';
import ResultCard from '../components/ResultCard';
import HealthCharts from '../components/HealthCharts';
import HealthTips from '../components/HealthTips';
import { BarChart3, TrendingUp, User, Activity, ArrowRight, HeartPulse, Sparkles } from 'lucide-react';

export default function Analytics({ predictionData }) {
  const navigate = useNavigate();

  if (!predictionData || !predictionData.form) {
    return (
      <div style={{ maxWidth: '800px', margin: '150px auto', textAlign: 'center' }}>
        <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
          <TrendingUp size={64} style={{ opacity: 0.1, marginBottom: '2rem' }} color="var(--primary)" />
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>No Analytics <br/> <span style={{ color: 'var(--primary)' }}>Detected</span></h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
            We need your clinical metrics to generate a personalized analytics report. 
            Once you perform a prediction, the dashboard will populate with your results.
          </p>
          <button onClick={() => navigate('/predict')} className="btn-primary" style={{ margin: '0 auto' }}>
            Go to Prediction <ArrowRight size={20} />
          </button>
        </div>
      </div>
    );
  }

  const { result, probability, form } = predictionData;

  return (
    <div style={{ maxWidth: '1200px', margin: '3rem auto', padding: '0 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '0.4rem' }}>
            Advanced <span style={{ color: 'var(--primary)' }}>Analytics</span>
          </h1>
          <p style={{ color: 'var(--text-muted)' }}>Precision Diagnostic Report for Patient 00231</p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', padding: '12px 24px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
          <User size={20} color="var(--primary)" />
          <span style={{ fontWeight: '600', fontSize: '1.1rem' }}>{form.age}Y <span style={{ color: 'rgba(255,255,255,0.4)', fontWeight: '400' }}>Active Patient</span></span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(350px, 450px) 1fr', gap: '2.5rem', marginBottom: '3rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <RiskMeter probability={probability} result={result} />
          <ResultCard result={result} />
          
          <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Metrics Snapshot</h3>
            {[
              { label: 'Blood Pressure', value: `${form.ap_hi}/${form.ap_lo}`, icon: Activity, color: '#ef4444' },
              { label: 'Weight/Height', value: `${form.weight}kg / ${form.height}cm`, icon: BarChart3, color: '#6366f1' },
              { label: 'Biometrics', value: 'Complete', icon: HeartPulse, color: '#10b981' }
            ].map((st, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.6)', fontWeight: '500' }}>
                  <st.icon size={16} color={st.color} /> {st.label}
                </div>
                <div style={{ fontWeight: '700', fontSize: '1.1rem', letterSpacing: '0.05em' }}>{st.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '6px', height: '24px', background: 'var(--primary)', borderRadius: '3px' }}></div>
            Visual Biometric Analysis
          </h2>
          <HealthCharts data={form} />
        </div>
      </div>

      <div style={{ marginTop: '4rem' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Sparkles size={24} color="#f59e0b" />
          Clinical Recommendations
        </h2>
        <HealthTips result={result} />
      </div>
    </div>
  );
}
