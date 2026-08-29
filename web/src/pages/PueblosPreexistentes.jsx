import React from 'react';
import { motion } from 'framer-motion';
import { Mountain } from 'lucide-react';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';
import { Helmet } from "react-helmet";


export default function PueblosPreexistentesPage() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative min-h-screen bg-[#FFF1E3] text-[#343230]">
      <Helmet>
        <title>Subcomisión Pueblos y Naciones Preexistentes</title>
      </Helmet>
      <CountdownBanner />
      <Navbar />

      <TitleSection title="Pueblos y Naciones Preexistentes" />

      <main className="relative mx-auto max-w-4xl px-4 pb-32 pt-4 sm:px-6 lg:px-8">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          className="bg-white/70 rounded-3xl p-6 md:p-8 border border-[#fed886] shadow-xl shadow-[#fdb10c]/5 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#fdb10c] text-[#4a2055] w-14 h-14 rounded-full flex items-center justify-center shrink-0">
              <Mountain size={26} />
            </div>
            <h3 className="text-lg font-bold text-[#343230] leading-snug">
    LA COMISIÓN DE PUEBLOS Y NACIONES PREEXISTENTES AL ESTADO NACIÓN SE SUMA AL PROCESO DEL 39° ENCUENTRO PLURINACIONAL
  </h3>
          </div>

          <div className="text-[#343230]/80 leading-relaxed text-base space-y-5">

  <p>
    En el espíritu de construcción colectiva que caracteriza al 39° Encuentro Plurinacional de Mujeres y Disidencias, comunicamos la conformación de la Comisión de Pueblos y Naciones Preexistentes al Estado Nación. Este espacio nace con el objetivo de fortalecer el carácter plurinacional del Encuentro y profundizar el diálogo entre las diversas identidades que lo componen desde la Comisión Organizadora.
  </p>

  <p>
    Somos integrantes de diferentes pueblos preexistentes en territorio Camiare, Comechingón, Sanavirón, Rankulche y Querandí, quienes, tras un camino compartido de reflexión y trabajo, hemos decidido organizarnos en esta Comisión para canalizar nuestras propuestas y aportar a la dinámica organizativa del Encuentro.
  </p>

  <div>
    <h4 className="font-bold text-[#916607] mb-2">Nuestro Propósito</h4>
    <p>
      Entendemos que el crecimiento de este Encuentro se sostiene en la diversidad. Nuestra Comisión se propone como un espacio de reunión y trabajo colaborativo para garantizar que las voces de los pueblos originarios y afrodescendientes tengan un lugar central, participación real y activa. Buscamos enriquecer los debates, compartir nuestra cosmovisión y contribuir a que la plurinacionalidad siga siendo un eje que nos hermana a todas, todes y todos.
    </p>
  </div>

  <div>
    <h4 className="font-bold text-[#916607] mb-2">Convocatoria Abierta</h4>
    <p className="mb-3">
      La construcción de este espacio es un ejercicio de apertura y suma de voluntades. Invitamos a:
    </p>
    <ul className="list-disc list-inside space-y-1.5 mb-3">
      <li>Hermanxs indígenas y afrodescendientes que deseen sumarse a caminar juntxs.</li>
      <li>Compañerxs, que, desde el respeto y la valoración de nuestra historia, deseen colaborar y acompañar nuestras luchas de manera consciente.</li>
    </ul>
    <p>
      Estamos convencidxs de que la participación plural es la fuerza que sostiene este Encuentro. Invitamos a quienes deseen sumar su compromiso a contactarnos.
    </p>
  </div>

  <div className="pt-4 border-t border-[#fed886] text-sm">
    <p className="font-bold text-[#343230]">Comisión de Pueblos y Naciones Preexistentes al Estado Nación.</p>
    <p className="mt-1">
      Contacto: <a href="mailto:preexistentes39encuentro@gmail.com" className="font-semibold text-[#916607] hover:text-[#b57f09] underline">preexistentes39encuentro@gmail.com</a>
    </p>
  </div>
</div>
        </motion.section>
      </main>

      <FooterSection />
    </div>
  );
}