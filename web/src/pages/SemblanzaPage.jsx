import React from 'react';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';

export default function SemblanzaPage() {
    return (
        <div className="relative bg-[#FFF1E3] text-[#343230] min-h-screen">
            <CountdownBanner />
            <Navbar />

            <TitleSection title="Semblanza" />

            <main className="relative z-10 mx-auto max-w-4xl px-4 pb-32 pt-32 sm:px-6 lg:px-8">
                <section className="rounded-3xl border border-[#eadeed] bg-white/70 p-6 md:p-8 shadow-xl shadow-[#813893]/5 backdrop-blur-sm">
                    <article className="max-w-none space-y-6">

                        <h2
                            className="text-2xl font-bold text-[#813893] mb-6 border-b border-[#eadeed] pb-4"
                            // style={{ fontFamily: "'thunderhouse-pro', sans-serif" }}
                        >
                            Semblanza Encuentro Plurinacional de Mujeres, Lesbianxs, Trans, Travestis, Bisexuales, Intersex y No Binaries.
                        </h2>

                        {/* SUBSECCIÓN 1 */}
                        <div className="space-y-4">
                            <h3
                                className="text-xl font-semibold text-[#813893]"
                                // style={{ fontFamily: "'thunderhouse-pro', sans-serif" }}
                            >
                                Una historia de alcance global y raíces locales
                            </h3>
                            <p className="text-[#343230]/80 leading-relaxed">
                                Entre 1975 y 1985, la ONU declaró el Decenio de la Mujer y organizó tres conferencias internacionales para impulsar la igualdad, el desarrollo y la paz. La última, realizada en Nairobi (Kenia) en 1985, fue un punto de inflexión: allí participaron mujeres argentinas que, al regresar al país, sintieron la necesidad de generar un espacio propio para debatir y organizarse ante las problemáticas locales.
                            </p>
                            <p className="text-[#343230]/80 leading-relaxed">
                                Así, in 1986 nació en Buenos Aires el primer Encuentro Nacional de Mujeres. Desde el inicio fue un espacio autoconvocado, horizontal, apartidario y autofinanciado, el cual año tras año se trasladó a diferentes provincias, multiplicando voces y abrazando nuevas y cada vez más diversas causas. El Encuentro ha fortalecido y propulsado nuestras luchas feministas, contras las distintas violencias patriarcales y opresiones, antiextractivistas y en defensa del ambiente, antirracistas, anticolonialistas y antirrepresivas, contra el ajuste y la precarización de la vida, por derechos laborales, humanos, sociales y políticos, por memoria, verdad y justicia y en solidaridad internacional con las mujeres y disidencias del mundo que defienden sus vidas y territorios.
                            </p>
                            <p className="text-[#343230]/80 leading-relaxed">
                                Nuestros Encuentros en la praxis se constituyeron plurinacionales -participan identidades de distintos orígenes étnicos, migrantes y de los pueblos originarios- y de mujeres, lesbianxs, trans, travestis, bisexuales, intersex y no binaries; desde el 2022, luego de debates muy necesarios, el nombre refleja lo que la realidad ya imponía.
                            </p>
                            <p className="text-[#343230] leading-relaxed font-medium">
                                Córdoba fue sede del II Encuentro en 1987 y del XXII en 2007. Este 2026, Córdoba volverá a ser epicentro, el 10, 11 y 12 de Octubre.
                            </p>
                        </div>

                        {/* SUBSECCIÓN 2 */}
                        <div className="space-y-4 pt-4">
                            <h3
                                className="text-xl font-semibold text-[#813893]"
                                // style={{ fontFamily: "'thunderhouse-pro', sans-serif" }}
                            >
                                ¿De qué hablamos cuándo hablamos del Encuentro?
                            </h3>
                            <p className="text-[#343230]/80 leading-relaxed">
                                Los Encuentros, muchas veces difíciles de definir por su magnitud y complejidad, se han transformado en un verdadero territorio de debate, resistencia y celebración colectiva, donde confluyen mujeres y disidencias de cada rincón del país. En sus talleres y marchas se tejieron alianzas, se visibilizaron injusticias históricas y se gestaron conquistas fundamentales como las leyes de Divorcio, Patria Potestad, ESI, Identidad de Género, el aborto legal, seguro y gratuito y distintas políticas públicas contra la violencia machista. Hoy, cuatro décadas después, los Encuentros siguen siendo un espacio de concurrencia masiva, latiendo con la misma fuerza de aquel primer impulso inspirado en Nairobi.
                            </p>
                            <p className="text-[#343230]/80 leading-relaxed">
                                La autofinanciación, autorepresentatividad y autonomía del Encuentro garantizan año a año que sea un espacio con independencia política de cualquier gobierno o gestión estatal y que sea democrático en su funcionamiento, para reflejar la diversidad de voces que caracteriza a los feminismos y movimientos de mujeres y disidencias, del país y de la región. En el contexto actual, donde se asiste a un desmantelamiento sistemático de las políticas públicas de cuidado y de prevención de violencias, la organización colectiva se vuelve nuestra principal herramienta de defensa, resistencia y transformación de nuestras realidades.
                            </p>
                        </div>

                        {/* SUBSECCIÓN 3 */}
                        <div className="space-y-4 pt-4">
                            <h3
                                className="text-xl font-semibold text-[#813893]"
                                // style={{ fontFamily: "'thunderhouse-pro', sans-serif" }}
                            >
                                Dinámica y Convocatoria
                            </h3>
                            <p className="text-[#343230]/80 leading-relaxed">
                                Durante tres días, cientos de miles participarán en talleres —el corazón del Encuentro— actividades culturales, artísticas, marchas e intervenciones que reflejan la diversidad de nuestra concurrencia, nuestros cuerpos, ideas, dolores, rabias, alegrías y deseos.
                            </p>
                            <p className="text-[#343230] leading-relaxed font-medium">
                                Con la convicción de hacer de este 39° Encuentro un nuevo hito de organización e imaginación política, invitamos a todas y todes a sumarse y respaldar este ejercicio democrático y a esta herramienta de lucha sin precedentes en la región, a realizarse el 10, 11 y 12 de Octubre.
                            </p>
                        </div>

                    </article>
                </section>
            </main>

            <FooterSection />
        </div>
    );
}