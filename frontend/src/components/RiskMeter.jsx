import React from 'react';
import { Gauge } from 'lucide-react';

export default function RiskMeter({ probability, result }) {
  if (probability === undefined) return null;

  const getColor = (val) => {
    if (val < 30) return '#10b981'; // Green
    if (val < 70) return '#f59e0b'; // Amber
    return '#ef4444'; // Red
  };

  const getStatus = (val) => {
    if (val < 30) return "Healthy Range";
    if (val < 70) return "Moderate Concern";
    return "Critical Alert";
  };

  const color = getColor(probability);

  return (
    <div className="glass-card" style={{ padding: '2rem', flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ padding: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
          <Gauge size={20} color={color} />
        </div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>AI Risk Probability</h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
        <div style={{
          width: '200px',
          height: '100px',
          borderTopLeftRadius: '100px',
          borderTopRightRadius: '100px',
          background: 'rgba(255,255,255,0.05)',
          overflow: 'hidden',
          position: 'relative',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: `translateX(-50%) rotate(${ (probability / 100) * 180 - 90 }deg)`,
            transformOrigin: 'bottom center',
            width: '4px',
            height: '80px',
            background: color,
            borderRadius: '10px',
            transition: 'transform 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            zIndex: 2
          }}>
            <div style={{
               position: 'absolute',
               top: -5,
               left: -3,
               width: '10px',
               height: '10px',
               background: color,
               borderRadius: '50%',
               boxShadow: `0 0 15px ${color}`
            }}></div>
          </div>
          
          <div style={{
            position: 'absolute',
            bottom: -5,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '16px',
            height: '16px',
            background: 'white',
            borderRadius: '50%',
            zIndex: 3
          }}></div>
        </div>

        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: '800', color: color }}>
            {probability}%
          </div>
          <div style={{ 
            fontSize: '0.9rem', 
            fontWeight: '600', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em',
            color: 'rgba(255,255,255,0.4)',
            marginTop: '0.25rem'
          }}>
            {getStatus(probability)}
          </div>
        </div>
      </div>
    </div>
  );
}
