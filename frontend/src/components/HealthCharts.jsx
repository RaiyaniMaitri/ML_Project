import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Cell, ReferenceLine, AreaChart, Area 
} from 'recharts';
import { Activity, Ruler, Weight } from 'lucide-react';

export default function HealthCharts({ data }) {
  if (!data || Object.keys(data).length === 0) return null;

  const bpData = [
    { name: 'Systolic', value: parseFloat(data.ap_hi) || 120, normal: 120 },
    { name: 'Diastolic', value: parseFloat(data.ap_lo) || 80, normal: 80 },
  ];

  const bmi = (data.weight / ((data.height / 100) ** 2)).toFixed(1);
  const bmiData = [
    { name: 'Underweight', range: [0, 18.5] },
    { name: 'Normal', range: [18.5, 25] },
    { name: 'Overweight', range: [25, 30] },
    { name: 'Obese', range: [30, 40] },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', width: '100%' }}>
      
      {/* Blood Pressure Chart */}
      <div className="glass-card" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <Activity size={20} color="#6366f1" />
          <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>Blood Pressure Analysis</h3>
        </div>
        <div style={{ height: '200px', width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={bpData} margin={{ top: 10, right: 30, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="name" stroke="rgba(255,255,255,0.4)" fontSize={12} axisLine={false} tickLine={false} />
              <YAxis stroke="rgba(255,255,255,0.4)" fontSize={12} axisLine={false} tickLine={false} />
              <Tooltip 
                contentStyle={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                itemStyle={{ color: 'white' }}
              />
              <Bar dataKey="value" radius={[10, 10, 10, 10]} barSize={40}>
                {bpData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.value > entry.normal * 1.1 ? '#ef4444' : '#6366f1'} />
                ))}
              </Bar>
              <ReferenceLine y={120} stroke="#ef4444" strokeDasharray="3 3" label={{ value: 'Systolic Limit', position: 'right', fill: '#ef4444', fontSize: 10 }} />
              <ReferenceLine y={80} stroke="#f59e0b" strokeDasharray="3 3" label={{ value: 'Diastolic Limit', position: 'right', fill: '#f59e0b', fontSize: 10 }} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Body Mass Index Chart */}
      <div className="glass-card" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <Weight size={20} color="#10b981" />
          <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>BMI Analysis</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '180px' }}>
          <div style={{ fontSize: '3rem', fontWeight: '800', color: bmi > 25 ? '#f59e0b' : '#10b981' }}>{bmi}</div>
          <div style={{ 
            marginTop: '0.5rem', 
            padding: '4px 12px', 
            borderRadius: '99px', 
            background: 'rgba(255,255,255,0.1)',
            fontSize: '0.8rem',
            fontWeight: '600'
          }}>
            {bmi < 18.5 ? 'UNDERWEIGHT' : bmi < 25 ? 'NORMAL WEIGHT' : bmi < 30 ? 'OVERWEIGHT' : 'OBESE'}
          </div>
          <div style={{ marginTop: '1.5rem', width: '100%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
             <div style={{
               position: 'absolute',
               left: 0,
               top: 0,
               height: '100%',
               width: `${Math.min(100, (bmi/40)*100)}%`,
               background: 'linear-gradient(90deg, #10b981, #f59e0b, #ef4444)',
               borderRadius: '4px',
               transition: 'width 1s ease-in-out'
             }}></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '4px', fontSize: '0.7rem', color: 'rgba(255,255,255,0.2)' }}>
            <span>0</span>
            <span>18.5</span>
            <span>25</span>
            <span>30</span>
            <span>40+</span>
          </div>
        </div>
      </div>

    </div>
  );
}
