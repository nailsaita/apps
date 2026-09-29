import React, { useMemo, useState } from 'react';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';
import { TALLERES_EJES, TOTAL_TALLERES } from '@/data/talleres';
import { ChevronDown, MapPin, Users, MessageCircle, Clock, Search, X } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';

/* ---------- Utilidades de búsqueda ---------- */

// Quita tildes y pasa a minúsculas conservando el largo del texto,
// así los índices sirven para resaltar sobre el texto original.
const fold = (str) =>
  str
    .split('')
    .map((c) => c.normalize('NFD')[0].toLowerCase())
    .join('');

const getTerms = (query) =>
  fold(query)
    .split(/\s+/)
    .filter(Boolean);

function Highlight({ text, terms }) {
  if (!terms.length || !text) return <>{text}</>;

  const folded = fold(text);
  const ranges = [];
  terms.forEach((term) => {
    let i = folded.indexOf(term);
    while (i !== -1) {
      ranges.push([i, i + term.length]);
      i = folded.indexOf(term, i + term.length);
    }
  });
  if (!ranges.length) return <>{text}</>;

  ranges.sort((a, b) => a[0] - b[0]);
  const merged = [ranges[0]];
  for (let k = 1; k < ranges.length; k++) {
    const last = merged[merged.length - 1];
    if (ranges[k][0] <= last[1]) last[1] = Math.max(last[1], ranges[k][1]);
    else merged.push(ranges[k]);
  }

  const parts = [];
  let cursor = 0;
  merged.forEach(([start, end], idx) => {
    if (start > cursor) parts.push(text.slice(cursor, start));
    parts.push(
      <mark key={idx} className="rounded bg-[#fed886] px-0.5 text-[#343230]">
        {text.slice(start, end)}
      </mark>
    );
    cursor = end;
  });
  if (cursor < text.length) parts.push(text.slice(cursor));
  return <>{parts}</>;
}

/* ---------- Tarjeta de taller ---------- */

