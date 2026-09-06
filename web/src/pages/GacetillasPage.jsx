import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Download, ChevronDown } from 'lucide-react';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';
import gacetillas from '@/data/gacetillas.js';
import DECLARACIONES_DE_INTERES from '@/data/declaracionesDeInteres.js';
import { Helmet } from "react-helmet";

export default function GacetillasPage() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative min-h-screen bg-[#FFF1E3] text-[#343230]">
      <Helmet>
        <title>Gacetillas</title>
      </Helmet>

      <CountdownBanner />
      <Navbar />
      <TitleSection title="Gacetillas y Declaraciones de interés" />

      <main className="relative mx-auto max-w-5xl px-4 pb-32 pt-4 sm:px-6 lg:px-8">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          className="mb-16 bg-white/70 rounded-3xl p-6 md:p-8 border border-[#eadeed] shadow-xl shadow-[#813893]/5 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-bold tracking-tight text-[#813893] mb-6 uppercase">
            Gacetillas
          </h2>
          <p className="text-[#343230]/80 leading-relaxed mb-6 text-base">
            Accedé a las gacetillas de prensa donde comunicamos eventos, resoluciones y posicionamientos desde la comisión organizadora.
          </p>

          <ul className="space-y-4">
            {gacetillas.map((item) => (
              <li key={item.archivo}>
                <a
                  href={`/docs/${item.archivo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between gap-3 rounded-xl border border-[#eadeed] bg-[#faf7fb] p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-[#d5bddb]"
                >
                  <span className="text-base font-bold text-[#343230]">{item.titulo}</span>
                  <ExternalLink className="mt-1 h-5 w-5 shrink-0 text-[#813893]" />
                </a>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          className="bg-white/50 rounded-3xl p-6 md:p-8 border border-[#eadeed] shadow-xl shadow-[#813893]/5"
        >
          <h2 className="text-2xl font-bold tracking-tight text-[#813893] mb-6 uppercase">
            Declaraciones de Interés
          </h2>
          <p className="text-[#343230]/80 leading-relaxed mb-6 text-base">
            Conocé las declaraciones de interés de las instituciones que acompañan el evento.
          </p>

          <div className="space-y-4">
            {DECLARACIONES_DE_INTERES.map((categoria, index) => (
              <div key={index} className="bg-[#faf7fb] rounded-xl border border-[#eadeed] overflow-hidden hover:border-[#d5bddb] transition-colors">
                <button
                  onClick={() => setExpandedCategory(expandedCategory === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-[#f5f2f8] transition-colors"
                >
                  <h3 className="font-semibold text-[#343230] text-base md:text-lg">{categoria.categoria}</h3>
                  <motion.div
                    animate={{ rotate: expandedCategory === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} className="text-[#813893]" />
                  </motion.div>
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedCategory === index ? 'auto' : 0,
                    opacity: expandedCategory === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 md:px-5 pb-4 md:pb-5 border-t border-[#eadeed] bg-white/50">
                    <div className="mt-3 space-y-3">
                      {categoria.declaraciones.map((decl, declIndex) => (
                        <a
                          key={declIndex}
                          href={decl.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start justify-between p-3 rounded-lg bg-white border border-[#eadeed] hover:border-[#813893] hover:bg-[#faf7fb] transition-all group"
                        >
                          <div className="flex-1">
                            <p className="font-medium text-[#343230] text-sm md:text-base group-hover:text-[#813893] transition-colors">
                              {decl.titulo}
                            </p>
                            <p className="text-xs md:text-sm text-gray-400 mt-1">
                              {new Date(decl.fecha).toLocaleDateString('es-AR', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </p>
                          </div>
                          <div className="ml-3 p-2 bg-[#eadeed] rounded-lg text-[#662c74] group-hover:bg-[#813893] group-hover:text-white shrink-0 transition-colors">
                            <Download size={16} />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.section>
      </main>

      <FooterSection />
    </div>
  );
}