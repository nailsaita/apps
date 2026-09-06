import React from 'react';
import { motion } from 'framer-motion';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';
import { Helmet } from "react-helmet";

export default function MaxyLulen() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative min-h-screen bg-[#FFF1E3] text-[#343230]">
      <Helmet>
          <title>¡PRONTA LIBERTAD PARA MAX Y LULÉN!</title>
      </Helmet>
      <CountdownBanner />
      <Navbar />

      <TitleSection title="¡PRONTA LIBERTAD PARA MAX Y LULÉN!" />

      <main className="relative mx-auto max-w-4xl px-4 pb-32 pt-32 sm:px-6 lg:px-8">

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          className="bg-white/70 rounded-3xl p-6 md:p-10 border border-[#eadeed] shadow-xl shadow-[#813893]/5 backdrop-blur-sm"
        >
          <span className="inline-block bg-[#fdb10c] text-[#4a2055] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            CASO Max Caviglione y Lulén Watts
          </span>

          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#813893] mb-8 leading-snug">
           ¡PRONTA LIBERTAD PARA MAX Y LULÉN!
          </h2>

          <div className="space-y-5 text-[#343230]/85 leading-relaxed text-base">
            <p>
            ❌ El fiscal Marcelo Fenoll y el tribunal integrado por Cristian Griffi, Alfredo Villegas y María Susana Blanc Gerzicich tuvieron en sus manos la posibilidad de incorporar una mirada atravesada por los derechos humanos y las violencias de género. No lo hicieron.
            </p>
            <p>
             ⚠️ Cuando el Poder Judicial desconoce las violencias previas, también reproduce violencia.</p>
<p>
❌ No aceptamos que una condena desproporcionada sea presentada como respuesta neutral. Esto también es violencia institucional.

            </p>
          </div>

          <div className="mt-8 mb-8 rounded-2xl overflow-hidden border-2 border-[#eadeed] shadow-lg shadow-[#813893]/10">
            <div className="bg-[#faf7fb] px-5 py-3 border-t border-[#eadeed]">
              <p className="text-sm text-gray-500 text-center">
                No vamos a callarnos frente a una condena injusta y cruel contra Max Caviglione y Lulén Watts.
              </p>
            </div>
          </div>
          <div className="mt-10 bg-[#813893] text-white rounded-2xl p-6 text-center space-y-2">
            <p className="text-xl md:text-2xl font-black tracking-tight">
               ¡Queremos a Max y Lulén en el Encuentro también! Nos hacen falta.
            </p>
          </div>

          
        </motion.section>

      </main>

      <FooterSection />
    </div>
  );
}