function TallerCard({ taller, terms, forceOpen }) {
  const [open, setOpen] = useState(false);
  const isOpen = forceOpen || open;
  const hasDescription = Boolean(taller.descripcion);

  return (
    <li className="rounded-2xl border-2 border-[#eadeed] bg-white/80">
      <button
        type="button"
        onClick={() => hasDescription && !forceOpen && setOpen((o) => !o)}
        aria-expanded={isOpen}
        disabled={!hasDescription || forceOpen}
        className="flex w-full items-start justify-between gap-3 rounded-2xl px-4 py-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#813893] disabled:cursor-default"
      >
        <span className="font-bold leading-snug text-[#343230]">
          <Highlight text={taller.titulo} terms={terms} />
        </span>
        {hasDescription && !forceOpen && (
          <ChevronDown
            size={18}
            className={`mt-1 shrink-0 text-[#813893] transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        )}
      </button>

      {(taller.lugar || taller.grupo) && (
        <div className="flex flex-wrap items-center gap-2 px-4 pb-3">
          {taller.grupo && (
            <span className="rounded-full bg-[#f4ecf6] px-2.5 py-0.5 text-xs font-semibold text-[#662c74]">
              {taller.grupo}
            </span>
          )}
          {taller.lugar && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#f6faf7] px-2.5 py-0.5 text-xs font-semibold text-[#21662f]">
              <MapPin size={12} />
              {taller.lugar}
              {taller.mapa && (
                <a
                  href={taller.mapa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 underline underline-offset-2 hover:text-[#813893]"
                >
                  Ver mapa
                </a>
              )}
            </span>
          )}
        </div>
      )}

      <AnimatePresence initial={false}>
        {isOpen && hasDescription && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="px-4 pb-4 text-sm leading-relaxed text-[#343230]/80">
              <Highlight text={taller.descripcion} terms={terms} />
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

/* ---------- Eje (acordeón) ---------- */

function EjeSection({ eje, talleres, terms, open, onToggle, buscando }) {
  const total = eje.talleres.length;
  const contador = buscando
    ? `${talleres.length} de ${total} ${total === 1 ? 'taller' : 'talleres'}`
    : `${total} ${total === 1 ? 'taller' : 'talleres'}`;

  return (
    <section className="rounded-3xl border-2 border-[#eadeed] bg-white/70">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`eje-${eje.id}`}
          className="flex w-full items-center gap-4 rounded-3xl px-5 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#813893]"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#813893] text-sm font-black text-white">
            {eje.id}
          </span>
          <span className="flex-1">
            <span className="block font-bold leading-snug text-[#343230]">{eje.titulo}</span>
            <span className="mt-0.5 block text-sm text-[#662c74]">{contador}</span>
          </span>
          <ChevronDown
            size={20}
            className={`shrink-0 text-[#813893] transition-transform ${open ? 'rotate-180' : ''}`}
          />
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`eje-${eje.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <ul className="space-y-3 px-4 pb-5 sm:px-5">
              {talleres.map((taller, i) => (
                <TallerCard
                  key={`${eje.id}-${taller.titulo}-${i}`}
                  taller={taller}
                  terms={terms}
                  forceOpen={buscando}
                />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------- Página ---------- */

export default function TalleresPage() {
  const [query, setQuery] = useState('');
  const [ejeActivo, setEjeActivo] = useState(null);
  const [abiertos, setAbiertos] = useState(() => new Set());

  const terms = useMemo(() => getTerms(query), [query]);
  const buscando = terms.length > 0;

  // Índice de búsqueda precalculado (una sola vez)
  const indice = useMemo(
    () =>
      TALLERES_EJES.map((eje) => ({
        eje,
        items: eje.talleres.map((taller) => ({
          taller,
          texto: fold(
            [taller.titulo, taller.descripcion, taller.grupo, taller.lugar, eje.titulo, eje.corto]
              .filter(Boolean)
              .join(' ')
          ),
        })),
      })),
    []
  );

  const resultados = useMemo(() => {
    return indice
      .filter(({ eje }) => ejeActivo === null || eje.id === ejeActivo)
      .map(({ eje, items }) => ({
        eje,
        talleres: items
          .filter(({ texto }) => terms.every((term) => texto.includes(term)))
          .map(({ taller }) => taller),
      }))
      .filter(({ talleres }) => talleres.length > 0);
  }, [indice, terms, ejeActivo]);

  const totalResultados = resultados.reduce((acc, r) => acc + r.talleres.length, 0);
  const filtrando = buscando || ejeActivo !== null;

  const toggleEje = (id) =>
    setAbiertos((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const expandirTodo = () => setAbiertos(new Set(TALLERES_EJES.map((e) => e.id)));
  const contraerTodo = () => setAbiertos(new Set());
  const limpiar = () => {
    setQuery('');
    setEjeActivo(null);
  };

  return (
    <div className="relative min-h-screen bg-[#FFF1E3] text-[#343230]">
      <Helmet>
        <title>Talleres</title>
      </Helmet>
      <CountdownBanner />
      <Navbar />
      <TitleSection title="Talleres" />
      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-[#343230]">Ejes temáticos y talleres</h2>
          <p className="mx-auto max-w-2xl text-gray-500">
            {TALLERES_EJES.length} ejes y {TOTAL_TALLERES} talleres. Buscá por tema, palabra clave o eje para
            encontrar rápido dónde participar.
          </p>
        </div>

        {/* ---------- Buscador y listado ---------- */}
        <section className="mx-auto mb-20 max-w-5xl" aria-label="Buscador de talleres">
          <div className="mb-4 rounded-3xl border-2 border-[#eadeed] bg-white/70 p-4 sm:p-5">
            <label htmlFor="buscador-talleres" className="sr-only">
              Buscar talleres
            </label>
            <div className="relative">
              <Search size={20} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#813893]" />
              <input
                id="buscador-talleres"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar talleres: aborto, cuidados, migrantes, ESI, cannabis…"
                autoComplete="off"
                className="w-full rounded-full border-2 border-[#eadeed] bg-white py-3 pl-12 pr-12 text-base text-[#343230] placeholder:text-gray-400 focus:border-[#813893] focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Borrar búsqueda"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-gray-500 hover:bg-[#f4ecf6] hover:text-[#662c74] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#813893]"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Filtro por eje */}
            <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filtrar por eje">
              <button
                type="button"
                onClick={() => setEjeActivo(null)}
                aria-pressed={ejeActivo === null}
                className={`rounded-full border-2 px-3 py-1 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#813893] ${
                  ejeActivo === null
                    ? 'border-[#813893] bg-[#813893] text-white'
                    : 'border-[#eadeed] bg-white text-[#662c74] hover:border-[#813893]'
                }`}
              >
                Todos
              </button>
              {TALLERES_EJES.map((eje) => (
                <button
                  key={eje.id}
                  type="button"
                  onClick={() => setEjeActivo(ejeActivo === eje.id ? null : eje.id)}
                  aria-pressed={ejeActivo === eje.id}
                  title={eje.titulo}
                  className={`rounded-full border-2 px-3 py-1 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#813893] ${
                    ejeActivo === eje.id
                      ? 'border-[#813893] bg-[#813893] text-white'
                      : 'border-[#eadeed] bg-white text-[#662c74] hover:border-[#813893]'
                  }`}
                >
                  {eje.id}. {eje.corto}
                </button>
              ))}
            </div>
          </div>

          {/* Barra de estado */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 px-1 text-sm">
            <p aria-live="polite" className="text-[#343230]/70">
              {filtrando
                ? `${totalResultados} ${totalResultados === 1 ? 'taller encontrado' : 'talleres encontrados'}`
                : `${TOTAL_TALLERES} talleres en ${TALLERES_EJES.length} ejes`}
            </p>
            <div className="flex items-center gap-4 font-semibold text-[#662c74]">
              {filtrando ? (
                <button type="button" onClick={limpiar} className="underline underline-offset-2 hover:text-[#813893]">
                  Limpiar filtros
                </button>
              ) : (
                <>
                  <button type="button" onClick={expandirTodo} className="underline underline-offset-2 hover:text-[#813893]">
                    Abrir todos los ejes
                  </button>
                  <button type="button" onClick={contraerTodo} className="underline underline-offset-2 hover:text-[#813893]">
                    Cerrar todos
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Resultados */}
          {resultados.length > 0 ? (
            <div className="space-y-4">
              {resultados.map(({ eje, talleres }) => (
                <EjeSection
                  key={eje.id}
                  eje={eje}
                  talleres={talleres}
                  terms={terms}
                  buscando={buscando}
                  open={filtrando || abiertos.has(eje.id)}
                  onToggle={() => !filtrando && toggleEje(eje.id)}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border-2 border-dashed border-[#eadeed] bg-white/60 px-6 py-12 text-center">
              <p className="mb-2 font-bold text-[#343230]">No encontramos talleres con esa búsqueda</p>
              <p className="mb-4 text-sm text-gray-500">Probá con otra palabra o revisá la ortografía.</p>
              <button
                type="button"
                onClick={limpiar}
                className="rounded-full bg-[#813893] px-5 py-2 text-sm font-bold text-white hover:bg-[#662c74] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#813893]"
              >
                Ver todos los talleres
              </button>
            </div>
          )}
        </section>

        {/* ¿Qué son y cómo funcionan? */}
        <section className="mb-16">
          <div className="grid items-start gap-10 lg:grid-cols-5">
            {/* Texto principal */}
            <div className="lg:col-span-3">
              <span className="mb-3 inline-block text-xs font-black uppercase tracking-[0.2em] text-[#813893]">
                ¿Qué son y cómo funcionan?
              </span>
              <div className="space-y-4 leading-relaxed text-[#343230]/80">
                <p>
                  Los talleres son espacios de diálogo y debate que funcionan durante el Encuentro, reuniendo a sus participantes alrededor de una temática. Son abiertos y horizontales, sin inscripción obligatoria.
                </p>
                <p>
                  Les llamamos talleres porque en los mismos compartimos saberes, opiniones, experiencias e ideas, buscando acuerdos que luego se reflejen en las conclusiones del Encuentro. Las mismas sirven de impulso para nuestro accionar político, nos organizan y nutren nuestras iniciativas y luchas a lo largo y ancho del país, al hacerse eco de una diversidad de posiciones.
                </p>
                <p>
                  Todos los años, la Comisión Organizadora publica una lista de talleres para el Encuentro, que abarcan distintos ejes fundamentales: violencias machistas, femicidios, travesticidios y transfemicidios, derechos sexuales y reproductivos, educación, salud, situación nacional, luchas internacionales, causas socioambientales, antirracistas y anticoloniales, deportes, arte, violencias hacia infancias y adolescencias, y muchos más.
                </p>
                <p>
                  Existe una subcomisión que trabaja previamente qué nuevos talleres se agregarán y cuáles se mantendrán de Encuentros anteriores, reafirmando que estos ejes reflejan el crecimiento de nuestros debates, y la construcción colectiva permanente del movimiento feminista y disidente, de activismos varios en nuestros territorios, y los aportes de mujeres, lesbianas, travestis, trans, bisexuales, intersex y no binaries que vienen apostando a amplificar y profundizar el Encuentro.
                </p>
              </div>
            </div>

            {/* Cards laterales */}
            <div className="space-y-4 lg:col-span-2">
              <div className="rounded-2xl border-2 border-[#eadeed] bg-[#faf7fb] p-5">
                <div className="mb-2 flex items-center gap-2 text-[#662c74]">
                  <Clock size={18} />
                  <h4 className="text-sm font-bold">¿Cuándo funcionan?</h4>
                </div>
                <p className="text-sm text-gray-500">
                  El sábado por la siesta/tarde, así como el domingo por la mañana y la tarde, antes de la marcha del Encuentro.
                </p>
              </div>

              <div className="rounded-2xl border-2 border-[#b8d5be] bg-[#f6faf7] p-5">
                <div className="mb-2 flex items-center gap-2 text-[#21662f]">
                  <Users size={18} />
                  <h4 className="text-sm font-bold">Horizontales y abiertos</h4>
                </div>
                <p className="text-sm text-gray-500">
                  No hace falta inscripción previa. Compañerxs se ofrecen voluntariamente a coordinar, anotando oradorxs en una lista y tomando nota de los acuerdos y diferencias.
                </p>
              </div>

              <div className="rounded-2xl border-2 border-[#fed886] bg-[#fffcf5] p-5">
                <div className="mb-2 flex items-center gap-2 text-[#916607]">
                  <MessageCircle size={18} />
                  <h4 className="text-sm font-bold">Importante: no son charlas</h4>
                </div>
                <p className="text-sm text-gray-500">
                  No son conversatorios ni charlas con expositorxs. Para que sean democráticos, plurales, diversos y horizontales, cada taller puede decidir cómo funcionar, siempre que se puedan elaborar ciertas conclusiones a compartir.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}