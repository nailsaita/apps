import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Check, Users, ShieldCheck, Smartphone, Heart, ArrowLeft } from 'lucide-react';
import { Navbar, FooterSection } from '@/pages/HomePage.jsx';

const HERRAMIENTAS = [
  {
    id: 'info',
    icono: <Smartphone size={24} />,
    titulo: 'Celular e información',
    items: [
      'Asegurate de tener batería y datos. En la plaza político-cultural habrá puntos de wifi.',
      'Configurá el bloqueo del celu con patrón, PIN, contraseña o biometría. Si lo perdés sin esa protección, el acceso a tu información y a la de tus contactos es extremadamente fácil.',
      'Ubicá dónde se hace cada actividad en la Plaza Político Cultural y en la web. Entrá a 39encuentropluri.com y descargá la app para tener toda la información.'
    ]
  },
  {
    id: 'moverse',
    icono: <Users size={24} />,
    titulo: 'Moverse con cuidado',
    items: [
      'Salí siempre con el DNI encima.',
      'Movete en grupo, siempre acompañade, especialmente de noche.',
      'Acordá un punto de encuentro con amigas o compañeras.',
      'Si necesitás moverte sole, avisale a alguien dónde vas a estar.',
      'Si estás organizade, activá un pie telefónico: una persona que tenga nombre completo, DNI, domicilio y un número de emergencia de quienes están en el Encuentro o marchando.'
    ]
  },
  {
    id: 'salud',
    icono: <ShieldCheck size={24} />,
    titulo: 'Salud y pertenencias',
    items: [
      'Si tenés alguna condición de salud específica o usás medicación de forma crónica, llevala con vos a todos lados.',
      'Si tenés REPROCANN, llevá el certificado o tu cuenta a mano. La tenencia de cannabis está penada con multa o prisión; el certificado prueba que su uso es legal y medicinal. Si está vencido, podés gestionar un certificado de renovación en trámite en la página del registro.',
      'Cuidá tus pertenencias, hidratate, comé y descansá.'
    ]
  },
  {
    id: 'convivencia',
    icono: <Heart size={24} />,
    titulo: 'Convivencia y espacios',
    items: [
      'En espacios asamblearios, respetá las perspectivas y la circulación de la palabra.',
      'Respetá los espacios pensados para la accesibilidad de quienes tienen movilidad reducida.',
      'Respetá identidades, decisiones y límites.',
      'No fotografíes ni filmes situaciones sin consentimiento.',
      'Tirá los residuos en los cestos señalizados: cuidar el ambiente también lo hacemos entre todes.'
    ]
  }
];

