import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Users, MessageCircle, ShieldCheck, ClipboardList, Split, FileText, QrCode } from 'lucide-react';
import { Navbar, FooterSection } from '@/pages/HomePage.jsx'; // ajustá la ruta si tu HomePage está en otro lugar

const fadeInVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const BLOQUES = [
  { dia: 'Sábado', momento: 'Tarde', hora: '15:00 a 18:00 hs', detalle: 'Apertura, pautas de funcionamiento y debate.' },
  { dia: 'Domingo', momento: 'Mañana', hora: '09:00 a 12:00 hs', detalle: 'Continuación del debate e intercambio.' },
  { dia: 'Domingo', momento: 'Tarde', hora: '15:00 a 18:00 hs', detalle: 'Síntesis, redacción colectiva, validación y entrega de conclusiones.' }
];

const COORDINACION = [
  { titulo: 'Facilitar la palabra', texto: 'Evitar intervenciones extensas y priorizar a quienes todavía no hayan hablado.' },
  { titulo: 'Cuidar el eje temático', texto: 'Guiar el debate con empatía y firmeza si la conversación se aleja del tema asignado.' },
  { titulo: 'Cuidarnos entre todes', texto: 'Intervenir de inmediato frente a agresiones o discursos de discriminación y odio. El taller es un espacio seguro.' },
  { titulo: '¿Cómo se construye?', texto: 'La tarea es relevar tanto los acuerdos comunes (consensos) como las posturas diversas (disidencias).' }
];

const REGISTRO = [
  'Anotá de forma clara y completa lo que se dice en el taller.',
  'Al final de cada bloque, leé las notas al grupo para revisarlas.',
  'Resguardá el registro de cada jornada y garantizá que esté disponible para redactar las conclusiones.'
];

const APERTURA = [
  { titulo: 'Conformar el Equipo de Registro', texto: 'Invitar a 2 o 3 personas voluntarias para tomar nota fiel de las intervenciones y redactar las conclusiones.' },
  { titulo: 'Acordar pautas de convivencia y tiempos', texto: 'Proponer y acordar de forma colectiva el tiempo límite por intervención (recomendado: 2 a 3 minutos).' },
  { titulo: 'Abrir la lista de uso de la palabra', texto: 'Armar una lista visible anotando las intervenciones estrictamente por orden de solicitud.' }
];

const DESDOBLAMIENTO = [
  'Informar la apertura del nuevo espacio a la Comisión Organizadora para que asigne el espacio físico y brinde las herramientas necesarias.',
  'Dividir el grupo en dos espacios (por ejemplo, Taller A1 y Taller A2).',
  'En el nuevo espacio, el grupo designa su propia coordinación y Equipo de Registro para continuar de forma autónoma.'
];

const ENCABEZADO_ACTA = [
  'Nombre y número del taller.',
  'Nombres de quienes coordinan y de quienes integran el Equipo de Registro.',
  'Cantidad total de participantes y procedencia geográfica (ciudades y localidades presentes).',
  'Nombre de la persona designada para la lectura en el plenario de cierre.'
];

function Bloque({ icono, titulo, children }) {
  return (
    <motion.section
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="bg-white/70 rounded-3xl p-6 sm:p-8 mb-6"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="bg-[#eadeed] text-[#662c74] w-11 h-11 rounded-full flex items-center justify-center shrink-0">
          {icono}
        </span>
        <h2 className="text-[#4a2055] text-xl sm:text-2xl font-black m-0 leading-tight">{titulo}</h2>
      </div>
      {children}
    </motion.section>
  );
}

