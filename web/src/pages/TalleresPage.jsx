import React from 'react';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';
import EJES from '@/data/ejes';
import { Calendar, MapPin, ChevronDown, Download, ExternalLink, Mail, Instagram, Facebook, Music, Utensils, Bus, Home, AlertCircle, X, ArrowRight, Users, Star, Menu, Phone, Search, Heart, Copy, Check, ShoppingBag, MessageCircle, Clock, Layers } from 'lucide-react';

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
          </p>
          <p className="inline-flex items-center gap-1 text-[#21662f]">
            Pronto subiremos el listado completo.
          </p>
        </div>

        {/* ¿Qué son y cómo funcionan? */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Texto principal */}
            <div className="lg:col-span-3">
              <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-[#813893] mb-3">
                ¿Qué son y cómo funcionan?
              </span>
              <div className="space-y-4 text-[#343230]/80 leading-relaxed">
                <p>
                  Los talleres son espacios de diálogo y debate que funcionan durante el Encuentro, reuniendo a sus participantes alrededor de una temática. Son abiertos y horizontales, sin inscripción obligatoria.
                </p>
                <p>
                  Les llamamos talleres porque en los mismos compartimos saberes, opiniones, experiencias e ideas, buscando acuerdos que luego se reflejen en las conclusiones del Encuentro. Las mismas sirven de impulso para nuestro accionar político, nos organizan y nutren nuestras iniciativas y luchas a lo largo y ancho del país, al hacerse eco de una diversidad de posiciones.
                </p>
                <p>
                  Todos los años, la Comisión Organizadora publica una lista de talleres para el Encuentro, que abarcan distintos ejes fundamentales: violencias machistas, femicidios, travesticidios y transfemicidios, derechos sexuales y reproductivos, educación, salud, situación nacional, luchas internacionales, causas socioambientales, antirracistas y anticoloniales, deportes, arte, violencias hacia infancias y adolescencias, y muchos más.
                </p>
                <p>
                  Existe una subcomisión que trabaja previamente qué nuevos talleres se agregarán y cuáles se mantendrán de Encuentros anteriores, reafirmando que estos ejes reflejan el crecimiento de nuestros debates, y la construcción colectiva permanente del movimiento feminista y disidente, de activismos varios en nuestros territorios, y los aportes de mujeres, lesbianas, travestis, trans, bisexuales, intersex y no binaries que vienen apostando a amplificar y profundizar el Encuentro.
                </p>
              </div>
            </div>

            {/* Cards laterales */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-[#faf7fb] border-2 border-[#eadeed] rounded-2xl p-5">
                <div className="flex items-center gap-2 text-[#662c74] mb-2">
                  <Clock size={18} />
                  <h4 className="font-bold text-sm">¿Cuándo funcionan?</h4>
                </div>
                <p className="text-sm text-gray-500">
                  El sábado por la mañana y la tarde, y el domingo por la mañana, antes de la marcha del Encuentro.
                </p>
              </div>

              <div className="bg-[#f6faf7] border-2 border-[#b8d5be] rounded-2xl p-5">
                <div className="flex items-center gap-2 text-[#21662f] mb-2">
                  <Users size={18} />
                  <h4 className="font-bold text-sm">Horizontales y abiertos</h4>
                </div>
                <p className="text-sm text-gray-500">
                  No hace falta inscripción previa. Compañerxs se ofrecen voluntariamente a coordinar, anotan oradorxs en una lista y toman nota de los acuerdos y diferencias.
                </p>
              </div>

              <div className="bg-[#fffcf5] border-2 border-[#fed886] rounded-2xl p-5">
                <div className="flex items-center gap-2 text-[#916607] mb-2">
                  <MessageCircle size={18} />
                  <h4 className="font-bold text-sm">Importante: no son charlas</h4>
                </div>
                <p className="text-sm text-gray-500">
                  No son conversatorios ni charlas con expositorxs. Cada taller decide cómo funcionar, siempre que se puedan elaborar conclusiones para compartir. Si son muy numerosos, pueden dividirse y funcionar en paralelo.
                </p>
              </div>
            </div>
          </div>
        </section>

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