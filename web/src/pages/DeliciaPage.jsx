import React from 'react';
import { motion } from 'framer-motion';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';
import { Helmet } from "react-helmet";

export default function DeliciaPage() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative min-h-screen bg-[#FFF1E3] text-[#343230]">
      <Helmet>
          <title>Aparición con vida de Delicia</title>
      </Helmet>
      <CountdownBanner />
      <Navbar />

      <TitleSection title="Aparición con vida de Delicia" />

      <main className="relative mx-auto max-w-4xl px-4 pb-32 pt-32 sm:px-6 lg:px-8">

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          className="bg-white/70 rounded-3xl p-6 md:p-10 border border-[#eadeed] shadow-xl shadow-[#813893]/5 backdrop-blur-sm"
        >
          <span className="inline-block bg-[#fdb10c] text-[#4a2055] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            CASO DELICIA MAMANI MAMANI
          </span>

          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#813893] mb-8 leading-snug">
            Inmediata aparición con vida de Delicia Mamani Mamani
          </h2>

          <div className="mb-8 rounded-2xl overflow-hidden border-2 border-[#eadeed] shadow-lg shadow-[#813893]/10">
            <img
              src="/images/delicia/delicia.jpg"
              alt="Delicia Mamani Mamani"
              className="w-full h-auto object-cover"
            />
            <div className="bg-[#faf7fb] px-5 py-3 border-t border-[#eadeed]">
              <p className="text-sm text-gray-500 text-center">
                Delicia Mamani Mamani, desaparecida desde el 21 de noviembre de 2025.
              </p>
            </div>
          </div>

          <div className="space-y-5 text-[#343230]/85 leading-relaxed text-base">
            <p>
              Desde la Comisión Organizadora de este 39º Encuentro exigimos la inmediata aparición con vida de Delicia Mamani Mamani, desaparecida desde el 21 de noviembre del 2025, cuyo caso fue catalogado como trata de personas recién el 26 de mayo de este año solo gracias a la lucha permanente de su comunidad.
            </p>
            <p>
              La causa pasó al fuero federal y quedó radicada en el Juzgado Federal N.º 3 de Córdoba. Lo que ahora se investiga, con intervención de la Procuraduría de Trata y Explotación de Personas (Protex) en el marco de la Ley 26.364, es lo que su familia, amigas, docentes del Carbó y vecinas autoconvocadas del barrio Alberdi denuncian desde un primer momento: Delicia es víctima de red de trata de personas.
            </p>
          </div>

          <div className="mt-10 bg-[#813893] text-white rounded-2xl p-6 text-center space-y-2">
            <p className="text-xl md:text-2xl font-black tracking-tight">
              ¡Vivas las llevaron, vivas las queremos!
            </p>
          </div>

          <div className="mt-6 bg-[#faf7fb] border border-[#eadeed] rounded-2xl p-6 text-center space-y-1">
            <p className="font-bold text-[#343230]">
              Inmediata aparición con vida de Delicia Mamani Mamani
            </p>
            <p className="text-sm text-gray-500">
              Desmantelamiento de las redes de trata sostenida con complicidad del poder político, el sistema judicial y las fuerzas de seguridad.
            </p>
          </div>
        </motion.section>

      </main>

      <FooterSection />
    </div>
  );
}