import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Predict from "./pages/Predict";
import Analytics from "./pages/Analytics";
import About from "./pages/About";

function App() {
  const [predictionData, setPredictionData] = useState({
    result: null,
    probability: null,
    form: null
  });

  return (
    <Router>
      <div className="app">
        <div className="bg-animations">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>
        
        <Navbar />
        
        <main style={{ minHeight: 'calc(100vh - 200px)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/predict" element={<Predict setPredictionData={setPredictionData} />} />
            <Route path="/analytics" element={<Analytics predictionData={predictionData} />} />
            <Route path="/about" element={<About />} />
            
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <footer style={{ 
          textAlign: "center", 
          padding: "6rem 0 4rem", 
          color: "var(--text-muted)",
          fontSize: "0.85rem",
          opacity: 0.6,
          borderTop: '1px solid var(--glass-border)',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <p>&copy; 2024 CardioGuard AI Lab. Using experimental Clinical Machine Learning.</p>
          <p style={{ marginTop: "0.5rem" }}>For research purposes only. Not a medical substitute.</p>
        </footer>

        <style>{`
          .app {
            min-height: 100vh;
            width: 100vw;
            overflow-x: hidden;
            background-color: #0c0e14;
          }
          .animate-spin {
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;
