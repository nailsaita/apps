import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';
import galeriaNotas from '@/data/galeriaNotas.js';
import { Helmet } from "react-helmet";

export default function GaleriaPrensaPage() {
  const notas = galeriaNotas.filter((item) => item.titulo.trim());

  return (
    <div className="relative min-h-screen bg-[#FFF1E3] text-[#343230]">
      <Helmet>
        <title>Galería de Prensa</title>
      </Helmet>
      <CountdownBanner />
      <Navbar />
      <TitleSection title="Artículos periodísticos" />

      <main className="relative mx-auto max-w-7xl px-4 pb-32 pt-4 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-[#eadeed] bg-white/70 p-6 shadow-xl shadow-[#813893]/5 backdrop-blur-sm sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {notas.reverse().map((item, index) => (
              <motion.article
                key={item.url || `${item.titulo}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="overflow-hidden rounded-2xl border border-[#eadeed] bg-[#faf7fb] shadow-sm"
              >
                <div className="relative h-72 overflow-hidden bg-white">
                  <img
                    src={item.imagen}
                    alt={item.alt || item.titulo || 'Nota de prensa'}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain transition duration-500 ease-out hover:scale-105"
                    style={{ backgroundPosition: 'top', backgroundColor: 'white' }}
                  />
                </div>
                <div className="flex flex-col gap-4 p-5">
                  <div>
  <div className="flex items-center justify-between gap-2">
    <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
      {item.fecha}
    </p>
    {item.medio && (
      <span className="shrink-0 rounded-full bg-[#eadeed] px-3 py-1 text-xs font-bold text-[#662c74]">
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
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#662c74] transition hover:text-[#813893]"
                    >
                      Ver nota
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="text-sm text-gray-400">Enlace no disponible</span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}