import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import { Calendar, MapPin, ChevronDown, Download, ExternalLink, Mail, Instagram, Facebook, Music, Utensils, Bus, Home, AlertCircle, X, ArrowRight, Users, Star, Menu, Phone, Search, Heart, Copy, Check, ShoppingBag } from 'lucide-react';
import { HiddenMail } from '@/components/HiddenMail';
import EJES from '@/data/ejes.js';
import FAQ from '@/data/faq.jsx';
import ACTIVIDADES_CULTURALES from '@/data/actividadesCulturales.js';
import CRONOGRAMA from '@/data/cronograma.js';
import CANCIONES from '@/data/canciones.js';


// ─── DATOS PLACEHOLDER ───────────────────────────────────────────────────────

const EVENTO = {
  nombre: '39° Encuentro Plurinacional de Mujeres, Lesbianas, Trans, Travestis, Bisexuales, Intersex y No Binaries',
  frase: 'Un espacio de encuentro, debate y construcción colectiva del movimiento feminista y plurinacional',
  fecha: '10, 11 y 12 de octubre de 2026',
  sede: 'Córdoba Capital',
  diasRestantes: Math.ceil((new Date('2026-10-11') - new Date()) / (1000 * 60 * 60 * 24))
};


const DATOS_DONACION = [{
  label: 'Alias',
  valor: 'ENCUENTRO.PLURI.CBA'
}, {
  label: 'CBU',
  valor: '0000000000000000000000'
}, {
  label: 'CVU',
  valor: '0000000000000000000000'
}, {
  label: 'Titular',
  valor: 'Nombre Apellido titular'
}];

// ─── COMPONENTES AUXILIARES ───────────────────────────────────────────────────

export function CountdownBanner() {
  const [dias, setDias] = useState(EVENTO.diasRestantes);
  useEffect(() => {
    const timer = setInterval(() => {
      setDias(Math.ceil((new Date('2026-10-11') - new Date()) / (1000 * 60 * 60 * 24)));
    }, 60000);
    return () => clearInterval(timer);
  }, []);
  return <motion.div initial={{
    y: -60
  }} animate={{
    y: 0
  }} className="fixed top-0 left-0 right-0 z-50 bg-[#813893] text-white text-center py-2 text-sm font-semibold tracking-wide">
    <span className="opacity-80">Faltan </span>
    <span className="text-[#fdb10c] text-lg font-black mx-1">{dias}</span>
    <span className="opacity-80"> días para el Encuentro!</span>
  </motion.div>;
}

// ─── HOOKS GLOBALES DE SCROLL ─────────────────────────────────────────────────

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return progress;
}
function useActiveSection(sectionIds) {
  const [active, setActive] = useState('');
  useEffect(() => {
    const observers = [];
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActive(id);
      }, {
        rootMargin: '-40% 0px -50% 0px'
      });
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, [sectionIds]);
  return active;
}
function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}

// ─── BARRA DE PROGRESO ────────────────────────────────────────────────────────

function ScrollProgressBar() {
  const progress = useScrollProgress();
  return <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent pointer-events-none">
    <motion.div className="h-full origin-left" style={{
      width: `${progress}%`,
      background: 'linear-gradient(90deg, #813893, #2a823c, #fdb10c)'
    }} transition={{
      ease: 'linear',
      duration: 0
    }} />
  </div>;
}

// ─── BOTÓN VOLVER ARRIBA ──────────────────────────────────────────────────────

function BackToTop() {
  const scrolled = useScrolled(400);
  return <AnimatePresence>
    {scrolled && <motion.button initial={{
      opacity: 0,
      y: 16
    }} animate={{
      opacity: 1,
      y: 0
    }} exit={{
      opacity: 0,
      y: 16
    }} onClick={() => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })} className="fixed bottom-24 left-6 z-50 bg-[#813893] text-white w-11 h-11 rounded-full shadow-lg flex items-center justify-center hover:bg-[#662c74] transition-colors" title="Volver arriba">
      <ChevronDown size={20} className="rotate-180" />
    </motion.button>}
  </AnimatePresence>;
}

// ─── ÍNDICE DE BÚSQUEDA GLOBAL ────────────────────────────────────────────────

const INDICE_BUSQUEDA = [
  // Ejes y talleres
  ...EJES.flatMap(eje => [{
    id: `eje-${eje.id}`,
    titulo: eje.titulo,
    subtitulo: 'Eje temático',
    tipo: 'Taller',
    href: '/#ejes',
    color: eje.color,
    emoji: '📋'
  }, ...eje.talleres.map((t, i) => ({
    id: `taller-${eje.id}-${i}`,
    titulo: t,
    subtitulo: eje.titulo,
    tipo: 'Taller',
    href: '/#ejes',
    color: eje.color,
    emoji: '✏️'
  }))]),
  // Actividades culturales
  ...ACTIVIDADES_CULTURALES.map(act => ({
    id: `cultural-${act.id}`,
    titulo: act.nombre,
    subtitulo: act.descripcion,
    tipo: act.tipo,
    href1: '/#cultural',
    color: '#fdb10c',
    emoji: act.emoji
  })),
  // Logística
  {
    id: 'log-aloj',
    titulo: 'Alojamiento',
    subtitulo: 'Lista de alojamientos amigables y contacto',
    tipo: 'Logística',
    href: '/#sede',
    color: '#813893',
    emoji: '🏠'
  }, {
    id: 'log-trans',
    titulo: 'Transporte',
    subtitulo: 'Cómo llegar, SUBE, transporte urbano',
    tipo: 'Logística',
    href: '/#sede',
    color: '#16a34a',
    emoji: '🚌'
  }, {
    id: 'log-aux',
    titulo: 'Primeros Auxilios',
    subtitulo: 'Puestos sanitarios y emergencias',
    tipo: 'Logística',
    href: '/#sede',
    color: '#dc2626',
    emoji: '🏥'
  }, {
    id: 'log-feria',
    titulo: 'Feria y Alimentación',
    subtitulo: 'Comida vegana, sin TACC, economía popular',
    tipo: 'Logística',
    href: '/#sede',
    color: '#fdb10c',
    emoji: '🛍️'
  }, {
    id: 'log-prov',
    titulo: 'Venir desde tu provincia',
    subtitulo: 'Colectivos desde distintos puntos del país',
    tipo: 'Logística',
    href: '/#sede',
    color: '#813893',
    emoji: '🚌'
  },
  // Cronograma
  ...Object.entries(CRONOGRAMA).flatMap(([dia, actividades]) => actividades.map((act, i) => ({
    id: `crono-${dia}-${i}`,
    titulo: act.actividad,
    subtitulo: `${dia} · ${act.hora}`,
    tipo: 'Cronograma',
    href: '/#cronograma',
    color: '#813893',
    emoji: '🕐'
  }))),
  // Prensa
  {
    id: 'prensa-kit',
    titulo: 'Kit de prensa',
    subtitulo: 'Logos, imágenes, materiales e instrucciones para medios / Información para la prensa y acreditación',
    tipo: 'Prensa',
    href: '/KitPrensa',
    color: '#813893',
    emoji: '📦'
  }, {
    id: 'prensa-gac',
    titulo: 'Gacetillas',
    subtitulo: 'Comunicados oficiales del Encuentro',
    tipo: 'Prensa',
    href: '/Gacetillas',
    color: '#2a823c',
    emoji: '📄'
  }, {
    id: 'prensa-art',
    titulo: 'Artículos periodísticos',
    subtitulo: 'Coberturas y notas de prensa',
    tipo: 'Prensa',
    href: '/Prensa',
    color: '#fdb10c',
    emoji: '📰'
  },
  // Preventa
  {
    id: 'preventa-merch',
    titulo: 'Preventa de remeras y tote bags',
    subtitulo: 'Cómo reservar tu remera o tote bag oficial del Encuentro',
    tipo: 'Preventa',
    href: '/Preventa',
    color: '#fdb10c',
    emoji: '🛍️'
  }];

