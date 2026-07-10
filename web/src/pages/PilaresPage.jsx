import React from 'react';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';
import pilares from '@/data/pilares.js';

export default function PilaresPage() {
  return (
    <div className="relative bg-background text-slate-100">
      <CountdownBanner />
      <Navbar />
      <TitleSection title="Pilares del Encuentro" />
      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-32 pt-32 sm:px-6 lg:px-8">
        <section className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-black/20">

          {/* Frase agregada con margen inferior para separar de la lista */}
          <p className="mb-6 text-lg font-medium text-slate-200">
            Los encuentros son:
          </p>

          <ol className="space-y-6">
            {pilares.map((pilar, index) => (
              <li key={pilar.nombre} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-fuchsia-500/20 text-sm font-semibold text-fuchsia-300">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{pilar.nombre}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">{pilar.descripcion}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}