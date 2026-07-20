import React from 'react';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import { Calendar, MapPin, ChevronDown, Download, ExternalLink, Mail, Instagram, Facebook, Music, Utensils, Bus, Home, AlertCircle, X, ArrowRight, Users, Star, Menu, Phone, Search, Heart, Copy, Check, ShoppingBag } from 'lucide-react';
import TitleSection from '@/components/TitleSection.jsx';
import EJES from '@/data/ejes';

export default function TalleresPage() {
  return (
    <div className="relative bg-[#FFF1E3] text-[#343230] min-h-screen">
      <CountdownBanner />
      <Navbar />
      <TitleSection title="Talleres" />
      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#343230] mb-4">Ejes temáticos y talleres</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Los talleres son el corazón del Encuentro. Son espacios horizontales de debate donde se construyen los documentos colectivos. Hacé clic en cada eje para ver los talleres.
          </p>
          <p className="inline-flex items-center gap-1 text-[#21662f]">
            Pronto subiremos el listado completo           </p>
        </div>

        {/* <section className="rounded-3xl border border-[#eadeed] bg-white/70 p-6 shadow-xl shadow-[#813893]/5 backdrop-blur-sm">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#813893]">Programación</p>
            <h2 className="mt-2 text-2xl font-semibold text-[#343230]">Ejes de trabajo</h2>
            <p className="mt-2 max-w-2xl text-sm text-gray-500">
              Lista de talleres organizados por eje temático.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="space-y-4 rounded-xl border border-[#eadeed] bg-[#faf7fb] p-3 md:hidden">
              {EJES.map((eje) => (
                <div key={eje.id} className="rounded-lg border border-[#eadeed] bg-white p-4">
                  <div className="flex items-start gap-2">
                    <span className="mt-1 h-3 w-3 rounded-full" style={{ backgroundColor: eje.color }} />
                    <div>
                      <div className="font-semibold text-[#343230]">{eje.titulo}</div>
                      <div className="mt-1 text-sm text-gray-500">{eje.subtitulo}</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Talleres</div>
                    <ul className="mt-2 space-y-1 text-sm text-gray-500">
                      {eje.talleres.map((taller) => (
                        <li key={taller}>{taller}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <table className="hidden min-w-full border-separate border-spacing-0 overflow-hidden rounded-xl border border-[#eadeed] md:table">
              <thead className="bg-[#faf7fb] text-left text-sm text-gray-500">
                <tr>
                  <th className="px-4 py-3 font-semibold">Eje</th>
                  <th className="px-4 py-3 font-semibold">Talleres</th>
                </tr>
              </thead>
              <tbody>
                {EJES.map((eje) => (
                  <tr key={eje.id} className="border-t border-[#eadeed] bg-white/60 text-sm text-[#343230]/80">
                    <td className="px-4 py-4 align-top">
                      <div className="flex items-start gap-2">
                        <span className="mt-1 h-3 w-3 rounded-full" style={{ backgroundColor: eje.color }} />
                        <div>
                          <div className="font-semibold text-[#343230]">{eje.titulo}</div>
                          <div className="mt-1 text-gray-500">{eje.subtitulo}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 align-top">
                      <ul className="space-y-1">
                        {eje.talleres.map((taller) => (
                          <li key={taller} className="text-gray-500">{taller}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section> */}
      </main>

      <FooterSection />
    </div>
  );
}