import React from 'react';
import { motion } from 'framer-motion';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';

export default function PaolaPage() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative min-h-screen bg-[#FFF1E3] text-[#343230]">
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
            ¡Libertad para Paola ya! Abajo la justicia patriarcal y sus funcionarios judiciales que reproducen, avalan y sostienen las violencias machistas.
          </h2>

          <div className="space-y-5 text-[#343230]/85 leading-relaxed text-base">
            <p>
              Paola Ortíz está presa hace trece años por una emergencia obstétrica. Fue condenada a prisión perpetua y acusada sin pruebas por haber tenido un parto en avalancha en condiciones de precariedad, sumándose a tantos otros casos aleccionadores que existen en nuestro país, como el de Belén en Tucumán.
            </p>
            <p>
              Este año, en mayo, el Comité Nacional de Prevención para la Tortura realizó una presentación en la causa planteando que esta condena configura un trato discriminatorio por la desproporcionalidad de la pena, y que la cadena perpetua es un trato inhumano, cruel y degradante, considerada tortura. El Comité se sumó a nuestra exigencia a que el Tribunal Superior de Justicia revise el caso con perspectiva de género y de derechos humanos, perspectiva que Paola no tuvo durante el proceso judicial que la condenó. Hace más de 400 días que esperamos la respuesta del TSJ.
            </p>
            <p>
              ¡Paola debe estar en el 39º Encuentro, libre y abrazada por su familia, amigues, compañeres y las cientos de miles que nos organizamos y luchamos por nuestros derechos sexuales y reproductivos!
            </p>
          </div>

          <div className="mt-10 bg-[#813893] text-white rounded-2xl p-6 text-center">
            <p className="text-xl md:text-2xl font-black tracking-tight">
              ¡Libre la queremos!
            </p>
          </div>
        </motion.section>

      </main>

      <FooterSection />
    </div>
  );
}