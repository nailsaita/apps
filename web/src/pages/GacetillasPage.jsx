import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Download, ChevronDown } from 'lucide-react';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';
import gacetillas from '@/data/gacetillas.js';
import DECLARACIONES_DE_INTERES from '@/data/declaracionesDeInteres.js';
import { Helmet } from "react-helmet";

const FOCO = 'focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#fdb10c]';

// Texto solo para lectores de pantalla en enlaces que abren otra pestaña
const NuevaPestana = () => <span className="sr-only"> (se abre en otra pestaña)</span>;

const fechaLarga = (fecha) =>
  new Date(fecha).toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' });

export default function GacetillasPage() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative min-h-screen bg-[#FFF1E3] text-[#343230]">
      <Helmet>
        <title>Gacetillas y declaraciones · 39° Encuentro Plurinacional</title>
      </Helmet>

      <CountdownBanner />
      <Navbar />
      <TitleSection title="Gacetillas y Declaraciones de interés" />

      <main id="contenido" tabIndex={-1} className="relative mx-auto max-w-5xl px-4 pb-32 pt-4 outline-none sm:px-6 lg:px-8">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          aria-labelledby="titulo-gacetillas"
          className="mb-16 bg-white/70 rounded-3xl p-6 md:p-8 border border-[#eadeed] shadow-xl shadow-[#813893]/5 backdrop-blur-sm"
        >
          <h2 id="titulo-gacetillas" className="text-2xl font-bold tracking-tight text-[#813893] mb-6 uppercase">
            Gacetillas
          </h2>
          <p className="text-[#343230]/85 leading-relaxed mb-6 text-base">
            Accedé a las gacetillas de prensa donde comunicamos eventos, resoluciones y posicionamientos desde la comisión organizadora.
          </p>

          <ul className="space-y-4">
            {gacetillas.map((item) => (
              <li key={item.archivo}>
                <a
                  href={`/docs/${item.archivo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-start justify-between gap-3 rounded-xl border border-[#eadeed] bg-[#faf7fb] p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-[#d5bddb] motion-reduce:hover:translate-y-0 ${FOCO}`}
                >
                  <span className="text-base font-bold text-[#343230]">{item.titulo}</span>
                  <ExternalLink aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[#813893]" />
                  <NuevaPestana />
                </a>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          aria-labelledby="titulo-declaraciones"
          className="bg-white/50 rounded-3xl p-6 md:p-8 border border-[#eadeed] shadow-xl shadow-[#813893]/5"
        >
          <h2 id="titulo-declaraciones" className="text-2xl font-bold tracking-tight text-[#813893] mb-6 uppercase">
            Declaraciones de Interés
          </h2>
          <p className="text-[#343230]/85 leading-relaxed mb-6 text-base">
            Conocé las declaraciones de interés de las instituciones que acompañan el evento.
          </p>

          <div className="space-y-4">
            {DECLARACIONES_DE_INTERES.map((categoria, index) => {
              const abierta = expandedCategory === index;
              const idPanel = `declaraciones-${index}`;
              return (
                <div key={index} className="bg-[#faf7fb] rounded-xl border border-[#eadeed] overflow-hidden hover:border-[#d5bddb] transition-colors">
                  <h3 className="m-0">
                    <button
                      type="button"
                      onClick={() => setExpandedCategory(abierta ? null : index)}
                      aria-expanded={abierta}
                      aria-controls={idPanel}
                      className={`w-full flex items-center justify-between gap-3 p-4 md:p-5 text-left rounded-xl hover:bg-[#f5f2f8] transition-colors ${FOCO}`}
                    >
                      <span className="font-semibold text-[#343230] text-base md:text-lg">{categoria.categoria}</span>
                      <ChevronDown
                        size={20}
                        aria-hidden="true"
                        className={`text-[#813893] shrink-0 transition-transform duration-300 ${abierta ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </h3>

                  {/* El contenido solo existe cuando está abierto: así Tab no entra en enlaces escondidos */}
                  <div id={idPanel}>
                    <AnimatePresence initial={false}>
                      {abierta && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="px-4 md:px-5 pb-4 md:pb-5 pt-3 border-t border-[#eadeed] bg-white/50 space-y-3">
                            {categoria.declaraciones.map((decl, declIndex) => (
                              <li key={declIndex}>
                                <a
                                  href={decl.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`flex items-start justify-between p-3 rounded-lg bg-white border border-[#eadeed] hover:border-[#813893] hover:bg-[#faf7fb] transition-all group ${FOCO}`}
                                >
                                  <span className="flex-1">
                                    <span className="block font-medium text-[#343230] text-sm md:text-base group-hover:text-[#813893] transition-colors">
                                      {decl.titulo}
                                    </span>
                                    <span className="block text-xs md:text-sm text-gray-600 mt-1">
                                      {fechaLarga(decl.fecha)}
                                    </span>
                                  </span>
                                  <span aria-hidden="true" className="ml-3 p-2 bg-[#eadeed] rounded-lg text-[#662c74] group-hover:bg-[#813893] group-hover:text-white shrink-0 transition-colors">
                                    <Download size={16} />
                                  </span>
                                  <NuevaPestana />
                                </a>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>
      </main>

      <FooterSection />
    </div>
  );
}