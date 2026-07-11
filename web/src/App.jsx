import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '@/pages/HomePage.jsx';
import GaleriaPrensaPage from '@/pages/GaleriaPrensaPage.jsx';
import TalleresPage from '@/pages/TalleresPage.jsx';
import GacetillasPage from '@/pages/GacetillasPage.jsx';
import GaleriaEncuentrosPage from '@/pages/GaleriaEncuentrosPage.jsx';
import KitPrensaPage from '@/pages/KitPrensaPage.jsx';
import PilaresPage from '@/pages/PilaresPage.jsx';
import SemblanzaPage from '@/pages/Semblanza.jsx';
import CancioneroPage from '@/pages/CancioneroPage.jsx';
import PreventaPage from '@/pages/PreventaPage.jsx';

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
        <Route path="/Talleres" element={<TalleresPage />} />
        <Route path="/Gacetillas" element={<GacetillasPage />} />
        <Route path="/GaleriaEncuentros" element={<GaleriaEncuentrosPage />} />
        <Route path="/KitPrensa" element={<KitPrensaPage />} />
        <Route path="/Pilares" element={<PilaresPage />} />
        <Route path="/Semblanza" element={<SemblanzaPage />} />
        <Route path="/Preventa" element={<PreventaPage />} />
        <Route path="/Cancionero" element={<CancioneroPage />} />

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