import React from 'react';
import { motion } from 'framer-motion';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';
import galeriaNotas from '@/data/galeriaNotas.js';
import { ExternalLink, Bus, Car, Smartphone, Bike, TrainFront, CreditCard, QrCode, MapPin, Clock } from 'lucide-react';

export default function TransportePage() {

  return (
    <div className="relative bg-background text-slate-100">
      <CountdownBanner />
      <Navbar />
      <TitleSection
  title="Transporte"
  subtitle="Guía práctica para moverte por Córdoba Capital durante el Encuentro: colectivos, taxis, apps, bicicletas y una escapada en tren."
/>
      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">

  <div className="grid md:grid-cols-2 gap-6">

    {/* Colectivos urbanos */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#faf7fb] border border-[#eadeed] rounded-3xl p-7"
    >
      <div className="bg-[#2a823c] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
        <Bus size={22} />
      </div>
      <h3 className="text-[#343230] mb-3">1. Colectivos urbanos</h3>
      <p className="text-gray-500 text-sm mb-4">
        Es la principal forma de transporte dentro de la ciudad.
      </p>
      <ul className="space-y-3 text-sm text-gray-500">
        <li className="flex gap-2">
          <CreditCard size={16} className="text-[#fdb10c] shrink-0 mt-0.5" />
          <span><strong className="text-[#343230]">Medios de pago:</strong> tarjeta SUBE (física o digital), débito/crédito sin contacto (contactless) o QR desde apps como Mercado Pago o SUBE.</span>
        </li>
        <li className="flex gap-2">
          <MapPin size={16} className="text-[#fdb10c] shrink-0 mt-0.5" />
          <span><strong className="text-[#343230]">Cómo guiarse:</strong> apps como Tu Bondi, Moovit o Google Maps para recorridos, paradas cercanas y tiempos de llegada.</span>
        </li>
      </ul>
    </motion.div>

    {/* Taxis y remises */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-[#faf7fb] border border-[#eadeed] rounded-3xl p-7"
    >
      <div className="bg-[#fdb10c] text-[#4a2055] w-12 h-12 rounded-full flex items-center justify-center mb-4">
        <Car size={22} />
      </div>
      <h3 className="text-[#343230] mb-3">2. Taxis y remises</h3>
      <p className="text-gray-500 text-sm mb-4">
        Ideales para traslados directos, viajes nocturnos o salidas desde la Terminal de Ómnibus y el Aeropuerto (Taravella).
      </p>
      <ul className="space-y-3 text-sm text-gray-500">
        <li className="flex gap-2">
          <Car size={16} className="text-[#fdb10c] shrink-0 mt-0.5" />
          <span><strong className="text-[#343230]">Taxis (amarillos) / Remises (verdes):</strong> se solicitan telefónicamente o se paran en la vía pública.</span>
        </li>
        <li className="flex gap-2">
          <CreditCard size={16} className="text-[#fdb10c] shrink-0 mt-0.5" />
          <span><strong className="text-[#343230]">Pago:</strong> cobran por bajada de bandera y ficha por distancia. Aceptan efectivo y, en muchos casos, transferencia (conviene preguntar antes de subir).</span>
        </li>
      </ul>
    </motion.div>

    {/* Apps de viajes */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-[#faf7fb] border border-[#eadeed] rounded-3xl p-7"
    >
      <div className="bg-[#813893] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
        <Smartphone size={22} />
      </div>
      <h3 className="text-[#343230] mb-3">3. Aplicaciones de viajes</h3>
      <p className="text-gray-500 text-sm mb-4">
        Uber, Cabify y Didi operan de forma habitual en la ciudad.
      </p>
      <ul className="space-y-3 text-sm text-gray-500">
        <li className="flex gap-2">
          <QrCode size={16} className="text-[#fdb10c] shrink-0 mt-0.5" />
          <span>Todas te permiten conocer el costo estimado de antemano y pagar directamente con tarjeta o billeteras virtuales desde la app.</span>
        </li>
      </ul>
    </motion.div>

    {/* Bici CBA */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-[#faf7fb] border border-[#eadeed] rounded-3xl p-7"
    >
      <div className="bg-[#2a823c] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
        <Bike size={22} />
      </div>
      <h3 className="text-[#343230] mb-3">4. Bicicletas municipales (Bici CBA)</h3>
      <p className="text-gray-500 text-sm mb-4">
        Sistema gratuito de bicicletas públicas, ideal para recorrer el área céntrica, Nueva Córdoba y parques.
      </p>
      <ul className="space-y-3 text-sm text-gray-500 mb-4">
        <li className="flex gap-2">
          <MapPin size={16} className="text-[#fdb10c] shrink-0 mt-0.5" />
          <span><strong className="text-[#343230]">Estaciones:</strong> Plaza España, Paseo Sobremonte, Parque Sarmiento, Parque de las Tejas, Plaza Vélez Sarsfield, entre otras.</span>
        </li>
        <li className="flex gap-2">
          <Clock size={16} className="text-[#fdb10c] shrink-0 mt-0.5" />
          <span><strong className="text-[#343230]">Tiempo de uso:</strong> hasta 1 hora continua, renovable. Incluye casco y chaleco. Costo: gratuito.</span>
        </li>
      </ul>
      <div className="bg-white/60 rounded-2xl p-4 text-sm text-gray-500">
        <p className="font-bold text-[#343230] mb-2">Cómo registrarte si sos turista:</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Ingresá a la web de <a href="https://bicicba.com/" target="_blank" rel="noreferrer" className="text-[#662c74] font-semibold hover:underline inline-flex items-center gap-1">Bici CBA <ExternalLink size={12} /></a></li>
          <li>Subí una foto de tu DNI/Pasaporte (ambos lados) y una foto de perfil</li>
          <li>Validado el usuario, obtenés acceso para retirar la bici por QR en la estación</li>
        </ol>
      </div>
    </motion.div>

    {/* Tren de las Sierras */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-[#faf7fb] border border-[#eadeed] rounded-3xl p-7 md:col-span-2"
    >
      <div className="bg-[#fdb10c] text-[#4a2055] w-12 h-12 rounded-full flex items-center justify-center mb-4">
        <TrainFront size={22} />
      </div>
      <h3 className="text-[#343230] mb-3">5. Tren de las Sierras</h3>
      <p className="text-gray-500 text-sm mb-4">
        Más una experiencia turística e interurbana que un transporte rápido de ciudad, es genial para una escapada de un día.
      </p>
      <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-500">
        <div className="flex gap-2">
          <MapPin size={16} className="text-[#fdb10c] shrink-0 mt-0.5" />
          <span><strong className="text-[#343230]">Recorrido:</strong> sale desde la ciudad (Estación Mitre o Alta Córdoba) y se interna en el Valle de Punilla, pasando por La Calera, San Roque, Cosquín, Valle Hermoso, hasta Capilla del Monte.</span>
        </div>
        <div className="flex gap-2">
          <ExternalLink size={16} className="text-[#fdb10c] shrink-0 mt-0.5" />
          <span><strong className="text-[#343230]">Por qué conviene:</strong> pasajes económicos y un recorrido que bordea ríos, montañas y el embalse del Dique San Roque.</span>
        </div>
      </div>
      <p className="text-gray-500 text-sm mt-4">
        Los pasajes se compran en las boleterías de las estaciones o de forma anticipada online en la web oficial de{' '}
        
          <a href="https://www.trenesargentinos.gob.ar/"
          target="_blank"
          rel="noreferrer"
          className="text-[#662c74] font-semibold hover:underline inline-flex items-center gap-1"
        >
          Trenes Argentinos <ExternalLink size={12} />
        </a>. Se recomienda reservar con tiempo, especialmente en temporada o fines de semana largo.
      </p>
    </motion.div>

  </div>
</main>

      <FooterSection />
    </div>
  );
}