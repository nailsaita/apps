import React from 'react';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';
import EJES from '@/data/ejes';

export default function TalleresPage() {
  return (
    <div className="relative bg-background text-slate-100">
      <CountdownBanner />
      <Navbar />
      <TitleSection title="Talleres" />
      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <section className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-black/20">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">Programación</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Ejes de trabajo</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">
              Lista de talleres organizados por eje temático.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="space-y-4 rounded-xl border border-white/10 bg-slate-950/70 p-3 md:hidden">
              {EJES.map((eje) => (
                <div key={eje.id} className="rounded-lg border border-white/10 bg-slate-950/70 p-4">
                  <div className="flex items-start gap-2">
                    <span className="mt-1 h-3 w-3 rounded-full" style={{ backgroundColor: eje.color }} />
                    <div>
                      <div className="font-semibold text-white">{eje.titulo}</div>
                      <div className="mt-1 text-sm text-slate-300">{eje.subtitulo}</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Talleres</div>
                    <ul className="mt-2 space-y-1 text-sm text-slate-300">
                      {eje.talleres.map((taller) => (
                        <li key={taller}>{taller}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <table className="hidden min-w-full border-separate border-spacing-0 overflow-hidden rounded-xl border border-white/10 md:table">
              <thead className="bg-slate-900/90 text-left text-sm text-slate-300">
                <tr>
                  <th className="px-4 py-3 font-semibold">Eje</th>
                  <th className="px-4 py-3 font-semibold">Talleres</th>
                </tr>
              </thead>
              <tbody>
                {EJES.map((eje) => (
                  <tr key={eje.id} className="border-t border-white/10 bg-slate-950/70 text-sm text-slate-200">
                    <td className="px-4 py-4 align-top">
                      <div className="flex items-start gap-2">
                        <span className="mt-1 h-3 w-3 rounded-full" style={{ backgroundColor: eje.color }} />
                        <div>
                          <div className="font-semibold text-white">{eje.titulo}</div>
                          <div className="mt-1 text-slate-300">{eje.subtitulo}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 align-top">
                      <ul className="space-y-1">
                        {eje.talleres.map((taller) => (
                          <li key={taller} className="text-slate-300">{taller}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}