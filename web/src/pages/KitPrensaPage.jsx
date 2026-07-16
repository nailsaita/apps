import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle, Wifi, BatteryCharging, Video, Coffee, MapPin, Download, MessageSquare } from 'lucide-react';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';

export default function KitPrensaPage() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative min-h-screen bg-[#FFF1E3] text-[#343230]">
      <CountdownBanner />
      <Navbar />

      <TitleSection title="Kit de Prensa" />

      <main className="relative mx-auto max-w-5xl px-4 pb-32 pt-32 sm:px-6 lg:px-8">

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          className="mb-16 bg-white/70 rounded-3xl p-6 md:p-8 border border-[#eadeed] shadow-xl shadow-[#813893]/5 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-bold tracking-tight text-[#813893] mb-4 uppercase" style={{ fontFamily: "'thunderhouse-pro', sans-serif" }}>
            Información para la Prensa y Acreditación
          </h2>
          <h3 className="text-xl font-semibold text-[#343230] mb-4">
            ¿Cómo te acreditás?
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
                href="#[Enlace_Formulario]"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-[#662c74] hover:text-[#813893] font-bold transition-colors mt-1 w-fit"
              >
                Pronto el link de registro <ExternalLink size={14} />
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
                  <p className="text-sm text-gray-500 mt-0.5">[Detalles de red/configuración]</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#eadeed] rounded-lg text-[#662c74] shrink-0">
                  <BatteryCharging size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-[#343230]">Estaciones de energía</h5>
                  <p className="text-sm text-gray-500 mt-0.5">[Tomas disponibles]</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#eadeed] rounded-lg text-[#662c74] shrink-0">
                  <Video size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-[#343230]">Zona de entrevistas</h5>
                  <p className="text-sm text-gray-500 mt-0.5">[Espacio acondicionado]</p>
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
          className="bg-white/50 rounded-3xl p-6 md:p-8 border border-[#eadeed] shadow-xl shadow-[#813893]/5"
        >
          <h2 className="text-2xl font-bold tracking-tight text-[#813893] mb-1 uppercase" style={{ fontFamily: "'thunderhouse-pro', sans-serif" }}>
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
                href="https://drive.proton.me/urls/1DQZM35XG0#TAssjJLB4zqI"
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
                  Grupo de WhatsApp de "Solo Administradores" para enviar alertas de cambios de cronograma y fotos en tiempo real.
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

      </main>

      <FooterSection />
    </div>
  );
}