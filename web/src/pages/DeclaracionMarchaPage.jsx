import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, MotionConfig } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
// Ajustá esta ruta si tus otras subpáginas importan Navbar y Footer desde otro lado
import { Navbar, FooterSection } from '@/pages/HomePage.jsx';

// Texto de la declaración, párrafo por párrafo
const INTRO = [
  'Este año, por primera vez en la historia de este Encuentro, las identidades travestis, trans y no binarias fuimos reconocidas como parte de su organización. Desde la Comisión Organizadora creamos una comisión travesti-trans y no binaries, ocupamos un espacio y asumimos la responsabilidad de construir colectivamente este 39º Encuentro Plurinacional.',
  'Y queremos decirlo con claridad: no llegamos para quitarle el lugar a nadie. Llegamos a ocupar un lugar que también nos pertenece a través del trabajo colectivo.',
  'Nuestras identidades, nuestras organizaciones y nuestras luchas tienen una historia política propia. Una historia de resistencia, de organización y de lucha contra las violencias que antecede a este reconocimiento y que no depende de que otros espacios decidan legitimarnos.',
  'También hemos encontrado, a lo largo de esa historia, compañerxs con quienes hemos construido alianzas y luchas comunes. Estamos acá porque queremos seguir construyendo esas alianzas. En este marco la decisión de que la consigna de la marcha de este año no incluya la palabra lesbicidios, como sí había sucedido en años anteriores, se inscribe en un momento histórico de celebración y conmemoración de este espacio ganado. Esta decisión no parte del desconocimiento de la lucha contra las violencias hacia las identidades lésbicas, ni pretende negar la existencia de los lesbicidios ni borrar la historia de lucha compartida que construyó nuestras marchas.',
  'Este año además, nos encuentra a 10 años de aquella primera marcha en memoria de Diana Sacayán, una marcha que abrió un camino de organización y visibilización frente a los travesticidios, transfemicidios y transhomicidios.'
];

const SE_HACE = [
  'Se hace porque nuestres compañeres siguen siendo asesinades.',
  'Se hace porque nuestras vidas siguen siendo atravesadas por distintas formas de violencia.',
  'Se hace porque nuestras identidades siguen siendo cuestionadas.',
  'Se hace porque diez años de memoria, lucha y organización no pueden ser desplazados por una disputa coyuntural.'
];

const UNIDAD = [
  'Y queremos que quede claro también que esta marcha tiene lugar para todes.',
  'No queremos una marcha dividida. Queremos una marcha que pueda demostrar que nuestras luchas pueden encontrarse, reconocerse y caminar juntas aun cuando existan diferencias.'
];

const VIOLENCIA = [
  'En estos días se produjeron expresiones públicas que presentan a las personas travestis y trans como “hombres” o “machos”, reduciendo nuestras identidades a nuestra genitalidad y utilizando una mirada biologicista para cuestionar nuestra presencia y nuestra participación política.',
  'Esto no es para nosotres una discusión abstracta.',
  'Cuando se nos nombra de esa manera, se está negando nuestra identidad y nuestra condición de sujetas políticas. Y cuando esos discursos se producen públicamente, tienen consecuencias concretas sobre las condiciones en las que participamos.',
  'Repudiamos que nuestras identidades sean reducidas a nuestra genitalidad.',
  'Y queremos ser muy clares: una cosa es la diferencia política y otra cosa es la violencia.',
  'Podemos discutir. Podemos tener posiciones diferentes. Podemos incluso tener desacuerdos profundos. Pero no queremos que las diferencias se transformen en deshumanización, exposición, hostigamiento o violencia.',
  'Porque además de estos discursos, compañeras trans de nuestra Comisión fueron fotografiadas y esas imágenes fueron difundidas sin autorización, en un contexto de ataque y exposición pública. Esto no puede naturalizarse.'
];

const CIERRE = [
  'También queremos hablar de las infancias trans. Porque cuando se niega la posibilidad de que una identidad pueda existir por fuera de la genitalidad asignada al nacer, no solamente se está cuestionando a quienes hoy somos adultxs. También se está condicionando el derecho de las nuevas generaciones a crecer libres, a ser escuchadas y a construir sus propias vidas sin que nadie les imponga quiénes tienen que ser. Elles también quieren marchar con nosotres y elles más que nadie necesitan que estén garantizadas las condiciones para poder hacerlo sin violencias.',
  'Queremos que nos permita discutir cómo construir un Encuentro verdaderamente plurinacional, diverso y capaz de contener nuestras diferencias sin convertirlas en violencia.',
  'Reafirmamos nuestro compromiso como Comisión Organizadora del Encuentro Plurinacional que estamos comprometidas/es/os con las identidades, con las luchas y con la dignidad de toda la comunidad.',
  'Este finde nos encontramos en este encuentro plurinacional. Los debates que nos tengamos que dar no se construyen desde la violencia ni desde las redes. Se construyen donde históricamente hemos sabido encontrarnos: en los talleres, en las asambleas, en las comisiones y en todos los espacios de participación y construcción colectiva que a lo largo de todos estos años hemos sabido construir. Es allí donde queremos seguir dando las discusiones, escuchándonos, reconociendo nuestras diferencias y encontrando las formas de continuar construyendo respuestas que den una verdadera lucha a este sistema heterocispatriarcal.'
];

