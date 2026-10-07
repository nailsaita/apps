import React from 'react';
import { motion } from 'framer-motion';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';
import { Download, Phone, Search, Mail, Smartphone, Star, Calendar, MapPin, Bus } from 'lucide-react';
import { Helmet } from 'react-helmet';

export default function TinDigitalPage() {
  return (
    <div className="relative min-h-screen bg-white text-[#343230]">
      <Helmet>
        <title>Tin Digital - Movilidad Gratuita</title>
      </Helmet>
      <CountdownBanner />
      <Navbar />
      <TitleSection
        title="Movilidad Gratuita"
        subtitle="Todo lo que necesitás saber sobre el beneficio de Tin Digital para moverte en este 39 Encuentro Plurinacional"
        breadcrumb={[{ label: "Inicio", path: "/" }, { label: "Tin Digital", path: "/TinDigital" }]}
      />

      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="flex-1 space-y-6">
            <h2 className="text-[#343230] text-4xl md:text-5xl leading-tight font-bold">
              ¡Movilidad Gratuita con <span className="text-[#813893]">Tin Digital!</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Para garantizar el acceso y facilitar la participación en todas las actividades y talleres del Encuentro, anunciamos un beneficio exclusivo de movilidad. Todas las personas que descarguen la aplicación <strong>Tin Digital</strong> en su celular podrán trasladarse de forma <strong>totalmente gratuita</strong> en el sistema de transporte urbano de la ciudad.
            </p>
            
            <div className="bg-[#f8f0fc] rounded-2xl p-6 border border-[#eadeed]">
              <h3 className="text-[#813893] text-xl font-bold mb-3 flex items-center gap-2">
                <Star size={24} /> Beneficio Urbano 100% Bonificado
              </h3>
              <p className="text-gray-700 mb-4">
                Viajá gratis generando tu código QR directamente desde la app. Este beneficio es válido exclusivamente para las siguientes fechas y empresas operadoras:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <Calendar className="text-[#813893] shrink-0 mt-1" size={18} />
                  <span><strong>Fechas habilitadas:</strong> Sábado 10, Domingo 11 y Lunes 12 de octubre de 2026.</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="text-[#813893] shrink-0 mt-1" size={18} />
                  <span><strong>Cobertura:</strong> Sistema de transporte URBANO de la ciudad.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Bus className="text-[#813893] shrink-0 mt-1" size={18} />
                  <span><strong>Empresas adheridas con gratuidad:</strong> Coniferal, Sibus, Tamse.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex-1 w-full flex justify-center">
             <div className="bg-[#813893] text-white rounded-3xl p-8 max-w-sm w-full shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Smartphone size={120} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Transporte Interurbano</h3>
                <p className="text-white/80 mb-6 text-sm">
                  ¿Necesitás viajar en otras empresas no incluidas en la gratuidad o usar el transporte interurbano? (Sol Bus)
                </p>
                <p className="mb-6 relative z-10">
                  Podés utilizar la misma aplicación Tin Digital. Simplemente cargá saldo en tu cuenta a través de Mercado Pago de forma rápida y segura, y utilizá el mismo código QR para abonar tu pasaje.
                </p>
                <a href="#tindigital-pasos" className="relative z-10 inline-block bg-white text-[#813893] font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
                  Ver cómo usar la app
                </a>
             </div>
          </div>
        </div>

        <div id="tindigital-pasos" className="bg-[#2f1435] rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#fed886]">¿Cómo usar Tin Digital?</h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Tin Digital es una nueva app que te permite viajar de una forma más sencilla, teniendo tu tarjeta virtual en el celular. Seguí estos 4 simples pasos para comenzar:
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#813893] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold border-4 border-[#4a2055]">1</div>
              <h4 className="text-xl font-bold mb-2 text-[#fed886]">Descargá la app</h4>
              <p className="text-sm text-white/70">
                Buscá Tin Digital en la tienda de aplicaciones de tu celular. Disponible gratis en Google Play para Android, o App Store para iOS.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#813893] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold border-4 border-[#4a2055]">2</div>
              <h4 className="text-xl font-bold mb-2 text-[#fed886]">Creá tu cuenta</h4>
              <p className="text-sm text-white/70">
                Solo tenés que completar con tus datos personales y crear una contraseña. Si ya tenés una, simplemente logueate con tu correo para acceder.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#813893] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold border-4 border-[#4a2055]">3</div>
              <h4 className="text-xl font-bold mb-2 text-[#fed886]">Recargá saldo</h4>
              <p className="text-sm text-white/70">
                (Para interurbano). Ingresá a "Recargar", indicá el monto, elegí abonar con Mercado Pago y confirmá. Monto mínimo $1.000 / máximo $80.000.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#813893] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold border-4 border-[#4a2055]">4</div>
              <h4 className="text-xl font-bold mb-2 text-[#fed886]">Pagá con QR</h4>
              <p className="text-sm text-white/70">
                Al subir al transporte, tocá el botón "Pagar con QR". La app generará instantáneamente un código; acercalo a la máquina validadora y ¡listo!
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center bg-white/10 rounded-2xl p-6 border border-white/20">
             <h4 className="text-xl font-bold mb-4">¡Descarga TIN Digital ahora!</h4>
             <div className="flex flex-wrap justify-center gap-4">
                <a href="https://play.google.com/store/apps/details?id=com.microcard.vic.tin" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
                   <Download size={20} /> Google Play
                </a>
                <a href="https://apps.apple.com/ar/app/tinpay/id6670454876" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
                   <Download size={20} /> Apple Store
                </a>
             </div>
             <p className="text-sm text-white/60 mt-4 max-w-2xl mx-auto">Llevá tu pasaje siempre con vos. Consultá tu saldo, historial de viajes y gestioná tus abonos desde un solo lugar de manera completamente segura.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-[#eadeed] rounded-2xl p-8 bg-[#faf7fb]">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#343230]">
               <Smartphone size={24} className="text-[#813893]" /> Contacto - ¡Estamos para ayudarte!
            </h4>
            <p className="text-gray-600 mb-6">Múltiples canales de comunicación para resolver tus consultas.</p>
            
            <div className="flex items-start gap-4 mb-4">
               <div className="bg-green-100 text-green-700 p-3 rounded-full shrink-0">
                 <Phone size={20} />
               </div>
               <div>
                  <p className="font-bold text-[#343230]">WhatsApp</p>
                  <p className="text-gray-500 text-sm mb-1">Lunes a Viernes de 9 hs a 18 hs y Sábados de 9 hs a 13hs</p>
                  <a href="https://wa.me/5493517047417" target="_blank" rel="noreferrer" className="text-green-600 font-bold hover:underline">+54 9 351 704 7417</a>
               </div>
            </div>
          </div>
          
          <div className="border border-[#eadeed] rounded-2xl p-8 bg-[#faf7fb]">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#343230]">
               <Search size={24} className="text-[#813893]" /> Guía Oficial - Sistema de Transporte
            </h4>
            <p className="text-gray-600 mb-6">Servicio de atención al cliente y soporte técnico.</p>
            
            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-3">
                  <Phone size={20} className="text-[#813893]" />
                  <span><strong>Teléfono:</strong> <a href="tel:08105550846" className="text-[#813893] font-bold hover:underline">0810 555 0846</a> (Horario extendido)</span>
               </div>
               <div className="flex items-center gap-3">
                  <Mail size={20} className="text-[#813893]" />
                  <span><strong>Email:</strong> <a href="mailto:infotin@tintecno.com.ar" className="text-[#813893] font-bold hover:underline">infotin@tintecno.com.ar</a></span>
               </div>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