// ─── BUSCADOR GLOBAL ──────────────────────────────────────────────────────────

function BuscadorGlobal({
  onClose
}) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
    const onKey = e => {
      if (e.key === 'x') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  const resultados = query.trim().length < 2 ? [] : INDICE_BUSQUEDA.filter(item => [item.titulo, item.subtitulo, item.tipo].join(' ').toLowerCase().includes(query.toLowerCase())).slice(0, 8);
  const tiposColor = {
    'Taller': 'bg-[#eadeed] text-[#662c74]',
    'Logística': 'bg-blue-100 text-blue-700',
    'Cronograma': 'bg-[#feecc2] text-[#6e4d05]',
    'Prensa': 'bg-[#dceade] text-[#21662f]',
    'Música': 'bg-[#feecc2] text-[#6e4d05]',
    'Cine': 'bg-[#eadeed] text-[#662c74]',
    'Arte': 'bg-red-100 text-red-700',
    'Feria': 'bg-[#feecc2] text-[#6e4d05]',
    'Teatro': 'bg-indigo-100 text-indigo-700',
    'Preventa': 'bg-[#feecc2] text-[#6e4d05]'
  };
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 px-4" onClick={onClose}>
    <motion.div initial={{
      opacity: 0,
      y: -20,
      scale: 0.97
    }} animate={{
      opacity: 1,
      y: 0,
      scale: 1
    }} exit={{
      opacity: 0,
      y: -20,
      scale: 0.97
    }} transition={{
      duration: 0.2
    }} className="bg-[#FFF1E3] rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden" onClick={e => e.stopPropagation()}>
      {/* Input */}
      <div className="flex items-center gap-3 px-4 py-4 border-b border-[#eadeed]">
        <Search size={20} className="text-[#ab7ab7] shrink-0" />
        <input ref={inputRef} type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscá talleres, actividades, logística..." className="flex-1 text-[#343230] text-base outline-none placeholder-gray-400 bg-transparent" style={{ fontFamily: "'degular', sans-serif" }} />
        {query && <button onClick={() => setQuery('')} className="text-gray-400 hover:text-gray-600">
          <X size={18} />
        </button>}
        <button onClick={onClose} className="text-xs text-gray-400 border border-gray-200 rounded px-2 py-0.5 hover:text-gray-600 ml-1">
          Esc
        </button>
      </div>

      {/* Resultados */}
      <div className="max-h-[60vh] overflow-y-auto">
        {query.trim().length < 2 ? <div className="px-4 py-8 text-center text-gray-400 text-sm">
          <Search size={32} className="mx-auto mb-3 opacity-30" />
          Escribí al menos 2 letras para buscar
        </div> : resultados.length === 0 ? <div className="px-4 py-8 text-center text-gray-400 text-sm">
          <span className="text-2xl block mb-2">🔍</span>
          Sin resultados para <strong className="text-gray-600">"{query}"</strong>
        </div> : <ul className="py-2">
          {resultados.map((item, i) => <motion.li key={item.id} initial={{
            opacity: 0,
            x: -8
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: i * 0.04
          }}>
            <a href={item.href} onClick={onClose} className="flex items-center gap-4 px-4 py-3 hover:bg-[#faf7fb] transition-colors group">
              <span className="text-2xl w-8 text-center shrink-0">{item.emoji}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#343230] truncate group-hover:text-[#662c74] transition-colors">
                  {item.titulo}
                </p>
                <p className="text-xs text-gray-400 truncate mt-0.5">{item.subtitulo}</p>
              </div>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 ${tiposColor[item.tipo] || 'bg-gray-100 text-gray-500'}`}>
                {item.tipo}
              </span>
            </a>
          </motion.li>)}
        </ul>}
      </div>

      {/* Footer del buscador */}
      {resultados.length > 0 && <div className="px-4 py-2 border-t border-[#eadeed] text-xs text-gray-400 flex justify-between">
        <span>{resultados.length} resultado{resultados.length !== 1 ? 's' : ''}</span>
        <span>↵ para ir a la sección</span>
      </div>}
    </motion.div>
  </motion.div>;
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [buscadorAbierto, setBuscadorAbierto] = useState(false);
  const scrolled = useScrolled(80);
  const sectionIds = ['encuentro', 'ejes', 'cronograma', 'cultural', 'sede', 'prensa'];
  const activeSection = useActiveSection(sectionIds);

  // Atajo de teclado Ctrl+K / Cmd+K
  useEffect(() => {
    const onKey = e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setBuscadorAbierto(v => !v);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const links = [
  {
    href: '/#',
    id: 'inicio',
    label: 'Inicio'
  },{
    href: '/#encuentro',
    id: 'encuentro',
    label: '¿Qué es?'
  }, {
    href: '/#ejes',
    id: 'ejes',
    label: 'Talleres'
  }, {
    href: '/#cronograma',
    id: 'cronograma',
    label: 'Cronograma'
  }, {
  //   href: '/#cultural',
  //   id: 'cultural',
  //   label: 'Cultural'
  // }, {
    href: '/#sede',
    id: 'sede',
    label: 'Sede'
  }, {
    href: '/#prensa',
    id: 'prensa',
    label: 'Prensa'
  }];
  return <>
    <AnimatePresence>
      {buscadorAbierto && <BuscadorGlobal onClose={() => setBuscadorAbierto(false)} />}
    </AnimatePresence>

    <motion.nav animate={{
      top: scrolled ? -16 : 44,
      backgroundColor: scrolled ? 'rgba(255,241,227,0.97)' : 'rgba(255,241,227,0.92)',
      boxShadow: scrolled ? '0 2px 16px rgba(129,56,147,0.10)' : '0 1px 0 rgba(129,56,147,0.07)'
    }} transition={{
      duration: 0.25,
      ease: 'easeInOut'
    }} className="fixed left-0 right-0 z-40 backdrop-blur border-b border-[#eadeed]">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between transition-all duration-300" style={{
        height: scrolled ? '52px' : '56px'
      }}>
        {/* Links centrados — desktop */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-1">
          {links.map(l => {
            const isActive = activeSection === l.id;
            return <a key={l.href} href={l.href} className="relative text-sm font-medium px-3 py-1.5 rounded-full transition-colors duration-200" style={{
              color: isActive ? '#813893' : '#4b5563',
              fontFamily: "'degular', sans-serif"
            }}>
              {isActive && <motion.span layoutId="nav-pill" className="absolute inset-0 bg-[#eadeed] rounded-full" transition={{
                type: 'spring',
                stiffness: 400,
                damping: 30
              }} />}
              <span className="relative z-10">{l.label}</span>
            </a>;
          })}
        </div>

        {/* Derecha: lupa + inscribirse — desktop */}
        <div className="hidden md:flex items-center gap-2">
          <button onClick={() => setBuscadorAbierto(true)} className="flex items-center gap-2 text-sm text-gray-400 border border-gray-200 rounded-full px-3 py-1.5 hover:border-[#c09cc9] hover:text-[#813893] transition-colors bg-gray-50" title="Buscar (Ctrl+K)">
            <Search size={14} />
            <span className="text-xs">Buscar</span>
            <span className="text-xs bg-gray-200 text-gray-500 rounded px-1.5 py-0.5 ml-1 font-mono">⌘K</span>
          </button>
          <a href="/#inscripcion" className="bg-[#2a823c] text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-[#21662f] transition-colors flex items-center" style={{ fontFamily: "'degular', sans-serif" }}>
            Inscribite acá
          </a>
        </div>

        {/* Mobile: lupa + hamburguesa */}
        <div className="md:hidden flex items-center gap-2 w-full justify-between">
          <button onClick={() => setBuscadorAbierto(true)} className="text-[#813893]">
            <Search size={20} />
          </button>
          <button onClick={() => setOpen(!open)}>
            <Menu size={24} className="text-[#813893]" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && <motion.div initial={{
          height: 0,
          opacity: 0
        }} animate={{
          height: 'auto',
          opacity: 1
        }} exit={{
          height: 0,
          opacity: 0
        }} className="md:hidden bg-[#FFF1E3] border-t border-[#eadeed] px-4 pb-4 overflow-hidden">
          {links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className={`block py-2 text-sm font-medium transition-colors ${activeSection === l.id ? 'text-[#813893] font-bold' : 'text-gray-700 hover:text-[#813893]'}`} style={{ fontFamily: "'degular', sans-serif" }}>
            {activeSection === l.id && <span className="mr-2 text-[#813893]">›</span>}
            {l.label}
          </a>)}
          <a href="/#inscripcion" onClick={() => setOpen(false)} className="block mt-2 bg-[#2a823c] text-white text-sm font-bold px-4 py-2 rounded-full text-center">
            Inscribirse
          </a>
        </motion.div>}
      </AnimatePresence>
    </motion.nav>
  </>;
}

// ─── SECCIONES ────────────────────────────────────────────────────────────────

function HeroLottie({ className = '' }) {
  return <div className={className}>
    <Lottie path="/lottie/Logo.json" loop={true} autoplay style={{ width: '100%', height: '100%' }} />
  </div>;
}

function HeroSection() {
  return <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 relative overflow-hidden">
    {/* Fondo decorativo */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#813893]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#2a823c]/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#fdb10c]/10 rounded-full blur-3xl" />
    </div>

    <motion.div initial={{
      opacity: 0,
      y: 40
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8
    }} className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">

      {/* Bloque: Lottie + Título/Subtítulo — todo centrado (logo y título alineados entre sí) */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 w-full">
        {/* Animación Lottie: centrada */}
        <div className="order-1 flex items-center justify-center shrink-0">
          <HeroLottie className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-full lg:scale-110" />
        </div>

        {/* Título (3 líneas) + subtítulo, centrados igual que el logo */}
        <div className="order-2 flex-1 text-center">
          <h1 className="font-display text-white font-black mb-6 flex flex-col items-center leading-[1.05]"
            style={{ "marginLeft":"auto","marginRight":"auto","width":"60vw","maxWidth":"580px", "lineHeight":"0.8", "fontFamily": "'thunderhouse-pro'", "fontWeight": 500}}
          >
            {/* Tamaños calculados en proporción a la cantidad de caracteres de cada línea,
                para que las tres se perciban con un ancho visual similar. Son aproximados:
                ajustalos a ojo si con la tipografía real (Thunderhouse) no cierran perfecto. */}
            <span style={{
              "fontSize":"clamp(1.6rem, 7vw, 4.6rem)","width":"100%","textAlign":"justify","textAlignLast":"justify"
            }}>39 ENCUENTRO PLURINACIONAL</span>
            <span className="text-[#fec449]" style={{
              "fontSize":"clamp(1.05rem, 3.6vw, 2.6rem)","textAlign":"justify","textAlignLast":"justify","width":"100%"
            }}>DE MUJERES, LESBIANAS, TRAVESTIS, TRANS,</span>
            <span className="text-[#94c09e]" style={{
              "fontSize":"clamp(1.1rem, 3.7vw, 3.1rem)","textAlign":"justify","textAlignLast":"justify","width":"100%"
            }}>BISEXUALES, INTERSEXUALES Y NO BINARIES</span>
          </h1>

          <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'degular', sans-serif" }}>
            {EVENTO.frase}
          </p>
        </div>
      </div>

      {/* Fecha/Sede y botones: centrados respecto del bloque Lottie + título de arriba */}
      <div className="w-full flex flex-col items-center mt-10">
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-white/80">
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
            <Calendar size={16} className="text-[#fec449]" />
            <a href="/#cronograma" className="font-semibold text-sm">{EVENTO.fecha}</a>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
            <MapPin size={16} className="text-[#94c09e]" />
            <a href="/#sede" className="font-semibold text-sm">{EVENTO.sede}</a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/#cronograma" className="bg-[#FFF1E3] text-[#4a2055] font-bold px-8 py-4 rounded-full hover:bg-[#fec449] transition-colors flex items-center justify-center gap-2 shadow-lg">
            <Calendar size={18} />
            Ver programa completo
          </a>
          <a href="/#inscripcion" id="inscripcion" className="bg-[#2a823c] text-white font-bold px-8 py-4 rounded-full hover:bg-[#21662f] transition-colors flex items-center justify-center gap-2 shadow-lg">
            <Users size={18} />
            Inscripción
          </a>
        </div>
      </div>
    </motion.div>
  </section>;
}

// ─── BANNER DE DONACIONES ──────────────────────────────────────────────────────

function CampoDonacion({
  label,
  valor
}) {
  const [copiado, setCopiado] = useState(false);
  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(valor);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 1800);
    } catch (e) {
      // Si el navegador bloquea el clipboard, no rompemos nada
    }
  };
  return <div className="flex items-center justify-between gap-3 bg-[#faf7fb] rounded-xl px-4 py-3 border border-[#eadeed]">
    <div className="min-w-0">
      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{label}</p>
      <p className="text-sm font-semibold text-[#343230] truncate">{valor}</p>
    </div>
    <button onClick={copiar} className="shrink-0 flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-full transition-colors" style={{
      backgroundColor: copiado ? '#dceade' : '#eadeed',
      color: copiado ? '#21662f' : '#662c74'
    }}>
      {copiado ? <Check size={14} /> : <Copy size={14} />}
      {copiado ? 'Copiado' : 'Copiar'}
    </button>
  </div>;
}

function DonacionesModal({
  onClose
}) {
  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm flex items-center justify-center px-4" onClick={onClose}>
    <motion.div initial={{
      opacity: 0,
      y: 16,
      scale: 0.97
    }} animate={{
      opacity: 1,
      y: 0,
      scale: 1
    }} exit={{
      opacity: 0,
      y: 16,
      scale: 0.97
    }} transition={{
      duration: 0.2
    }} className="bg-[#FFF1E3] rounded-2xl shadow-2xl w-full max-w-md overflow-hidden" onClick={e => e.stopPropagation()}>
      <div className="flex items-center justify-between px-6 py-5 border-b border-[#eadeed]">
        <div className="flex items-center gap-3">
          <div className="bg-[#fdb10c] text-[#4a2055] w-10 h-10 rounded-full flex items-center justify-center shrink-0">
            <Heart size={18} fill="currentColor" />
          </div>
          <h3 className="font-bold text-[#343230] text-lg m-0">Aportá al Encuentro</h3>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 shrink-0">
          <X size={20} />
        </button>
      </div>

      <div className="p-6">
        <p className="text-sm text-gray-500 mb-5">
          Transferí desde tu cuenta bancaria o billetera virtual a cualquiera de estos datos. ¡Gracias por tu aporte!
        </p>
        <div className="space-y-3">
          {DATOS_DONACION.map(campo => <CampoDonacion key={campo.label} label={campo.label} valor={campo.valor} />)}
        </div>
      </div>
    </motion.div>
  </motion.div>;
}

// ─── SECCIÓN DE APOYO (DONACIONES + PREVENTA) ─────────────────────────────────

function ApoyoSection() {
  const [modalAbierto, setModalAbierto] = useState(false);
  return <section className="py-20 px-4 relative overflow-hidden">
    {/* Fondo decorativo */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#fdb10c]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-16 w-96 h-96 bg-[#fdb10c]/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#813893]/10 rounded-full blur-3xl" />
    </div>

    <div className="max-w-5xl mx-auto relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-white mb-3">Sumate a sostener el Encuentro</h2>
        <p className="text-white/60 max-w-xl mx-auto">
          Dos formas de aportar a la organización colectiva, sin sponsors ni financiamiento estatal.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Card de donaciones */}
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} whileHover={{
          y: -4
        }} className="relative overflow-hidden rounded-3xl p-8 border-2 border-[#fdb10c]/30 bg-gradient-to-br from-[#fdb10c]/10 to-[#2f1435]/40 flex flex-col">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#fdb10c]/10 rounded-full blur-2xl" />
          <span className="absolute top-5 right-5 bg-[#fdb10c] text-[#4a2055] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
            Solidario
          </span>
          <div className="bg-[#fdb10c] text-[#4a2055] w-14 h-14 rounded-full flex items-center justify-center mb-5 relative z-10">
            <Heart size={26} fill="currentColor" />
          </div>
          <h4 className="font-bold text-white text-xl mb-2 relative z-10">
            El Encuentro se sostiene entre todes
          </h4>
          <p className="text-sm text-white/70 mb-6 flex-1 relative z-10">
            Tu aporte ayuda a cubrir sede, materiales y logística.
          </p>
          <button onClick={() => setModalAbierto(true)} className="relative z-10 bg-[#813893] text-white font-bold px-6 py-3 rounded-full hover:bg-[#9659a5] transition-colors self-start">
            Quiero aportar
          </button>
        </motion.div>

        {/* Card de preventa */}
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }} whileHover={{
          y: -4
        }} className="relative overflow-hidden rounded-3xl p-8 border-2 border-[#2a823c]/30 bg-gradient-to-br from-[#2a823c]/10 to-[#2f1435]/40 flex flex-col">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#2a823c]/10 rounded-full blur-2xl" />
          <span className="absolute top-5 right-5 bg-[#2a823c] text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
            Edición limitada
          </span>
          <div className="bg-[#2a823c] text-white w-14 h-14 rounded-full flex items-center justify-center mb-5 relative z-10">
            <ShoppingBag size={26} />
          </div>
          <h4 className="font-bold text-white text-xl mb-2 relative z-10">
            Preventa: remeras y tote bags
          </h4>
          <p className="text-sm text-white/70 mb-6 flex-1 relative z-10">
            Reservá tu remera o tote bag oficial del 39° Encuentro.
          </p>
          <Link to="/Preventa" className="relative z-10 bg-[#21662f] text-white font-bold px-6 py-3 rounded-full hover:bg-[#184b22] transition-colors self-start inline-flex items-center gap-2">
            Ver preventa <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </div>

    <AnimatePresence>
      {modalAbierto && <DonacionesModal onClose={() => setModalAbierto(false)} />}
    </AnimatePresence>
  </section>;
}

function EncuentroSection() {
  const timelineRef = useRef(null);
  const [mostrarFlecha, setMostrarFlecha] = useState(true);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    const chequearScroll = () => {
      const cercaDelFinal = el.scrollWidth - el.clientWidth - el.scrollLeft < 24;
      setMostrarFlecha(!cercaDelFinal);
    };
    chequearScroll();
    el.addEventListener('scroll', chequearScroll, { passive: true });
    window.addEventListener('resize', chequearScroll);
    return () => {
      el.removeEventListener('scroll', chequearScroll);
      window.removeEventListener('resize', chequearScroll);
    };
  }, []);

  return <section id="encuentro" className="py-24 px-4 bg-[#FFF1E3]">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
          <h2 className="text-[#4a2055] mb-6">¿Qué es el Encuentro?</h2>
          <p className="text-[#343230]/80 text-lg leading-relaxed mb-6">
            El Encuentro es un espacio en el que se tejen redes colectivas de solidaridad, reparación y organización, y en el que se gestan herramientas de lucha diversas, entre ellas campañas locales, plurinacionales y regionales, proyectos de ley históricos e iniciativas activistas que buscan transformar cada ámbito de nuestras vidas. <br />
            Cada año, cientos de miles de mujeres, lesbianas, travestis, trans, bisexuales, intersex y no binaries viajan de todos los rincones del país para debatir sobre las distintas violencias patriarcales que nos atraviesan y pensar soluciones posibles y alternativas de futuro. En 40 años de encuentros militantes y masivos, fuimos construyendo miradas e intervenciones políticas y culturales que se nutren en nuestras diferencias y se potencian en nuestra unidad. <br />
            Sabemos que sobre nosotras y nosotres recaen las tareas de cuidado y los empleos peores pagos o en condiciones de informalidad absoluta, agudizando la sobrecarga laboral y la precarización de nuestras vidas golpeadas especialmente por la pobreza y la crisis actual. Los recortes del gobierno nacional a los programas de prevención, sanción y erradicación de la violencia de género así como los discursos de odio agravan este contexto de cada vez mayor ataques a mujeres y disidencias. <br />
            Nos necesitamos pensando esas herramientas de resistencia y todas las acciones colectivas que deseamos para vidas verdaderamente libres, sin violencias ni opresiones.</p>
          <p className="text-[#343230]/80 mb-8">
            ¡Les esperamos el 10, 11 y 12 de Octubre en Córdoba para construir juntas y juntes!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/Semblanza" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#662c74] font-bold border-2 border-[#d5bddb] px-5 py-3 rounded-full hover:bg-[#faf7fb] transition-colors">
              <ExternalLink size={16} />
              Leer la semblanza
            </a>
            <Link
              to="/Pilares"
              className="flex items-center gap-2 text-[#21662f] font-bold border-2 border-[#b8d5be] px-5 py-3 rounded-full hover:bg-[#f6faf7] transition-colors"
            >
              <ExternalLink size={16} />
              Pilares del Encuentro
            </Link>
          </div>
        </motion.div>

        <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="grid grid-cols-2 gap-4">
          {[{
            num: '39°',
            label: 'Edición del Encuentro',
            color: 'bg-[#813893]'
          }, {
            num: '+100k',
            label: 'Participantes esperadxs',
            color: 'bg-[#2a823c]'
          }, {
            num: '3',
            label: 'Días de construcción colectiva',
            color: 'bg-[#b57f09]'
          }, {
            num: '100+',
            label: 'Talleres y comisiones',
            color: 'bg-[#4a2055]'
          }].map((stat, i) => <div key={i} className={`${stat.color} text-white rounded-2xl p-6 flex flex-col justify-between`}>
            <span className="text-4xl font-black">{stat.num}</span>
            <span className="text-sm font-medium opacity-80 mt-2">{stat.label}</span>
          </div>)}
        </motion.div>
      </div>

      {/* Línea del tiempo placeholder */}
      <div id="linea-tiempo" className="mt-20">
        <h3 className="text-center text-[#4a2055] mb-10">Hitos del Encuentro</h3>
        <div className="relative">
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-[#eadeed]" />
          <div ref={timelineRef} className="flex overflow-x-auto gap-8 pb-4 scroll-smooth">
            {[{
              año: '1986',
              hito: 'Primer Encuentro Nacional de Mujeres, Buenos Aires'
            }, {
              año: '1987',
              hito: 'Segunda edición, primer encuentro en Córdoba'
            }, {
              año: '2003',
              hito: 'Primera marcha de cierre'
            }, {
              año: '2007',
              hito: 'Edición 22, segundo encuentro en Córdoba'
            }, {
              año: '2015',
              hito: 'Primer Ni Una Menos'
            }, {
              año: '2019',
              hito: 'Se incorporan identidades trans y travestis al nombre'
            }, {
              año: '2020',
              hito: 'Aborto Legal, Seguro y Gratuito'
            }, {
              año: '2021',
              hito: 'Primer Encuentro Plurinacional, San Luis'
            }, {
              año: '2026',
              hito: '39° Encuentro, Córdoba Capital',
              highlight: true
            }].map((item, i) => <div key={i} className="flex flex-col items-center min-w-[160px]">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 mb-3 ${item.highlight ? 'bg-[#fdb10c] border-4 border-[#fec449]/50' : 'bg-[#d5bddb] border-4 border-[#FFF1E3]'}`}>
                <span className="text-xs font-black text-[#4a2055]">{item.año.slice(2)}</span>
              </div>
              <span className={`text-xs font-bold ${item.highlight ? 'text-[#662c74]' : 'text-gray-500'} text-center leading-tight`}>{item.año}</span>
              <p className="text-xs text-gray-500 text-center mt-1">{item.hito}</p>
            </div>)}
          </div>

          {/* Indicador de scroll: degradé + flecha que "respira" hacia la derecha */}
          <AnimatePresence>
            {mostrarFlecha && <>
              <motion.div
                key="fade-timeline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-0 right-0 bottom-4 w-16 bg-gradient-to-l from-[#FFF1E3] to-transparent pointer-events-none"
              />
              <motion.div
                key="flecha-timeline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: [0, 6, 0] }}
                exit={{ opacity: 0 }}
                transition={{ x: { duration: 1.3, repeat: Infinity, ease: 'easeInOut' }, opacity: { duration: 0.3 } }}
                className="absolute top-1 right-0 bg-[#fdb10c] text-[#4a2055] w-8 h-8 rounded-full flex items-center justify-center shadow-md pointer-events-none"
              >
                <ArrowRight size={16} />
              </motion.div>
            </>}
          </AnimatePresence>
        </div>
      </div>
    </div>
  </section>;
}
function EjesSection() {
  const [ejeAbierto, setEjeAbierto] = useState(null);
  return <section id="ejes" className="py-24 px-4 bg-[#faf7fb]">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-[#343230] mb-4">Ejes temáticos y talleres</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Los talleres son el corazón del Encuentro. Son espacios horizontales de debate donde se construyen los documentos colectivos. Hacé clic en cada eje para ver los talleres.
        </p>
        <a href="/Talleres" className="inline-flex items-center gap-1 text-[#21662f] font-bold mt-4 hover:underline">
          Pronto subiremos el listado completo <ArrowRight size={14} />
        </a>
      </div>

      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {EJES.map(eje => <motion.div key={eje.id} layout onClick={() => setEjeAbierto(ejeAbierto === eje.id ? null : eje.id)} className="bg-[#FFF1E3] rounded-2xl p-6 cursor-pointer border-2 transition-all hover:shadow-md" style={{
          borderColor: ejeAbierto === eje.id ? eje.color : 'transparent'
        }} whileHover={{
          y: -2
        }}>
          <div className="flex justify-between items-start mb-3">
            <div className="w-3 h-3 rounded-full mt-1" style={{
              backgroundColor: eje.color
            }} />
            <ChevronDown size={16} className="text-gray-400 transition-transform" style={{
              transform: ejeAbierto === eje.id ? 'rotate(180deg)' : 'rotate(0deg)'
            }} />
          </div>
          <h4 className="font-bold text-[#343230] leading-snug mb-3" style={{
            color: ejeAbierto === eje.id ? eje.color : undefined
          }}>
            {eje.titulo}
          </h4>
          <AnimatePresence>
            {ejeAbierto === eje.id && <motion.ul initial={{
              height: 0,
              opacity: 0
            }} animate={{
              height: 'auto',
              opacity: 1
            }} exit={{
              height: 0,
              opacity: 0
            }} className="overflow-hidden">
              {eje.talleres.map((t, i) => <li key={i} className="text-sm text-gray-500 py-1 border-t border-gray-100 first:border-0">
                {t}
              </li>)}
            </motion.ul>}
          </AnimatePresence>
        </motion.div>)}
      </div> */}

      {/* Mapa placeholder */}
      <div className="bg-[#FFF1E3] rounded-3xl border-2 border-dashed border-gray-200 h-72 flex flex-col items-center justify-center text-gray-400">
        <MapPin size={40} className="mb-3 opacity-40" />
        <p className="font-semibold">Mapa de ubicaciones de talleres</p>
        <p className="text-sm mt-1">Se cargará cuando se confirmen las sedes</p>
      </div>
    </div>
  </section>;
}
function CronogramaSection() {
  const dias = Object.keys(CRONOGRAMA);
  const [diaActivo, setDiaActivo] = useState(dias[0]);
  return <section id="cronograma" className="py-24 px-4 bg-[#2f1435] text-white">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-white mb-4">Cronograma</h2>
        <p className="text-white/60">Quedá atentx para ver las actividades que iremos sumando</p>
      </div>

      {/* Tabs de días - mobile */}
      <div className="flex justify-center gap-3 mb-8 md:hidden">
        {dias.map(dia => <button key={dia} onClick={() => setDiaActivo(dia)} className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${diaActivo === dia ? 'bg-[#fdb10c] text-[#2f1435]' : 'bg-white/10 text-white/60'}`}>
          {dia.split(' ')[1]}
        </button>)}
      </div>

      {/* Grid 3 columnas - desktop */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {dias.map(dia => <div key={dia} className="bg-white/5 rounded-2xl overflow-hidden border border-white/10">
          <div className="bg-[#fdb10c] text-[#2f1435] px-5 py-3">
            <h3 className="text-lg font-black m-0">{dia}</h3>
          </div>
          <div className="p-4">
            {CRONOGRAMA[dia].map((item, i) => <div key={i} className="flex gap-4 py-3 border-b border-white/10 last:border-0">
              <span className="text-[#fdb10c] text-sm font-mono font-bold w-12 shrink-0">{item.hora}</span>
              <span className="text-white/80 text-sm">{item.actividad}</span>
            </div>)}
          </div>
        </div>)}
      </div>

      {/* Vista mobile - columna activa */}
      <div className="md:hidden bg-white/5 rounded-2xl overflow-hidden border border-white/10">
        <div className="bg-[#fdb10c] text-[#2f1435] px-5 py-3">
          <h3 className="text-lg font-black m-0">{diaActivo}</h3>
        </div>
        <div className="p-4">
          {CRONOGRAMA[diaActivo].map((item, i) => <div key={i} className="flex gap-4 py-3 border-b border-white/10 last:border-0">
            <span className="text-[#fdb10c] text-sm font-mono font-bold w-12 shrink-0">{item.hora}</span>
            <span className="text-white/80 text-sm">{item.actividad}</span>
          </div>)}
        </div>
      </div>
    </div>
  </section>;
}
function CancioneroSection() {
  const [cancionAbierta, setCancionAbierta] = useState(null);
  return <section id="cancionero" className="py-24 px-4 bg-[#faf7fb]">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-[#343230] mb-4">Cancionero</h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-6">
          Canciones sugeridas para este 39 encuentro en Córdoba
        </p>

        <Link
          to="/cancionero"
          className="inline-flex items-center gap-2 bg-[#fdb10c] text-[#4a2055] font-bold px-6 py-3 rounded-full hover:bg-[#fec449] transition-colors"
        >
          Ver el cancionero sugerido
        </Link>
      </div>

      <div className="space-y-4">
        {CANCIONES.map((cancion, i) => <motion.div key={cancion.id} initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: i * 0.05
        }} className="bg-[#FFF1E3] rounded-2xl border-2 border-gray-200 overflow-hidden">
          <button onClick={() => setCancionAbierta(cancionAbierta === cancion.id ? null : cancion.id)} className="w-full text-left p-6 flex justify-between items-start gap-4 hover:bg-[#faf7fb] transition-colors">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-[#343230] mb-1">{cancion.titulo}</h3>
              <p className="text-sm text-gray-500 italic">{cancion.artista}</p>
            </div>
            <ChevronDown size={20} className="text-[#fdb10c] shrink-0 transition-transform" style={{
              transform: cancionAbierta === cancion.id ? 'rotate(180deg)' : 'rotate(0deg)'
            }} />
          </button>

          <AnimatePresence>
            {cancionAbierta === cancion.id && <motion.div initial={{
              height: 0,
              opacity: 0
            }} animate={{
              height: 'auto',
              opacity: 1
            }} exit={{
              height: 0,
              opacity: 0
            }} className="overflow-hidden border-t border-gray-200">
              <div className="p-6 bg-[#faf7fb]">
                <pre className="text-sm text-[#343230]/90 leading-relaxed font-sans whitespace-pre-wrap break-words">
                  {cancion.letra}
                </pre>
              </div>
            </motion.div>}
          </AnimatePresence>
        </motion.div>)}
      </div>

      <div className="mt-12 bg-[#FFF1E3] rounded-2xl border-2 border-[#fec449]/60 p-8 text-center">
        <Music size={32} className="mx-auto mb-4 text-[#fdb10c]" />
        <h3 className="text-[#343230] font-bold mb-2">¿Tenés una canción para agregar?</h3>
        <p className="text-gray-600 text-sm mb-4">
          Enviala a <strong><HiddenMail text1="39encuentropluri.cba" text2="proton.me" /></strong>
        </p>
      </div>
    </div>
  </section>;
}
function CulturalSection() {
  return <section id="cultural" className="py-24 px-4 bg-[#FFF1E3]">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-[#343230] mb-4">Grilla Cultural</h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-4">
          Arte, música, teatro y más. El Encuentro también es fiesta y celebración colectiva.
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSewjHAlFM65SW-sI0f7gpFlPjYy1lhTGwv30DsRcZcTVCuAeA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#fdb10c] text-[#4a2055] font-bold px-6 py-3 rounded-full hover:bg-[#fec449] transition-colors"
        >
          <ExternalLink size={16} />
          Inscribir una actividad cultural
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {ACTIVIDADES_CULTURALES.map((act, i) => <motion.div key={act.id} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: i * 0.08
        }} className="bg-[#faf7fb] rounded-2xl overflow-hidden border border-[#eadeed] hover:shadow-lg transition-shadow cursor-pointer group">
          <div className="h-36 bg-gradient-to-br from-[#feecc2] to-[#eadeed] flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
            {act.emoji}
          </div>
          <div className="p-5">
            <span className="text-xs font-bold text-[#b57f09] uppercase tracking-wider">{act.tipo}</span>
            <h4 className="font-bold text-[#343230] mt-1 mb-2">{act.nombre}</h4>
            <p className="text-sm text-gray-500">{act.descripcion}</p>
            <a href="#" className="inline-flex items-center gap-1 text-[#b57f09] text-sm font-bold mt-3 hover:underline">
              Ver más <ArrowRight size={12} />
            </a>
          </div>
        </motion.div>)}
      </div>
    </div>
  </section>;
}
function SedeSection() {
  const cards = [{
    icono: <Home size={24} />,
    titulo: 'Alojamiento',
    desc: 'Lista de alojamientos amigables y contacto de la comisión.',
    color: 'bg-[#faf7fb] border-[#d5bddb]',
    iconColor: 'text-[#662c74]',
    link: '#',
    linkText: 'Ver alojamientos'
  }, {
    icono: <Bus size={24} />,
    titulo: 'Transporte',
    desc: 'Info de transporte urbano, SUBE, y cómo llegar al Encuentro.',
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
    link: '#',
    linkText: 'Ver opciones'
  }, {
    icono: <AlertCircle size={24} />,
    titulo: 'Primeros Auxilios',
    desc: 'Puestos sanitarios y datos de emergencia durante el Encuentro.',
    color: 'bg-red-50 border-red-200',
    iconColor: 'text-red-600',
    link: '#',
    linkText: 'Ver información'
  }, {
    icono: <Utensils size={24} />,
    titulo: 'Feria y Alimentación',
    desc: 'Espacios de feria, comida vegana, sin TACC y economía popular.',
    color: 'bg-[#fffcf5] border-[#fed886]',
    iconColor: 'text-[#916607]',
    link: '#',
    linkText: 'Ver espacios'
  }];
  return <section id="sede" className="py-24 px-4 bg-[#faf7fb]">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-[#343230] mb-4">Sede y Logística</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Todo lo que necesitás saber para llegar, quedarte y moverte durante el Encuentro.
        </p>
      </div>

      {/* Mapa placeholder */}
      <div className="bg-[#FFF1E3] rounded-3xl border-2 border-dashed border-gray-200 h-72 flex flex-col items-center justify-center text-gray-400 mb-10">
        <MapPin size={40} className="mb-3 opacity-40" />
        <p className="font-semibold">Mapa central de la sede</p>
        <p className="text-sm mt-1">Córdoba Capital · Mapa interactivo próximamente</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {cards.map((card, i) => <motion.div key={i} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: i * 0.1
        }} className={`${card.color} border-2 rounded-2xl p-6 flex flex-col`}>
          <div className={`${card.iconColor} mb-4`}>{card.icono}</div>
          <h4 className="font-bold text-[#343230] mb-2">{card.titulo}</h4>
          <p className="text-sm text-gray-500 flex-1">{card.desc}</p>
          <a href={card.link} className={`inline-flex items-center gap-1 ${card.iconColor} text-sm font-bold mt-4 hover:underline`}>
            {card.linkText} <ArrowRight size={12} />
          </a>
        </motion.div>)}
      </div>

      {/* Card opcional: venir desde tu provincia */}
      <div className="bg-[#2f1435] text-white rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6">
        <div className="text-5xl">🚌</div>
        <div className="flex-1">
          <h3 className="text-white mb-2">¿Venís desde otra provincia?</h3>
          <p className="text-white/70">Contactos de organizaciones que ofrecen colectivos desde distintos puntos del país para venir al Encuentro.</p>
        </div>
        <a href="#" className="bg-[#fdb10c] text-[#4a2055] font-bold px-6 py-3 rounded-full hover:bg-[#fec449] transition-colors whitespace-nowrap shrink-0">
          Ver contactos
        </a>
      </div>
    </div>
  </section>;
}
function PrensaSection() {
  return <section id="prensa" className="py-24 px-4 bg-[#FFF1E3]">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-[#343230] mb-4">Prensa y Comunicación</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[{
          icono: <Download size={28} />,
          titulo: 'Kit de prensa',
          desc: 'Logos, imágenes, materiales e instrucciones para medios. / Información para la prensa y acreditación.',
          link: '/KitPrensa',
          cta: 'Ver más',
          color: 'from-[#813893] to-[#662c74]'
        }, {
          icono: <ExternalLink size={28} />,
          titulo: 'Gacetillas',
          desc: 'Comunicados oficiales y novedades del Encuentro.',
          link: '/Gacetillas',
          cta: 'Ver gacetillas',
          color: 'from-[#2a823c] to-[#21662f]'
        }, {
          icono: <Star size={28} />,
          titulo: 'Artículos periodísticos',
          desc: 'Coberturas y notas de prensa sobre el Encuentro.',
          link: '/Prensa',
          cta: 'Ver artículos',
          color: 'from-[#b57f09] to-[#916607]'
        }].map((item, i) => <motion.div key={i} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: i * 0.1
        }} className={`bg-gradient-to-br ${item.color} text-white rounded-2xl p-8`}>
          <div className="mb-5 opacity-80">{item.icono}</div>
          <h3 className="text-white mb-3">{item.titulo}</h3>
          <p className="text-white/70 mb-6 text-sm">{item.desc}</p>
          <a href={item.link} className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 font-bold text-sm px-5 py-2.5 rounded-full transition-colors">
            {item.cta} <ArrowRight size={14} />
          </a>
        </motion.div>)}
      </div>
    </div>
  </section>;
}

function FaqSection() {
  const [faqAbierta, setFaqAbierta] = useState(null);
  return <>
    {/* FAQ */}
    <div className="py-20 px-4 border-b border-white/10 bg-[#2f1435] text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-white text-center mb-10">Preguntas frecuentes</h2>
        {FAQ.map((item, i) => <div key={i} className="border-b border-white/10">
          <button onClick={() => setFaqAbierta(faqAbierta === i ? null : i)} className="w-full text-left py-5 flex justify-between items-center gap-4">
            <span className="font-semibold text-white/90">{item.pregunta}</span>
            <ChevronDown size={18} className="text-[#fdb10c] shrink-0 transition-transform" style={{
              transform: faqAbierta === i ? 'rotate(180deg)' : 'rotate(0deg)'
            }} />
          </button>
          <AnimatePresence>
            {faqAbierta === i && <motion.div initial={{
              height: 0,
              opacity: 0
            }} animate={{
              height: 'auto',
              opacity: 1
            }} exit={{
              height: 0,
              opacity: 0
            }} className="overflow-hidden">
              <div className="text-white/60 pb-5 text-sm leading-relaxed">{item.respuesta}</div>
            </motion.div>}
          </AnimatePresence>
        </div>)}
      </div>
    </div>
  </>
}

export function FooterSection() {
  return <footer className="bg-[#2f1435] text-white">
    {/* Contacto */}
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <h4 className="text-[#fec449] font-bold mb-4 uppercase tracking-wider text-sm">Contacto general</h4>
            <div className="flex items-center gap-2 text-white/70 mb-2">
              <div>
                <a href="mailto:39encuentropluri.cba%40proton.me" className="text-white/60 hover:text-white transition-colors"> <Mail size={20} /></a>
              </div>
              <div>
                <a href="https://www.instagram.com/39encuentropluri.cba/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors"><Instagram size={20} /></a>
              </div>
              <div>
                <a href="https://www.facebook.com/people/39-Encuentro-Plurinacional-C%C3%B3rdoba-2026/61584355586326/#" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors"><Facebook size={20} /></a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-[#fec449] font-bold mb-4 uppercase tracking-wider text-sm">Comisiones</h4>
            {['Organización', 'Prensa', 'Alojamiento', 'Cultural', 'Finanzas'].map(com => <div key={com} className="flex items-center gap-2 text-white/60 mb-1.5">
              <Mail size={12} />
              <span className="text-sm">{com.toLowerCase()}@encuentro.org</span>
            </div>)}
          </div>
          <div>
            <h4 className="text-[#fec449] font-bold mb-4 uppercase tracking-wider text-sm">El Encuentro</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              39° Encuentro Plurinacional de Mujeres, Lesbianas, Trans, Travestis, Bisexuales, Intersex y No Binaries.<br />
              Córdoba Capital · 10, 11 y 12 de octubre de 2026.
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-white/30 text-xs">
          Sitio web del 39° Encuentro Plurinacional · Hecho por Mica, Nai y Pili 💜
        </div>
      </div>
    </div>
  </footer>;
}

// Pop-up Primeros Auxilios
function PopupPrimerosAuxilios() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(t);
  }, []);
  return <>
    {/* Botón flotante */}
    <button onClick={() => setVisible(!visible)} className="fixed bottom-6 right-6 z-50 bg-red-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-red-600 transition-colors" title="Primeros Auxilios">
      <AlertCircle size={24} />
    </button>

    <AnimatePresence>
      {visible && <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} exit={{
        opacity: 0,
        scale: 0.9
      }} className="fixed bottom-24 right-6 z-50 bg-[#FFF1E3] rounded-2xl shadow-2xl border-2 border-red-200 p-5 max-w-xs w-full">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <div className="bg-red-100 text-red-600 p-1.5 rounded-lg"><AlertCircle size={18} /></div>
            <h4 className="font-bold text-[#343230] text-sm">Primeros Auxilios</h4>
          </div>
          <button onClick={() => setVisible(false)} className="text-gray-400 hover:text-gray-600">
            <X size={18} />
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-3">Durante el Encuentro hay puestos de primeros auxilios.</p>
        <div className="bg-red-50 rounded-xl p-3">
          <p className="text-xs font-bold text-red-700 mb-1">Emergencias</p>
          <div className="flex items-center gap-2 text-red-600">
            <Phone size={14} />
            <span className="font-mono font-bold text-sm">107 / 911</span>
          </div>
        </div>
        <a href="/#sede" onClick={() => setVisible(false)} className="block text-center text-red-600 text-xs font-bold mt-3 hover:underline">
          Ver info completa →
        </a>
      </motion.div>}
    </AnimatePresence>
  </>;
}

// ─── PÁGINA PRINCIPAL ─────────────────────────────────────────────────────────

export default function HomePage() {
  useEffect(() => {
    if (!document.getElementById('encuentro-typography')) {
      const style = document.createElement('style');
      style.id = 'encuentro-typography';
      style.innerHTML = `
        body {
          font-family: 'degular', sans-serif !important;
        }
        h1, h2, h3, h4, h5, h6,
        h1 *, h2 *, h3 *, h4 *, h5 *, h6 * {
          font-family: 'thunderhouse-pro', sans-serif !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);
  return <div className="relative font-body">
    <ScrollProgressBar />
    <CountdownBanner />
    <Navbar />
    <BackToTop />
    <div className="relative" style={{
      background: 'linear-gradient(180deg, #2f1435 0%, #662c74 25%, #184b22 45%, #2f1435 70%, #4a2055 100%)'
    }}>
      {/* Patrón tileado de fondo: 35% de opacidad, modo de fusión Multiplicar. Archivo en /public/images/bg-tile.png */}
      <div className="absolute inset-0 pointer-events-none" style={{
        // backgroundImage: 'url(/images/bg-tile.png)',
        // backgroundRepeat: 'repeat',
        // backgroundSize: '340px',
        // mixBlendMode: 'multiply',
        // opacity: 0.35
      }} />
      <div className="relative">
        <HeroSection />
        <ApoyoSection />
      </div>
    </div>
    <EncuentroSection />
    <EjesSection />
    <CronogramaSection />
    <CancioneroSection />
    {/* <CulturalSection /> */}
    <SedeSection />
    <PrensaSection />
    <FaqSection />
    <FooterSection />
    <PopupPrimerosAuxilios />
  </div>;
}