const CONSIGNAS = [
  '¡Basta de discursos de odio y biologicistas!',
  '¡Nos encontramos este finde!',
  '¡Marcha contra los travesticidios, transfemicidios y transhomicidios!',
  '¡El Estado es Responsable!',
  'Existimos porque hay memoria, resistimos porque hay lucha.',
  '¡Basta de Lesbicidios!'
];

const Parrafos = ({ items }) => items.map((t, i) => (
  <p key={i} className="text-[#343230] text-base sm:text-lg leading-relaxed mb-5">{t}</p>
));

// Frase destacada, como cartel
const Destacado = ({ children }) => (
  <blockquote className="my-8 border-l-8 border-[#813893] bg-[#eadeed] rounded-r-2xl px-6 py-4 m-0">
    <p className="m-0 italic font-black text-[#4a2055] text-xl sm:text-2xl leading-snug">{children}</p>
  </blockquote>
);

export default function DeclaracionMarchaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Declaración de la Comisión Organizadora · 39° Encuentro Plurinacional';
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative font-body bg-[#FFF1E3] min-h-screen">
        <Navbar hasTopSpace={false} />

        <main id="contenido" tabIndex={-1} className="outline-none">
          {/* Encabezado con los colores de la bandera trans */}
          <header
            className="pt-28 pb-14 px-4"
            style={{ background: 'linear-gradient(180deg, #f5a9b8 0%, #d5bddb 55%, #5bcefa 100%)' }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <Link
                to="/#marcha"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#4a2055] bg-white/60 hover:bg-white/80 px-4 py-2 rounded-full mb-6 transition-colors"
              >
                <ArrowLeft size={16} aria-hidden="true" /> Volver al inicio
              </Link>
              <span className="block mb-4">
                <span className="inline-flex items-center gap-2 bg-[#4a2055] text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                  <span aria-hidden="true">🏳️‍⚧️</span> Desde la Comisión Organizadora
                </span>
              </span>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#FFF1E3] text-[#662c74] inline-block rounded-2xl px-6 py-4 shadow-lg shadow-[#4a2055]/20 italic font-black text-2xl sm:text-4xl leading-tight m-0"
              >
                Declaración de la Comisión Organizadora del 39° Encuentro Pluri
              </motion.h1>
              <p className="mt-5 mb-0 text-[#4a2055] font-semibold">
                Marcha contra los travesticidios, transfemicidios y transhomicidios
              </p>
            </div>
          </header>

          {/* Cuerpo */}
          <article className="max-w-3xl mx-auto px-4 py-12">
            <Parrafos items={INTRO} />

            <Destacado>Por eso decimos con claridad: esta marcha se hace y nos encuentra juntes!</Destacado>

            <ul className="list-none m-0 p-0 mb-8 space-y-3">
              {SE_HACE.map((t, i) => (
                <li key={i} className="flex gap-3 items-start bg-white/60 border border-[#d5bddb] rounded-xl px-4 py-3">
                  <span aria-hidden="true" className="mt-2 w-2 h-2 rounded-full bg-[#813893] shrink-0" />
                  <span className="text-[#343230] text-base sm:text-lg leading-snug">{t}</span>
                </li>
              ))}
            </ul>

            <Parrafos items={UNIDAD} />

            <Destacado>Pero queremos decir algo que para nosotres es fundamental: ¡Unidad no significa silencio frente a la violencia!</Destacado>

            <Parrafos items={VIOLENCIA} />

            <Destacado>Por eso también decimos: no somos una concesión, ni una cuota de inclusión, ni una presencia tolerada. Somos parte de este Encuentro porque nuestras vidas, nuestras luchas y nuestras identidades también construyen el movimiento.</Destacado>

            <Parrafos items={CIERRE} />
          </article>

          {/* Consignas finales */}
          <section
            aria-label="Consignas"
            className="py-12 px-4"
            style={{ background: 'linear-gradient(180deg, #f5a9b8 0%, #d5bddb 50%, #5bcefa 100%)' }}
          >
            <ul className="max-w-2xl mx-auto list-none m-0 p-0 flex flex-col items-center gap-3">
              {CONSIGNAS.map((c, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10, rotate: 0 }}
                  whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1.2 : -1.2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-[#FFF1E3] text-[#662c74] rounded-2xl px-5 py-3 shadow-lg shadow-[#4a2055]/20 text-center italic font-black text-lg sm:text-xl"
                >
                  {c}
                </motion.li>
              ))}
            </ul>
          </section>
        </main>

        <FooterSection />
      </div>
    </MotionConfig>
  );
}