export default function Cuidados() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative font-body bg-[#f6faf7] min-h-screen">
      <Navbar hasTopSpace={false} />

      {/* Cabecera */}
      <header
        className="pt-32 pb-16 px-4 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #2f1435 0%, #184b22 100%)' }}
      >
        <div className="absolute -top-20 -left-16 w-80 h-80 bg-[#fdb10c]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-16 w-96 h-96 bg-[#2a823c]/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          <Link
            to="/#sede"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Volver a Sede y Logística
          </Link>
          <div>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-[#fdb10c] text-[#4a2055] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            >
              Activemos red
            </motion.span>
          </div>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-5">
            Nos cuidamos entre todes, todes podemos cuidarnos
          </h1>
          <p className="text-white/75 text-lg leading-relaxed">
            Red de cuidados colectivos en el 39° Encuentro Plurinacional de Mujeres, Lesbianas, Travestis, Trans, Bisexuales, Intersex y No Binaries.
          </p>
        </div>
      </header>

      <main className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[#343230]/80 text-lg max-w-2xl mx-auto mb-12">
            Cuidarnos es una tarea colectiva. Prestemos atención a quienes tenemos alrededor, respetemos los espacios y pidamos ayuda cuando la necesitemos.
          </p>

          {/* Quiénes somos + dónde encontrarnos */}
          <div className="grid lg:grid-cols-5 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3 bg-white border-2 border-[#b8d5be] rounded-2xl p-6 md:p-8"
            >
              <div className="text-[#21662f] mb-4"><ShieldCheck size={28} /></div>
              <h2 className="text-[#343230] text-2xl font-bold mb-3">Comisión de Cuidados Colectivos</h2>
              <p className="text-sm text-[#343230]/80 leading-relaxed mb-3">
                Previene, orienta, acompaña, desescala conflictos y activa los equipos correspondientes durante el Encuentro, en los espacios públicos, escolares y culturales de la ciudad de Córdoba. Trabajamos en red: si algo te incomoda o te pone en riesgo, buscanos y <strong>activemos red</strong>.
              </p>
              <p className="text-sm text-[#343230]/80 leading-relaxed mb-3">
                Garantizar un Encuentro libre de misoginia, sexismo, racismo, xenofobia, lesbo-trans-homoodio, estigmatizaciones y discriminaciones es tarea de todes.
              </p>
              <p className="text-sm text-[#343230]/80 leading-relaxed">
                Creemos que lo mejor es dar una respuesta que traspase la lógica punitiva: acompañarnos desde la escucha atenta y abierta, el trato respetuoso y el diálogo claro e informado ante lo que emerge.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 bg-[#fffcf5] border-2 border-[#fed886] rounded-2xl p-6 md:p-8 flex flex-col"
            >
              <div className="bg-[#fdb10c] text-[#4a2055] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MapPin size={22} />
              </div>
              <h2 className="text-[#343230] text-2xl font-bold mb-3">¿Dónde nos encontrás?</h2>
              <ul className="space-y-3 text-sm text-[#343230]/85 leading-relaxed">
                <li className="flex items-start gap-2">
                  <Check size={14} className="text-[#916607] mt-1 shrink-0" />
                  En la plaza político-cultural, en el gazebo de cuidados.
                </li>
                <li className="flex items-start gap-2">
                  <Check size={14} className="text-[#916607] mt-1 shrink-0" />
                  En las marchas, los talleres y cada actividad del Encuentro.
                </li>
                <li className="flex items-start gap-2">
                  <Check size={14} className="text-[#916607] mt-1 shrink-0" />
                  En las escuelas de alojamiento y de talleres, a través de les responsables que representan a la comisión organizadora en cada institución.
                </li>
              </ul>
              <div className="mt-5 bg-[#fdb10c] text-[#4a2055] rounded-xl px-4 py-3 text-sm font-bold">
                Nos identificás por las pecheras amarillas.
              </div>
            </motion.div>
          </div>

          {/* Herramientas (todo visible: es una página de consulta) */}
          <h2 className="text-center text-[#343230] text-3xl font-bold mb-3">
            Herramientas de cuidados colectivos
          </h2>
          <p className="text-center text-gray-500 mb-10">Autocuidados por donde andemos.</p>

          <div className="grid sm:grid-cols-2 gap-5 items-start">
            {HERRAMIENTAS.map((h, i) => (
              <motion.div
                key={h.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border-2 border-[#b8d5be] rounded-2xl p-6"
              >
                <div className="text-[#21662f] mb-3">{h.icono}</div>
                <h3 className="font-bold text-[#343230] text-lg mb-4">{h.titulo}</h3>
                <ul className="space-y-3">
                  {h.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[#343230]/80 leading-relaxed">
                      <Check size={14} className="text-[#21662f] mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-[#4a2055] font-bold text-lg mt-14">
            Lo convertimos en una responsabilidad colectiva, compañeres: juntes podemos cuidarnos.
          </p>

          <div className="text-center mt-8">
            <Link
              to="/#sede"
              className="inline-flex items-center gap-2 bg-[#813893] text-white font-bold px-6 py-3 rounded-full hover:bg-[#662c74] transition-colors"
            >
              <ArrowLeft size={16} />
              Volver a Sede y Logística
            </Link>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}