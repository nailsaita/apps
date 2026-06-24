import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '@/pages/HomePage.jsx';
import GaleriaPrensaPage from '@/pages/GaleriaPrensaPage.jsx';

function ScrollToHash() {
  const location = useLocation();
  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      const t = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
      return () => clearTimeout(t);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Prensa" element={<GaleriaPrensaPage />} />
        
        {/* Catch-all route for 404s */}
        <Route path="*" element={
          <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-4">
            <h1 className="text-primary mb-4">404</h1>
            <p className="text-xl text-muted-foreground mb-8">Página no encontrada</p>
            <a href="/" className="text-secondary hover:underline font-medium">
              Volver al inicio
            </a>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;