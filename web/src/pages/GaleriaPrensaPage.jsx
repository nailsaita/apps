import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';
import galeriaNotas from '@/data/galeriaNotas.js';

export default function GaleriaPrensaPage() {
  const notas = galeriaNotas.filter((item) => item.titulo.trim());

  return (
    <div className="relative bg-background text-slate-100">
      <CountdownBanner />
      <Navbar />
      <TitleSection
        title="Artículos periodísticos"
      />
      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/10 backdrop-blur-lg sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {notas.map((item, index) => (
              <motion.article
                key={item.url || `${item.titulo}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-lg shadow-black/20"
              >
                <div className="relative h-72 overflow-hidden bg-slate-900">
                  <img
                    src={item.imagen}
                    alt={item.alt || item.titulo || 'Nota de prensa'}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain transition duration-500 ease-out hover:scale-105"
                    style={{ "backgroundPosition": "top", "backgroundColor": "white" }}
                  />
                </div>
                <div className="flex flex-col gap-4 p-5">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                      {item.fecha}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold text-white">
                      {item.titulo}
                    </h3>
                  </div>

                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-violet-200 transition hover:text-white"
                    >
                      Ver nota
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="text-sm text-slate-500">Enlace no disponible</span>
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