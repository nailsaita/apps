import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '@/pages/HomePage.jsx';
import GaleriaPrensaPage from '@/pages/GaleriaPrensaPage.jsx';
import TalleresPage from '@/pages/TalleresPage.jsx';
import GacetillasPage from '@/pages/GacetillasPage.jsx';
import GaleriaEncuentrosPage from '@/pages/GaleriaEncuentrosPage.jsx';
import KitPrensaPage from '@/pages/KitPrensaPage.jsx';
import PilaresPage from '@/pages/PilaresPage.jsx';
import SemblanzaPage from '@/pages/SemblanzaPage.jsx';
import CancioneroPage from '@/pages/CancioneroPage.jsx';
import PreventaPage from '@/pages/PreventaPage.jsx';
import TransportePage from '@/pages/TransportePage.jsx';


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

// Inyecta la tipografía global del sitio (degular / thunderhouse-pro)
// una sola vez, sin importar por qué ruta entre la persona al sitio.
function GlobalTypography() {
  React.useEffect(() => {
    if (!document.getElementById('encuentro-typography')) {
      const style = document.createElement('style');
      style.id = 'encuentro-typography';
      style.innerHTML = `
        body {
          font-family: 'degular', sans-serif !important;
        }
        h1, h1 * {
          font-family: 'thunderhouse-pro', sans-serif !important;
          font-weight: 500 !important;
        }
        h1, h1 *, h2, h2 * {
          text-transform: uppercase !important;
        }

      `;
      document.head.appendChild(style);
    }
  }, []);
  return null;
}

function App() {
  return (
    <Router>
      <GlobalTypography />
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
        <Route path="/Transporte" element={<TransportePage />} />

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