import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle, Wifi, BatteryCharging, Video, Coffee, MapPin, Download, MessageSquare } from 'lucide-react';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';
import { Helmet } from "react-helmet";

const DRIVE_KIT = 'https://drive.google.com/drive/folders/1HFJbaRQSrcSKAmJ7aC4g6DI6jI4UuiEy';
const FORM_ACREDITACION = 'https://docs.google.com/forms/d/e/1FAIpQLSeekxXv86-me2qt6-rAI6_9uWvOleZzdDHMC8zrgYx2SwnbVw/viewform';
// Cuando esté el enlace del grupo de WhatsApp, pegalo acá y el botón se activa solo
const WHATSAPP_PRENSA = '';

const FOCO = 'focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#fdb10c]';

// Texto solo para lectores de pantalla en enlaces que abren otra pestaña
const NuevaPestana = () => <span className="sr-only"> (se abre en otra pestaña)</span>;

const SERVICIOS_SALA = [
  { icono: Wifi, titulo: 'Conectividad de alta velocidad', texto: 'Detalles de red/configuración' },
  { icono: BatteryCharging, titulo: 'Estaciones de energía', texto: 'Tomas disponibles' },
  { icono: Video, titulo: 'Espacio acondicionado', texto: 'Un espacio destinado solo a quienes cubran el encuentro' },
  { icono: Coffee, titulo: 'Comodidades básicas', texto: 'Agua fría/caliente, café y sanitarios cercanos de acceso rápido.' }
];

