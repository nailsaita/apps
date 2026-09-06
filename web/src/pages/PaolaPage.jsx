import React from 'react';
import { motion } from 'framer-motion';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';
import {Helmet} from "react-helmet";

export default function PaolaPage() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative min-h-screen bg-[#FFF1E3] text-[#343230]">
      <Helmet>
          <title>Libertad Para Paola</title>
      </Helmet>

      <CountdownBanner />
      <Navbar />

      <TitleSection title="Libertad para Paola" />

      <main className="relative mx-auto max-w-4xl px-4 pb-32 pt-32 sm:px-6 lg:px-8">

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          className="bg-white/70 rounded-3xl p-6 md:p-10 border border-[#eadeed] shadow-xl shadow-[#813893]/5 backdrop-blur-sm"
        >
          <span className="inline-block bg-[#fdb10c] text-[#4a2055] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Caso PAOLA ORTÍZ
          </span>

          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#813893] mb-8 leading-snug">
            ¡PAOLA ORTIZ ESTÁ EN LIBERTAD! 🕊️💜
          </h2>

          <div className="space-y-5 text-[#343230]/85 leading-relaxed text-base">
            <p>
              Tras 13 años de una pelea incansable, la justicia ordenó la liberación de Paola Ortiz. Un recurso presentado por sus abogadas Julia Luna y Rocío Garro e impulsado por la fuerza colectiva de la militancia transfeminista logró romper el encierro.
            </p>

            <p className="font-bold text-[#813893]">
              📍 ¿Por qué este fallo marca un hito?
            </p>

            <p>
              Paola estuvo injustamente presa a causa de la criminalización de una emergencia obstétrica: una expresión de la violencia institucional y patriarcal que castiga a las personas gestantes en situación de vulnerabilidad. Su libertad no es una concesión, es una conquista de la militancia feminista.
            </p>

            <p>
              Llevamos su nombre como bandera política y exigencia en cada rincón del país. Hoy celebramos que no solo recuperó su libertad: ¡PAOLA VA A ESTAR EN EL ENCUENTRO! ✊🏽✨
            </p>

            <p>
              Abrazamos a Paola, a su familia, a sus abogadas y a cada compañera que no bajó los brazos en estos 13 años de lucha.
            </p>
          </div>

          <div className="mt-10 bg-[#813893] text-white rounded-2xl p-6 text-center">
            <p className="text-xl md:text-2xl font-black tracking-tight">
              ¡Nos vemos en Córdoba para marchar con Paola! 💜
            </p>
          </div>
        </motion.section>

      </main>

      <FooterSection />
    </div>
  );
}