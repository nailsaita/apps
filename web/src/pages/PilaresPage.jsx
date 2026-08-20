import React from 'react';
import { motion } from 'framer-motion';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';
import pilares from '@/data/pilares.js';
import { Helmet } from "react-helmet";

export default function PilaresPage() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative min-h-screen bg-[#FFF1E3] text-[#343230]">
      <Helmet>
        <title>Pilares del Encuentro</title>
      </Helmet>
      <CountdownBanner />
      <Navbar />
      <TitleSection title="Pilares del Encuentro" />

      <main className="relative mx-auto max-w-4xl px-4 pb-32 pt-4 sm:px-6 lg:px-8">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          className="bg-white/70 rounded-3xl p-6 md:p-8 border border-[#eadeed] shadow-xl shadow-[#813893]/5 backdrop-blur-sm"
        >
          <p className="mb-6 text-lg font-medium text-[#343230]">
            Los encuentros son:
          </p>

          <ol className="space-y-6">
            {pilares.map((pilar, index) => (
              <li key={pilar.nombre} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eadeed] text-sm font-bold text-[#662c74]">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#813893]">{pilar.nombre}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#343230]/80">{pilar.descripcion}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.section>
      </main>

      <FooterSection />
    </div>
  );
}