export default function KitPrensaPage() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative min-h-screen bg-[#FFF1E3] text-[#343230]">
      <Helmet>
        <title>Kit de prensa y acreditaciones · 39° Encuentro Plurinacional</title>
      </Helmet>
      <CountdownBanner />
      <Navbar />

      <TitleSection title="Kit de Prensa" />

      <main id="contenido" tabIndex={-1} className="relative mx-auto max-w-5xl px-4 pb-32 pt-4 outline-none sm:px-6 lg:px-8">

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          aria-labelledby="titulo-medios"
          className="mb-16 bg-white/70 rounded-3xl p-6 md:p-8 border border-[#eadeed] shadow-xl shadow-[#813893]/5 backdrop-blur-sm"
        >
          <h2 id="titulo-medios" className="text-2xl font-bold tracking-tight text-[#813893] mb-4 uppercase">
            Información para Medios de Comunicación
          </h2>
          <p className="text-[#343230]/85 leading-relaxed mb-4 text-base">
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
          <p className="text-[#343230]/85 leading-relaxed mb-6 text-base">
            <a
              href={DRIVE_KIT}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 font-semibold text-[#813893] underline underline-offset-2 hover:text-[#662c74] ${FOCO}`}
            >
              Ver todos los materiales en Google Drive
              <ExternalLink size={14} aria-hidden="true" />
              <NuevaPestana />
            </a>
          </p>

          <h3 className="text-xl font-semibold text-[#343230] mb-4">
            Si venís a cubrir el Encuentro Pluri, ¿cómo te acreditás?
          </h3>

          <p className="text-[#343230]/85 leading-relaxed mb-6 text-base">
            Si sos periodista, comunicadora/e, fotógrafas/os y creadoras/es de contenido de medios comunitarios,
            alternativos, hegemónicos y autogestivos podés registrarte para la cobertura del evento.
          </p>

          <a
            href={FORM_ACREDITACION}
            target="_blank"
            rel="noopener noreferrer"
            className={`mb-6 inline-flex items-center gap-2 px-5 py-3 bg-[#813893] hover:bg-[#662c74] text-sm font-bold text-white rounded-full transition-colors ${FOCO}`}
          >
            Completar el formulario de acreditación
            <ExternalLink size={14} aria-hidden="true" />
            <NuevaPestana />
          </a>

          <div className="bg-[#fffcf5] border border-[#fed886] rounded-xl p-4 mb-8 text-sm text-[#6e4d05] flex gap-3 items-start">
            <CheckCircle className="text-[#b57f09] shrink-0 mt-0.5" size={18} aria-hidden="true" />
            <p className="m-0">
              <strong className="text-[#6e4d05]">Importante:</strong> Durante el acto de apertura se entregarán las credenciales que serán solicitadas para acceder a la sala de prensa y a las zonas para medios.
            </p>
          </div>

          <div className="border-t border-[#eadeed] pt-6">
            <h3 className="text-lg font-semibold text-[#343230] mb-6">En la Sala de prensa podrás acceder a:</h3>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 m-0 p-0 list-none">
              {SERVICIOS_SALA.map(({ icono: Icono, titulo, texto }) => (
                <li key={titulo} className="flex items-start gap-3">
                  <span aria-hidden="true" className="p-2 bg-[#eadeed] rounded-lg text-[#662c74] shrink-0">
                    <Icono size={20} />
                  </span>
                  <div>
                    <h4 className="font-bold text-[#343230] m-0">{titulo}</h4>
                    <p className="text-sm text-gray-600 mt-0.5 m-0">{texto}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="flex items-center gap-2 text-sm text-[#343230] bg-[#faf7fb] p-4 rounded-xl border border-[#eadeed] m-0">
              <MapPin size={16} className="text-[#813893] shrink-0" aria-hidden="true" />
              <span><strong className="font-semibold">Dirección de la sala de prensa:</strong> Obispo Trejo 365</span>
            </p>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          aria-labelledby="titulo-kit"
          className="bg-white/50 rounded-3xl p-6 md:p-8 border border-[#eadeed] shadow-xl shadow-[#813893]/5"
        >
          <h2 id="titulo-kit" className="text-2xl font-bold tracking-tight text-[#813893] mb-1 uppercase">
            Nuestro Kit de Prensa
          </h2>
          <p className="text-gray-600 text-sm mb-6 font-medium">Recursos Digitales y Contenido</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="flex flex-col justify-between bg-[#faf7fb] p-5 rounded-2xl border border-[#eadeed] hover:border-[#d5bddb] transition-colors">
              <div>
                <div aria-hidden="true" className="p-2 bg-[#eadeed] rounded-lg w-fit text-[#662c74] mb-3">
                  <Download size={22} />
                </div>
                <h3 className="font-bold text-base text-[#343230] mb-2">Kit de prensa digital</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Enlace permanente (Drive/Dropbox) con gacetillas, logos vectoriales y fotos oficiales en alta resolución.
                </p>
              </div>
              <a
                href={DRIVE_KIT}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-5 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#813893] hover:bg-[#662c74] text-sm font-bold text-white rounded-full transition-colors shadow-lg shadow-[#813893]/20 ${FOCO}`}
              >
                Acceder a los recursos <ExternalLink size={14} aria-hidden="true" />
                <NuevaPestana />
              </a>
            </div>

            <div className="flex flex-col justify-between bg-[#faf7fb] p-5 rounded-2xl border border-[#eadeed] hover:border-[#b8d5be] transition-colors">
              <div>
                <div aria-hidden="true" className="p-2 bg-green-100 rounded-lg w-fit text-[#21662f] mb-3">
                  <MessageSquare size={22} />
                </div>
                <h3 className="font-bold text-base text-[#343230] mb-2">Canal de difusión</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Grupo de WhatsApp para recibir alertas de cambios de cronograma y fotos en tiempo real.
                </p>
              </div>
              {WHATSAPP_PRENSA ? (
                <a
                  href={WHATSAPP_PRENSA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-5 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#21662f] hover:bg-[#184b22] text-sm font-bold text-white rounded-full transition-colors shadow-lg shadow-[#2a823c]/20 ${FOCO}`}
                >
                  Sumarme al grupo de WhatsApp <ExternalLink size={14} aria-hidden="true" />
                  <NuevaPestana />
                </a>
              ) : (
                // Mientras no haya enlace no es un botón: así nadie llega a una página rota
                <p className="mt-5 text-center px-4 py-2.5 bg-[#eaeaea] text-sm font-bold text-[#4b5563] rounded-full m-0">
                  Pronto habilitaremos el grupo
                </p>
              )}
            </div>
          </div>
        </motion.section>

      </main>

      <FooterSection />
    </div>
  );
}