export default function GuiaTalleresPage() {
  return (
    <div className="min-h-screen bg-[#FFF1E3] font-body">
      <Navbar hasTopSpace={false} />

      <main className="max-w-3xl mx-auto px-4 pt-28 pb-20">
        <Link
          to="/Talleres"
          className="inline-flex items-center gap-2 text-[#662c74] font-bold text-sm mb-8 hover:underline"
        >
          <ArrowLeft size={16} />
          Volver a Talleres
        </Link>

        <motion.header initial="hidden" animate="visible" variants={fadeInVariant} className="mb-10">
          <p className="text-[#662c74] font-bold text-sm mb-2">Comisión de Talleres · 39° Encuentro Plurinacional</p>
          <h1 className="text-[#343230] text-3xl sm:text-5xl font-black leading-tight mb-5">
            Guía sobre el funcionamiento de los talleres
          </h1>
          <p className="text-[#343230]/80 text-lg leading-relaxed max-w-2xl">
            Los talleres son el corazón del Encuentro: espacios abiertos, participativos y horizontales. No se dictan ni
            tienen jerarquías. Quienes asisten comparten saberes y experiencias vivenciales sobre la temática convocante,
            y toda voz tiene el mismo valor. Ninguna opinión se impone sobre otra, y el fin del taller no es lograr una
            única postura.
          </p>
        </motion.header>

        <Bloque icono={<Clock size={22} />} titulo="Horarios por bloques">
          <div className="grid sm:grid-cols-3 gap-4">
            {BLOQUES.map((b, i) => (
              <div key={i} className="bg-[#FFF1E3] rounded-2xl p-5 border border-[#eadeed]">
                <p className="text-[#4a2055] font-black text-lg leading-tight">{b.dia}</p>
                <p className="text-[#662c74] text-sm font-bold mb-3">{b.momento}</p>
                <p className="text-[#343230] font-bold mb-2">{b.hora}</p>
                <p className="text-[#343230]/75 text-sm leading-relaxed">{b.detalle}</p>
              </div>
            ))}
          </div>
        </Bloque>

        <Bloque icono={<MessageCircle size={22} />} titulo="El rol de coordinación">
          <p className="text-[#343230]/80 mb-5 leading-relaxed">
            La coordinación no enseña ni juzga: su función es facilitar el diálogo, dinamizar los intercambios y cuidar el
            espacio común para que toda voz tenga un lugar equitativo.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {COORDINACION.map((c, i) => (
              <div key={i} className="bg-[#FFF1E3] rounded-2xl p-5 border border-[#eadeed]">
                <h3 className="text-[#4a2055] font-bold mb-1.5 text-base">{c.titulo}</h3>
                <p className="text-[#343230]/75 text-sm leading-relaxed m-0">{c.texto}</p>
              </div>
            ))}
          </div>
        </Bloque>

        <Bloque icono={<ClipboardList size={22} />} titulo="El Equipo de Registro">
          <p className="text-[#343230]/80 mb-4 leading-relaxed">¿Qué funciones cumple?</p>
          <ul className="space-y-3 m-0 p-0 list-none">
            {REGISTRO.map((r, i) => (
              <li key={i} className="flex gap-3 text-[#343230]/85 leading-relaxed">
                <span className="mt-2 w-2 h-2 rounded-full bg-[#2a823c] shrink-0" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </Bloque>

        <Bloque icono={<Users size={22} />} titulo="Apertura: primeras acciones">
          <p className="text-[#343230]/80 mb-5 leading-relaxed">
            Al ingresar al espacio asignado, organizá el funcionamiento con estos pasos.
          </p>
          <ol className="space-y-4 m-0 p-0 list-none">
            {APERTURA.map((a, i) => (
              <li key={i} className="flex gap-4">
                <span className="bg-[#813893] text-white font-black w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-[#4a2055] font-bold text-base mb-1">{a.titulo}</h3>
                  <p className="text-[#343230]/75 text-sm leading-relaxed m-0">{a.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </Bloque>

        <Bloque icono={<Split size={22} />} titulo="Gestión del debate y desdoblamiento">
          <p className="text-[#343230]/80 mb-5 leading-relaxed">
            Si el grupo supera las 40 o 50 personas y el intercambio se vuelve inviable, se sugiere dividir el taller.
            Esto aplica cuando la cantidad de asistentes sobrepasa la capacidad del espacio o la posibilidad de participar.
          </p>
          <ol className="space-y-4 m-0 p-0 list-none">
            {DESDOBLAMIENTO.map((d, i) => (
              <li key={i} className="flex gap-4">
                <span className="bg-[#2a823c] text-white font-black w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm">
                  {i + 1}
                </span>
                <p className="text-[#343230]/85 text-sm leading-relaxed m-0 pt-1.5">{d}</p>
              </li>
            ))}
          </ol>
        </Bloque>

        <Bloque icono={<FileText size={22} />} titulo="Cierre y sistematización de conclusiones">
          <p className="text-[#343230]/80 mb-4 leading-relaxed">
            Durante la última jornada se redactan las conclusiones. Pueden participar todas las personas que quieran.
            El Equipo de Registro lee en voz alta el borrador con todo lo trabajado durante los encuentros.
          </p>

          <h3 className="text-[#4a2055] font-bold text-base mb-2">Registro equitativo de acuerdos y discrepancias</h3>
          <ul className="space-y-3 m-0 p-0 list-none mb-6">
            <li className="flex gap-3 text-[#343230]/85 leading-relaxed">
              <span className="mt-2 w-2 h-2 rounded-full bg-[#2a823c] shrink-0" />
              <span>Garantizar que el texto refleje todas las miradas.</span>
            </li>
            <li className="flex gap-3 text-[#343230]/85 leading-relaxed">
              <span className="mt-2 w-2 h-2 rounded-full bg-[#2a823c] shrink-0" />
              <span>
                No anular diferencias ni forzar mayorías: dejar asentado explícitamente cada enfoque. Por ejemplo: "Un
                sector plantea... mientras que otra postura sostiene...".
              </span>
            </li>
          </ul>

          <h3 className="text-[#4a2055] font-bold text-base mb-2">El documento debe contener al inicio</h3>
          <ol className="space-y-2 m-0 pl-5 mb-6 text-[#343230]/85 leading-relaxed list-decimal marker:text-[#813893] marker:font-bold">
            {ENCABEZADO_ACTA.map((e, i) => <li key={i}>{e}</li>)}
          </ol>

          <p className="text-[#343230]/80 leading-relaxed m-0">
            Las conclusiones deben ocupar como máximo dos hojas. La Comisión Organizadora entregará las hojas membretadas
            para escribirlas. El texto tiene que ser claro y breve, para facilitar la lectura en el plenario de cierre.
          </p>
        </Bloque>

        <Bloque icono={<ShieldCheck size={22} />} titulo="Entrega del acta final">
          <p className="text-[#343230]/80 mb-5 leading-relaxed">
            Redactá el acta final por duplicado, en papel, con las firmas de coordinación y del Equipo de Registro.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#f6faf7] rounded-2xl p-5 border border-[#b8d5be]">
              <h3 className="text-[#21662f] font-bold mb-1.5 text-base">Copia 1: lectura de cierre</h3>
              <p className="text-[#343230]/75 text-sm leading-relaxed m-0">
                Queda en poder de las personas designadas por el taller para la lectura pública en el acto de cierre.
              </p>
            </div>
            <div className="bg-[#faf7fb] rounded-2xl p-5 border border-[#d5bddb]">
              <h3 className="text-[#662c74] font-bold mb-1.5 text-base">Copia 2: Comisión Organizadora</h3>
              <p className="text-[#343230]/75 text-sm leading-relaxed m-0">
                Se entrega en mano a la persona responsable de la Comisión Organizadora asignada a la escuela.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start bg-[#feecc2]/60 rounded-2xl p-5 border border-[#fed886]">
            <QrCode size={22} className="text-[#916607] shrink-0 mt-0.5" />
            <p className="text-[#343230]/85 text-sm leading-relaxed m-0">
              <strong>Respaldo digital:</strong> registrá con fotos las actas finales completas y firmadas.
            </p>
          </div>
        </Bloque>
      </main>

      <FooterSection />
    </div>
  );
}