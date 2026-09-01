import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle, Wifi, BatteryCharging, Video, Coffee, MapPin, Download, MessageSquare, ChevronDown } from 'lucide-react';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';
import { Helmet } from "react-helmet";
import DECLARACIONES_DE_INTERES from '@/data/declaracionesDeInteres.js';

export default function KitPrensaPage() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative min-h-screen bg-[#FFF1E3] text-[#343230]">
      <Helmet>
        <title>Kit de Prensa</title>
      </Helmet>
      <CountdownBanner />
      <Navbar />

      <TitleSection title="Kit de Prensa" />

      <main className="relative mx-auto max-w-5xl px-4 pb-32 pt-4 sm:px-6 lg:px-8">

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          className="mb-16 bg-white/70 rounded-3xl p-6 md:p-8 border border-[#eadeed] shadow-xl shadow-[#813893]/5 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-bold tracking-tight text-[#813893] mb-4 uppercase"
          >
            Información para Medios de Comunicación
          </h2>
          <p className="text-[#343230]/80 leading-relaxed mb-4 text-base">
            Este kit de prensa fue elaborado para que los medios cuenten con material de referencia al momento de difundir información sobre el evento. Solicitamos que su uso sea responsable, con el objetivo de que más personas se enteren del encuentro.
          </p>
          <h3 className="text-xl font-semibold text-[#343230] mb-4">
            ¿Qué vas a encontrar acá?
          </h3>
          <ul className="list-disc list-inside space-y-2 text-[#343230]/85 mb-6">
            <li>Fotos de la comisión organizadora y de encuentros anteriores</li>
            <li>Spots de invitación al encuentro</li>
            <li>Gacetillas de prensa donde comunicamos eventos, resoluciones y posicionamientos desde la comisión organizadora</li>
            <li>Recursos gráficos como el logo oficial</li>
          </ul>
          <p className="text-[#343230]/80 leading-relaxed mb-6 text-base">
            Para ver toda la información, {' '}
            <a
              href="https://drive.google.com/drive/folders/1HFJbaRQSrcSKAmJ7aC4g6DI6jI4UuiEy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#813893] hover:text-[#662c74]"
            >
              hacé click aquí <ExternalLink size={14} style={{ display: 'inline' }} />
            </a>
          </p>
          <h3 className="text-xl font-semibold text-[#343230] mb-4">
            Si venís a cubrir el entiendo, ¿Cómo te acreditás?
          </h3>

          <p className="text-[#343230]/80 leading-relaxed mb-6 text-base">
            Si sos periodista, comunicadora/e, fotógrafas/os y creadoras/es de contenido de medios comunitarios,
            alternativos, hegemónicos y autogestivos podés registrarte para la cobertura del evento.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#faf7fb] p-4 rounded-xl border border-[#eadeed]">
              <span className="block text-xs font-bold uppercase tracking-wider text-gray-400">Plazo de solicitud</span>
              <span className="text-sm text-[#343230] font-semibold mt-1 block">[Fecha a confirmar]</span>
            </div>

            <div className="bg-[#faf7fb] p-4 rounded-xl border border-[#eadeed] flex flex-col justify-between">
              <span className="block text-xs font-bold uppercase tracking-wider text-gray-400">Formulario</span>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeekxXv86-me2qt6-rAI6_9uWvOleZzdDHMC8zrgYx2SwnbVw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-[#662c74] hover:text-[#813893] font-bold transition-colors mt-1 w-fit"
              >
                Registrate acá <ExternalLink size={14} />
              </a>
            </div>
          </div>


          <div className="bg-[#fffcf5] border border-[#fed886] rounded-xl p-4 mb-8 text-sm text-[#6e4d05] flex gap-3 items-start">
            <CheckCircle className="text-[#b57f09] shrink-0 mt-0.5" size={18} />
            <p>
              <strong className="text-[#916607]">Importante:</strong> Durante el acto de apertura se entregarán las credenciales que serán solicitadas para acceder a la sala de prensa y a las zonas para medios.
            </p>
          </div>

          <div className="border-t border-[#eadeed] pt-6">
            <h4 className="text-lg font-semibold text-[#343230] mb-6">En la Sala de prensa podrás acceder a:</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#eadeed] rounded-lg text-[#662c74] shrink-0">
                  <Wifi size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-[#343230]">Conectividad de alta velocidad</h5>
                  <p className="text-sm text-gray-500 mt-0.5">Detalles de red/configuración</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#eadeed] rounded-lg text-[#662c74] shrink-0">
                  <BatteryCharging size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-[#343230]">Estaciones de energía</h5>
                  <p className="text-sm text-gray-500 mt-0.5">Tomas disponibles</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#eadeed] rounded-lg text-[#662c74] shrink-0">
                  <Video size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-[#343230]">Zona de entrevistas</h5>
                  <p className="text-sm text-gray-500 mt-0.5">Espacio acondicionado</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#eadeed] rounded-lg text-[#662c74] shrink-0">
                  <Coffee size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-[#343230]">Comodidades básicas</h5>
                  <p className="text-sm text-gray-500 mt-0.5">Agua fría/caliente, café y sanitarios cercanos de acceso rápido.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-[#343230] bg-[#faf7fb] p-4 rounded-xl border border-[#eadeed]">
              <MapPin size={16} className="text-[#813893] shrink-0" />
              <span><strong className="text-gray-400 font-normal">Dirección:</strong> Obispo Trejo 365</span>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          className="mb-16 bg-white/50 rounded-3xl p-6 md:p-8 border border-[#eadeed] shadow-xl shadow-[#813893]/5"
        >
          <h2 className="text-2xl font-bold tracking-tight text-[#813893] mb-1 uppercase"
          >
            Nuestro Kit de Prensa
          </h2>
          <p className="text-gray-500 text-sm mb-6 font-medium">Recursos Digitales y Contenido</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="flex flex-col justify-between bg-[#faf7fb] p-5 rounded-2xl border border-[#eadeed] hover:border-[#d5bddb] transition-colors">
              <div>
                <div className="p-2 bg-[#eadeed] rounded-lg w-fit text-[#662c74] mb-3">
                  <Download size={22} />
                </div>
                <h4 className="font-bold text-base text-[#343230] mb-2">Kit de prensa digital</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Enlace permanente (Drive/Dropbox) con gacetillas, logos vectoriales y fotos oficiales en alta resolución.
                </p>
              </div>
              <a
                href="https://drive.google.com/drive/folders/1HFJbaRQSrcSKAmJ7aC4g6DI6jI4UuiEy"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#813893] hover:bg-[#662c74] text-sm font-bold text-white rounded-full transition-colors shadow-lg shadow-[#813893]/20"
              >
                Acceder a los recursos <ExternalLink size={14} />
              </a>
            </div>

            <div className="flex flex-col justify-between bg-[#faf7fb] p-5 rounded-2xl border border-[#eadeed] hover:border-[#b8d5be] transition-colors">
              <div>
                <div className="p-2 bg-green-100 rounded-lg w-fit text-[#21662f] mb-3">
                  <MessageSquare size={22} />
                </div>
                <h4 className="font-bold text-base text-[#343230] mb-2">Canal de difusión</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Grupo de WhatsApp para recibir alertas de cambios de cronograma y fotos en tiempo real.
                </p>
              </div>
              <a
                href="#[Enlace_WhatsApp]"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#2a823c] hover:bg-[#21662f] text-sm font-bold text-white rounded-full transition-colors shadow-lg shadow-[#2a823c]/20"
              >
                Pronto habilitaremos este botón
              </a>
            </div>
          </div>
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