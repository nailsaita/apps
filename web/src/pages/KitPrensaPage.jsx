import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle, Wifi, BatteryCharging, Video, Coffee, MapPin, Download, MessageSquare } from 'lucide-react';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';

export default function KitPrensaPage() {
  // Animación suave para la entrada de las secciones
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative min-h-screen bg-background text-slate-100">
      <CountdownBanner />
      <Navbar />

      <TitleSection title="Kit de Prensa" />

      {/* Ajustado pt-24 para evitar solapamientos con el banner de título */}
      <main className="relative mx-auto max-w-5xl px-4 pb-32 pt-32 sm:px-6 lg:px-8">

        {/* SECCIÓN 1: ACREDITACIÓN */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          className="mb-16 bg-slate-900/80 rounded-2xl p-6 md:p-8 border border-slate-800 shadow-xl shadow-black/30 backdrop-blur-sm"
        >
          {/* text-fuchsia-400 añade excelente contraste temático en títulos secundarios */}
          <h2 className="text-2xl font-bold tracking-tight text-fuchsia-400 mb-4 uppercase">
            Información para la Prensa y Acreditación
          </h2>
          <h3 className="text-xl font-semibold text-slate-100 mb-4">
            ¿Cómo te acreditás?
          </h3>

          <p className="text-slate-200 leading-relaxed mb-6 text-base">
            Si sos periodista, comunicadora/e, fotógrafas/os y creadoras/es de contenido de medios comunitarios,
            alternativos, hegemónicos y autogestivos podés registrarte para la cobertura del evento.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Plazo de solicitud</span>
              <span className="text-sm text-slate-100 font-semibold mt-1 block">[Completar Fecha Límite]</span>
            </div>
            <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Formulario</span>
              <a
                href="#[Enlace_Formulario]"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-sky-400 hover:text-sky-300 font-bold transition-colors mt-1 w-fit"
              >
                Completar formulario de registro <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-8 text-sm text-amber-200 flex gap-3 items-start">
            <CheckCircle className="text-amber-400 shrink-0 mt-0.5" size={18} />
            <p>
              <strong className="text-amber-300">Importante:</strong> Durante el acto de apertura se entregarán las credenciales que serán solicitadas para acceder a la sala de prensa y a las zonas para medios.
            </p>
          </div>

          {/* Sala de Prensa */}
          <div className="border-t border-slate-800/80 pt-6">
            <h4 className="text-lg font-semibold text-white mb-6">En la Sala de prensa podrás acceder a:</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-sky-500/10 rounded-lg text-sky-400 shrink-0">
                  <Wifi size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-100">Conectividad de alta velocidad</h5>
                  <p className="text-sm text-slate-300 mt-0.5">[Detalles de red/configuración]</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-sky-500/10 rounded-lg text-sky-400 shrink-0">
                  <BatteryCharging size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-100">Estaciones de energía</h5>
                  <p className="text-sm text-slate-300 mt-0.5">[Tomas disponibles]</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-sky-500/10 rounded-lg text-sky-400 shrink-0">
                  <Video size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-100">Zona de entrevistas</h5>
                  <p className="text-sm text-slate-300 mt-0.5">[Espacio acondicionado]</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-sky-500/10 rounded-lg text-sky-400 shrink-0">
                  <Coffee size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-100">Comodidades básicas</h5>
                  <p className="text-sm text-slate-300 mt-0.5">Agua fría/caliente, café y sanitarios cercanos de acceso rápido.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-200 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
              <MapPin size={16} className="text-rose-400 shrink-0" />
              <span><strong className="text-slate-400 font-normal">Dirección:</strong> [Completar ubicación de la sala de prensa]</span>
            </div>
          </div>
        </motion.section>

        {/* SECCIÓN 2: KIT DE PRENSA */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          className="bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-slate-800/80 shadow-xl"
        >
          <h2 className="text-2xl font-bold tracking-tight text-fuchsia-400 mb-1 uppercase">
            Nuestro Kit de Prensa
          </h2>
          <p className="text-slate-300 text-sm mb-6 font-medium">Recursos Digitales y Contenido</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tarjeta Drive */}
            <div className="flex flex-col justify-between bg-slate-950/60 p-5 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-colors">
              <div>
                <div className="p-2 bg-sky-500/10 rounded-lg w-fit text-sky-400 mb-3">
                  <Download size={22} />
                </div>
                <h4 className="font-bold text-base text-white mb-2">Kit de prensa digital</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Enlace permanente (Drive/Dropbox) con gacetillas, logos vectoriales y fotos oficiales en alta resolución.
                </p>
              </div>
              <a
                href="#[Enlace_Drive]"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-sm font-bold text-slate-100 rounded-xl border border-slate-700 transition-colors"
              >
                Acceder a los recursos <ExternalLink size={14} />
              </a>
            </div>

            {/* Tarjeta WhatsApp */}
            <div className="flex flex-col justify-between bg-slate-950/60 p-5 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-colors">
              <div>
                <div className="p-2 bg-emerald-500/10 rounded-lg w-fit text-emerald-400 mb-3">
                  <MessageSquare size={22} />
                </div>
                <h4 className="font-bold text-base text-white mb-2">Canal de difusión rápido</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Grupo de WhatsApp de "Solo Administradores" para enviar alertas de cambios de cronograma y fotos en tiempo real.
                </p>
              </div>
              <a
                href="#[Enlace_WhatsApp]"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-sm font-bold text-white rounded-xl transition-colors shadow-lg shadow-emerald-950/40"
              >
                Unirse al canal informativo
              </a>
            </div>
          </div>
        </motion.section>

      </main>

      <FooterSection />
    </div>
  );
}