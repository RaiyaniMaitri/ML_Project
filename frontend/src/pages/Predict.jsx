import React, { useState } from "react";
import { predictDisease } from "../api";
import { useNavigate } from "react-router-dom";
import { Activity, User, Ruler, Weight, ShieldCheck, Heart, Droplet, Wind, Zap, RefreshCw, ClipboardList, ArrowRight } from "lucide-react";

const InputField = ({ label, name, value, onChange, icon: Icon, type = "number", placeholder, options }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
    <label className="input-label" style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: '0.8rem' }}>
      <Icon size={12} style={{ color: "var(--primary)" }} />
      {label}
    </label>
    {options ? (
      <select 
        name={name} 
        value={value} 
        onChange={onChange} 
        className="form-input"
        style={{ padding: '8px 12px', fontSize: '0.85rem' }}
      >
        {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
      </select>
    ) : (
      <input 
        type={type} 
        name={name} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        className="form-input" 
        required 
        style={{ padding: '8px 12px', fontSize: '0.85rem' }}
      />
    )}
  </div>
);

export default function Predict({ setPredictionData }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    age: "50",
    gender: "1",
    height: "175",
    weight: "75",
    ap_hi: "120",
    ap_lo: "80",
    cholesterol: "1",
    gluc: "1",
    smoke: "0",
    alco: "0",
    active: "1"
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await predictDisease(form);
      setPredictionData({
        result: res.prediction,
        probability: res.probability,
        form: form
      });
      navigate('/analytics');
    } catch (err) {
      const backendError = err.response?.data?.error;
      setError(backendError || "Prediction service unavailable. Please check your network or backend logs.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: 'white' }}>Initiate <span style={{ color: 'var(--primary)' }}>Analysis</span></h1>
        <p style={{ color: 'var(--text-muted)' }}>Complete the clinical matrix below for a precision diagnostic evaluation.</p>
      </div>

      <div className="glass-card" style={{ padding: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
          <div style={{ padding: '10px', background: 'rgba(16, 185, 129, 0.12)', borderRadius: '12px' }}>
            <ClipboardList size={22} color="var(--primary)" />
          </div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'white' }}>Patient Data Input</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.75rem', marginBottom: '3rem' }}>
            <InputField label="Age (Years)" name="age" value={form.age} onChange={handleChange} icon={User} placeholder="50" />
            <InputField label="Gender" name="gender" value={form.gender} onChange={handleChange} icon={User} options={[{value: "1", label: "Female"}, {value: "2", label: "Male"}]} />
            <InputField label="Height (cm)" name="height" value={form.height} onChange={handleChange} icon={Ruler} placeholder="175" />
            <InputField label="Weight (kg)" name="weight" value={form.weight} onChange={handleChange} icon={Weight} placeholder="70" />
            <InputField label="Systolic BP" name="ap_hi" value={form.ap_hi} onChange={handleChange} icon={Activity} placeholder="120" />
            <InputField label="Diastolic BP" name="ap_lo" value={form.ap_lo} onChange={handleChange} icon={Activity} placeholder="80" />
            <InputField label="Cholesterol" name="cholesterol" value={form.cholesterol} onChange={handleChange} icon={Heart} options={[{value: "1", label: "Normal"}, {value: "2", label: "Above Normal"}, {value: "3", label: "High"}]} />
            <InputField label="Glucose" name="gluc" value={form.gluc} onChange={handleChange} icon={Droplet} options={[{value: "1", label: "Normal"}, {value: "2", label: "Above Normal"}, {value: "3", label: "High"}]} />
            <InputField label="Smoking Status" name="smoke" value={form.smoke} onChange={handleChange} icon={Wind} options={[{value: "0", label: "Non-Smoker"}, {value: "1", label: "Smoker"}]} />
            <InputField label="Alcohol" name="alco" value={form.alco} onChange={handleChange} icon={Zap} options={[{value: "0", label: "No"}, {value: "1", label: "Yes"}]} />
            <InputField label="Physical Activity" name="active" value={form.active} onChange={handleChange} icon={Activity} options={[{value: "0", label: "Inactive"}, {value: "1", label: "Active"}]} />
          </div>

          <button 
            type="submit" 
            className="btn-primary" 
            disabled={loading}
            style={{ width: "100%", height: "56px", fontSize: "1.1rem" }}
          >
            {loading ? <RefreshCw className="animate-spin" size={20} /> : <ShieldCheck size={20} />}
            {loading ? "Processing Clinical Matrix..." : "Execute AI Prediction"}
          </button>
        </form>

        {error && (
          <div style={{ 
            marginTop: '2rem', 
            padding: '1rem', 
            background: 'rgba(244, 63, 94, 0.1)', 
            border: '1px solid rgba(244, 63, 94, 0.2)', 
            color: '#f43f5e',
            borderRadius: '12px',
            textAlign: 'center',
            fontSize: '0.9rem',
            fontWeight: '600'
          }}>
            {error}
          </div>
        )}
      </div>

      <style>{`
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
