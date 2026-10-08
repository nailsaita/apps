import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, MapPin, CalendarDays } from 'lucide-react';
import { Navbar, FooterSection } from '@/pages/HomePage.jsx';
import { Helmet } from 'react-helmet';

const MID = '1ACKW_W7BXV8_jr2GrRomUidKBy07W2E';
const MAPA_EMBED = `https://www.google.com/maps/d/embed?mid=${MID}&ehbc=2E312F`;
const MAPA_COMPLETO = `https://www.google.com/maps/d/viewer?mid=${MID}`;

const FOCO = 'focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#fdb10c]';

// Texto solo para lectores de pantalla en enlaces que abren otra pestaña
const NuevaPestana = () => <span className="sr-only"> (se abre en otra pestaña)</span>;

export default function MapaPage() {
  const clasesEnlace = `inline-flex items-center gap-2 rounded-full border-2 border-[#d5bddb] bg-white/70 px-4 py-2 text-sm font-bold text-[#662c74] hover:bg-[#faf7fb] transition-colors ${FOCO}`;

  return (
    <div className="relative min-h-screen bg-[#FFF1E3] text-[#343230]">
      <Helmet>
        <title>Mapa · 39° Encuentro Plurinacional</title>
      </Helmet>
      <Navbar hasTopSpace={false} />

      <main id="contenido" tabIndex={-1} className="pt-[56px] outline-none">
        {/* Encabezado: nombre de la página y alternativas en texto al mapa */}
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h1 className="text-[#343230] text-2xl sm:text-3xl font-black m-0">Mapa del Encuentro</h1>
          <nav aria-label="Información del mapa en texto">
            <ul className="flex flex-wrap gap-2 m-0 p-0 list-none">
              <li>
                <Link to="/Talleres" className={clasesEnlace}>
                  <MapPin size={16} aria-hidden="true" />
                  Escuelas de cada taller
                </Link>
              </li>
              <li>
                <Link to="/ProgramacionCultural" className={clasesEnlace}>
                  <CalendarDays size={16} aria-hidden="true" />
                  Espacios culturales con dirección
                </Link>
              </li>
              <li>
                <a href={MAPA_COMPLETO} target="_blank" rel="noreferrer" className={clasesEnlace}>
                  <ExternalLink size={16} aria-hidden="true" />
                  Abrir en Google Maps
                  <NuevaPestana />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Permite pasar el mapa con el teclado sin tener que recorrerlo entero */}
        <a
          href="#despues-del-mapa"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[200] focus:left-4 focus:mt-2 focus:bg-[#fdb10c] focus:text-[#2f1435] focus:font-bold focus:px-4 focus:py-2 focus:rounded-full"
        >
          Saltar el mapa
        </a>

        <iframe
          src={MAPA_EMBED}
          title="Mapa interactivo del 39° Encuentro Plurinacional en Córdoba: escuelas de talleres, espacios culturales y servicios"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="block w-full border-0"
          style={{ height: 'calc(100vh - 140px)', minHeight: '420px' }}
        />
        <div id="despues-del-mapa" tabIndex={-1} className="outline-none" />
      </main>

      <FooterSection />
    </div>
  );
}