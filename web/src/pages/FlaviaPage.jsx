import React from 'react';
import { motion } from 'framer-motion';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';
import { Helmet } from "react-helmet";
export default function FlaviaPage() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative min-h-screen bg-[#FFF1E3] text-[#343230]">
      <Helmet>
          <title>¡Queremos a Flavia Saganías en el Encuentro! ✊🏼✊🏽</title>
      </Helmet>
      <CountdownBanner />
      <Navbar />

      <TitleSection title="FLAVIA SAGANÍAS" />

      <main className="relative mx-auto max-w-4xl px-4 pb-32 pt-32 sm:px-6 lg:px-8">

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          className="bg-white/70 rounded-3xl p-6 md:p-10 border border-[#eadeed] shadow-xl shadow-[#813893]/5 backdrop-blur-sm"
        >
          <span className="inline-block bg-[#fdb10c] text-[#4a2055] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            CASO FLAVIA SAGANÍAS
          </span>

          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#813893] mb-8 leading-snug">
            ¡Exigimos absolución para Flavia Saganías!
          </h2>

          <div className="space-y-5 text-[#343230]/85 leading-relaxed text-base">
            <p>
              ❌ En el año 2019, Flavia Saganías fue condenada en primera instancia a 23 años de prisión por el juzgado de Cruz del Eje, tras haber hecho una publicación en redes sociales donde expuso detalles de su denuncia para defender a su hija y preservar su integridad física.
            </p>
            <p>
              Tras años de espera bajo un encierro y con un bozal legal que limita su comunicación y la mantiene cautiva, la Corte Suprema de Justicia de la Nación registró recientemente movimientos respecto al recurso de queja presentado por su defensa.
            </p>
            <p>
              💪🏼 Ante este nuevo escenario, tenemos la oportunidad de acompañar a Flavia y visibilizar su causa a nivel nacional para que la Corte escuche, abra la queja y reconozca que no tuvo ninguna responsabilidad ni participación en los hechos por los que se la condenó.
            </p>
            <p>
              ❌ Al día de hoy su fallo sienta un precedente de miedo para las mujeres y madres que defienden sus derechos y los de sus hijos, lo cual dificulta el accionar legal en situaciones de violencia.
            </p>
            <p>
              Por ella, por todas las madres protectoras y personas sobrevivientes de ASI, que se haga justicia.
            </p>
          </div>

          <div className="mt-10 bg-[#813893] text-white rounded-2xl p-6 text-center space-y-2">
            <p className="text-xl md:text-2xl font-black tracking-tight">
              🔥 ¡¡Exigimos absolución para Flavia ya!! 🔥
            </p>
          </div>
        </motion.section>

      </main>

      <FooterSection />
    </div>
  );
}