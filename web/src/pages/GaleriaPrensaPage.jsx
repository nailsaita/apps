import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';
import galeriaNotas from '@/data/galeriaNotas.js';
import { Helmet } from "react-helmet";

const FOCO = 'focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#fdb10c]';

// Texto solo para lectores de pantalla en enlaces que abren otra pestaña
const NuevaPestana = () => <span className="sr-only"> (se abre en otra pestaña)</span>;

export default function GaleriaPrensaPage() {
  const notas = galeriaNotas
    .filter((item) => item.titulo.trim())
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

  return (
    <div className="relative min-h-screen bg-[#FFF1E3] text-[#343230]">
      <Helmet>
        <title>Artículos periodísticos · 39° Encuentro Plurinacional</title>
      </Helmet>
      <CountdownBanner />
      <Navbar />
      <TitleSection title="Artículos periodísticos" />

      <main id="contenido" tabIndex={-1} className="relative mx-auto max-w-7xl px-4 pb-32 pt-4 outline-none sm:px-6 lg:px-8">
        <section
          aria-labelledby="titulo-notas"
          className="rounded-3xl border border-[#eadeed] bg-white/70 p-6 shadow-xl shadow-[#813893]/5 backdrop-blur-sm sm:p-8"
        >
          <h2 id="titulo-notas" className="sr-only">
            {notas.length} notas publicadas, de la más reciente a la más antigua
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 m-0 p-0 list-none">
            {notas.map((item, index) => (
              <motion.li
                key={item.url || `${item.titulo}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.6) }}
                className="overflow-hidden rounded-2xl border border-[#eadeed] bg-[#faf7fb] shadow-sm"
              >
                <article className="flex h-full flex-col">
                  <div className="relative h-72 overflow-hidden bg-white">
                    {/* La captura repite el título que está debajo: si no hay descripción propia, es decorativa */}
                    <img
                      src={item.imagen}
                      alt={item.alt || ''}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain bg-white transition duration-500 ease-out hover:scale-105 motion-reduce:hover:scale-100"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-5">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm uppercase tracking-[0.2em] text-gray-600 m-0">
                          <span className="sr-only">Publicada el </span>
                          {item.fecha}
                        </p>
                        {item.medio && (
                          <span className="shrink-0 rounded-full bg-[#eadeed] px-3 py-1 text-xs font-bold text-[#662c74]">
                            <span className="sr-only">Medio: </span>
                            {item.medio}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-3 text-lg font-bold text-[#343230]">
                        {item.titulo}
                      </h3>
                    </div>

                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`mt-auto inline-flex items-center gap-2 self-start text-sm font-bold text-[#662c74] underline underline-offset-2 transition hover:text-[#813893] ${FOCO}`}
                      >
                        Ver nota
                        <span className="sr-only">: {item.titulo}{item.medio ? `, en ${item.medio}` : ''}</span>
                        <ExternalLink size={16} aria-hidden="true" />
                        <NuevaPestana />
                      </a>
                    ) : (
                      <span className="mt-auto text-sm text-gray-600">Enlace no disponible</span>
                    )}
                  </div>
                </article>
              </motion.li>
            ))}
          </ul>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}