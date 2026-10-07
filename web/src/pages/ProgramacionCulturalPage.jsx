import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, MapPin, Infinity as InfinityIcon } from 'lucide-react';
import { Navbar, FooterSection } from '@/pages/HomePage.jsx';
import { PROGRAMACION, DISCIPLINAS } from '@/data/programacionCultural.js';

const DIAS = [
  { id: 'sabado', label: 'Sábado 10' },
  { id: 'domingo', label: 'Domingo 11' }
];

const COLOR_DISCIPLINA = {
  'Escénicas': 'bg-[#eadeed] text-[#662c74]',
  'Formativas': 'bg-[#dceade] text-[#21662f]',
  'Música': 'bg-[#feecc2] text-[#6e4d05]',
  'Cine / Audiovisual': 'bg-[#fee2e2] text-[#b91c1c]',
  'Literatura': 'bg-[#e0e7ff] text-[#3730a3]',
  'Visuales': 'bg-[#fbd7b8] text-[#9a3412]',
  'Escultura': 'bg-[#fbd7b8] text-[#9a3412]',
  'Otras propuestas': 'bg-[#f3e9f5] text-[#4a2055]',
  'Murales': 'bg-[#feecc2] text-[#6e4d05]'
};

const aMinutos = (hhmm) => {
  if (!hhmm) return Infinity;
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

const horario = (a) => {
  if (!a.inicio) return null;
  return a.fin ? `${a.inicio} a ${a.fin}` : `${a.inicio} hs`;
};

function Tarjeta({ a }) {
  return (
    <div className="bg-white/70 border border-[#eadeed] rounded-2xl p-4 sm:p-5">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${COLOR_DISCIPLINA[a.disciplina] || 'bg-gray-100 text-gray-600'}`}>
          {a.disciplina}
        </span>
        {horario(a) && (
          <span className="inline-flex items-center gap-1 text-xs font-bold text-[#662c74]">
            <Clock size={12} /> {horario(a)}
          </span>
        )}
      </div>
      <h3 className="text-[#343230] font-bold text-base leading-snug mb-1">{a.titulo}</h3>
      {a.lugar && (
        <p className="flex items-start gap-1.5 text-sm text-[#343230]/75 m-0">
          <MapPin size={14} className="text-[#813893] mt-0.5 shrink-0" />
          <span>
            <strong className="font-semibold">{a.lugar}</strong>
            {a.espacio ? ` · ${a.espacio}` : ''}
            {a.direccion ? ` · ${a.direccion}` : ''}
          </span>
        </p>
      )}
      {a.nota && <p className="text-xs text-[#343230]/60 mt-1.5 m-0">{a.nota}</p>}
    </div>
  );
}

export default function ProgramacionCulturalPage() {
  const [dia, setDia] = useState('sabado');
  const [disciplina, setDisciplina] = useState('Todas');

  const filtrar = (a) => disciplina === 'Todas' || a.disciplina === disciplina;

  const grupos = useMemo(() => {
    const delDia = PROGRAMACION
      .filter(a => a.dia === dia && filtrar(a))
      .sort((x, y) => aMinutos(x.inicio) - aMinutos(y.inicio) || x.titulo.localeCompare(y.titulo, 'es'));

    const mapa = new Map();
    delDia.forEach(a => {
      const clave = a.inicio || 'sin-hora';
      if (!mapa.has(clave)) mapa.set(clave, []);
      mapa.get(clave).push(a);
    });
    return [...mapa.entries()];
  }, [dia, disciplina]);

  const todoElFinde = useMemo(
    () => PROGRAMACION.filter(a => a.dia === 'finde' && filtrar(a)),
    [disciplina]
  );

  const total = grupos.reduce((n, [, items]) => n + items.length, 0);

  return (
    <div className="min-h-screen bg-[#FFF1E3] font-body">
      <Navbar hasTopSpace={false} />

      <main className="max-w-4xl mx-auto px-4 pt-28 pb-20">
        <Link to="/#cultural" className="inline-flex items-center gap-2 text-[#662c74] font-bold text-sm mb-8 hover:underline">
          <ArrowLeft size={16} />
          Volver a la Grilla Cultural
        </Link>

        <header className="mb-8">
          <h1 className="text-[#343230] text-3xl sm:text-5xl font-black leading-tight mb-4">
            Programación cultural por espacio
          </h1>
          <p className="text-[#343230]/80 text-lg leading-relaxed max-w-2xl">
            Obras, talleres, música, cine y más en distintos espacios de la ciudad, ordenados por día y por hora.
          </p>
        </header>

        {/* Selector de día */}
        <div className="flex gap-2 mb-4">
          {DIAS.map(d => (
            <button
              key={d.id}
              onClick={() => setDia(d.id)}
              className={`flex-1 sm:flex-none sm:px-10 py-3 rounded-full text-sm sm:text-base font-black transition-colors ${dia === d.id
                ? 'bg-[#813893] text-white ring-2 ring-[#fdb10c]'
                : 'bg-white/70 text-[#662c74] border-2 border-[#d5bddb] hover:bg-[#faf7fb]'
                }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* Filtro por disciplina */}
        <div className="flex flex-wrap gap-2 mb-10">
          {['Todas', ...DISCIPLINAS].map(d => (
            <button
              key={d}
              onClick={() => setDisciplina(d)}
              className={`text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full transition-colors ${disciplina === d
                ? 'bg-[#fdb10c] text-[#4a2055]'
                : 'bg-white/70 text-[#343230]/70 border border-[#eadeed] hover:bg-[#feecc2]'
                }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Todo el fin de semana */}
        {todoElFinde.length > 0 && (
          <section className="mb-10 rounded-3xl p-5 sm:p-6 bg-[#2f1435]">
            <h2 className="flex items-center gap-2 text-[#fdb10c] text-lg font-black mb-4 m-0">
              <InfinityIcon size={20} /> Todo el fin de semana
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {todoElFinde.map((a, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <p className="text-white font-bold text-sm leading-snug mb-1">{a.titulo}</p>
                  {a.lugar && (
                    <p className="text-white/60 text-xs m-0">
                      {a.lugar}{a.direccion ? ` · ${a.direccion}` : ''}
                    </p>
                  )}
                  {a.nota && <p className="text-[#fec449] text-xs mt-1 m-0">{a.nota}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Línea de horarios */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${dia}-${disciplina}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {total === 0 ? (
              <p className="text-center text-[#343230]/60 py-12">
                No hay actividades de esta disciplina para este día.
              </p>
            ) : (
              <div className="space-y-8">
                {grupos.map(([hora, items]) => (
                  <section key={hora} className="grid sm:grid-cols-[110px_1fr] gap-3 sm:gap-6">
                    <h2 className="text-[#4a2055] text-xl font-black m-0 sm:pt-4">
                      {hora === 'sin-hora' ? 'Horario a confirmar' : `${hora} hs`}
                    </h2>
                    <div className="space-y-3">
                      {items.map((a, i) => <Tarjeta key={i} a={a} />)}
                    </div>
                  </section>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <FooterSection />
    </div>
  );
}