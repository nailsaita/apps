import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Ruler, MessageCircle, MapPin } from 'lucide-react';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';
import TitleSectionTransparent from '@/components/TitleSectionTransparent.jsx';
import {Helmet} from "react-helmet";

// ─── DATOS DE PRODUCTOS ────────────────────────────────────────────────────

const PRODUCTOS = [
    {
        id: 'remera',
        nombre: 'Remera estampada',
        descripcion: 'Remera oficial del 39° Encuentro, algodón 100%.',
        precio: '1 por $30.000 o 2 por $50.000',
        tieneTalles: true,
        colores: [
            { nombre: 'Negra', hex: '#111111', imagen: '/images/remeras/Negra.png' },
            { nombre: 'Violeta', hex: '#813893', imagen: '/images/remeras/Violeta.png' }
        ]
    }
];

// ─── TABLA DE TALLES (remera) ──────────────────────────────────────────────

const TALLES_REMERA = [
    { talle: 'S', pecho: '51 cm', largo: '69 cm' },
    { talle: 'M', pecho: '53 cm', largo: '72 cm' },
    { talle: 'L', pecho: '55 cm', largo: '74 cm' },
    { talle: 'XL', pecho: '57 cm', largo: '75 cm' },
    { talle: 'XXL', pecho: '62 cm', largo: '78 cm' },
    { talle: 'XXXL', pecho: '70 cm', largo: '92 cm' }
];

// ─── DÓNDE CONSEGUIRLA ──────────────────────────────────────────────────────

const PUNTO_DE_VENTA = 'Conseguí tu remera en el Centro Cultural Córdoba, al lado del punto de acreditaciones.';

// ─── COMPONENTES AUXILIARES ─────────────────────────────────────────────────

function ProductoCard({ producto, index }) {
    const [colorActivo, setColorActivo] = useState(0);
    const tieneColores = Array.isArray(producto.colores) && producto.colores.length > 0;
    const imagenActual = tieneColores ? producto.colores[colorActivo].imagen : producto.imagen;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#faf7fb] border border-[#eadeed] rounded-3xl overflow-hidden"
        >
            <div className="h-56 bg-white/60 flex items-center justify-center">
                {imagenActual ? (
                    <img
                        src={imagenActual}
                        alt={`${producto.nombre}${tieneColores ? ' - ' + producto.colores[colorActivo].nombre : ''}`}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="flex flex-col items-center text-gray-400">
                        <ShoppingBag size={40} className="mb-2 opacity-40" />
                        <p className="text-xs">Mockup próximamente</p>
                    </div>
                )}
            </div>

            {tieneColores && (
                <div className="flex items-center gap-2 px-6 pt-5" role="group" aria-label="Elegir color de la remera">
                    {producto.colores.map((color, i) => (
                        <button
                            key={color.nombre}
                            onClick={() => setColorActivo(i)}
                            aria-pressed={colorActivo === i}
                            className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full border-2 transition-colors"
                            style={{
                                borderColor: colorActivo === i ? '#813893' : '#eadeed',
                                color: colorActivo === i ? '#662c74' : '#9ca3af',
                                backgroundColor: colorActivo === i ? '#f3e9f5' : 'transparent'
                            }}
                        >
                            <span
                                aria-hidden="true"
                                className="w-3 h-3 rounded-full border border-black/10 shrink-0"
                                style={{ backgroundColor: color.hex }}
                            />
                            {color.nombre}
                        </button>
                    ))}
                </div>
            )}

            <div className="p-6">
                <h3 className="text-[#343230] mb-1">{producto.nombre}</h3>
                <p className="text-sm text-gray-500 mb-3">{producto.descripcion}</p>
                <p className="text-sm font-bold text-gray-800">{producto.precio}</p>
            </div>
        </motion.div>
    );
}

// Bloque chico: ícono a la izquierda, título y texto a la derecha
function InfoChica({ icono, fondoIcono, titulo, texto, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="bg-[#faf7fb] border border-[#eadeed] rounded-3xl p-6 flex items-start gap-4"
        >
            <div className={`${fondoIcono} w-12 h-12 rounded-full flex items-center justify-center shrink-0`}>
                {icono}
            </div>
            <div>
                <h3 className="text-[#343230] text-lg font-bold mb-1">{titulo}</h3>
                <p className="text-sm text-gray-500">{texto}</p>
            </div>
        </motion.div>
    );
}

// ─── PÁGINA ──────────────────────────────────────────────────────────────────

export default function PreventaPage() {
    return (
        <div className="relative min-h-screen bg-[#FFF1E3] text-[#343230]">
            <Helmet>
                <title>Remeras 39° Encuentro</title>
            </Helmet>
            <CountdownBanner />
            <Navbar />

            <TitleSection title="Remeras 39° Encuentro" />

            <main className="relative z-10 mx-auto max-w-6xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">

                {/* Fila 1: remera + tabla de talles */}
                <div className="grid md:grid-cols-2 gap-6">
                    {PRODUCTOS.map((producto, i) => (
                        <ProductoCard key={producto.id} producto={producto} index={i} />
                    ))}

                    {/* Tabla de talles */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-[#faf7fb] border border-[#eadeed] rounded-3xl p-7"
                    >
                        <div className="bg-[#813893] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <Ruler size={22} />
                        </div>
                        <h3 className="text-[#343230] mb-3">Tabla de talles (remera)</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead>
                                    <tr className="border-b border-[#eadeed]">
                                        <th className="py-2 pr-4 text-gray-400 font-semibold">Talle</th>
                                        <th className="py-2 pr-4 text-gray-400 font-semibold">Ancho de pecho</th>
                                        <th className="py-2 text-gray-400 font-semibold">Largo total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {TALLES_REMERA.map(t => (
                                        <tr key={t.talle} className="border-b border-[#eadeed] last:border-none">
                                            <td className="py-2 pr-4 font-bold text-[#343230]">{t.talle}</td>
                                            <td className="py-2 pr-4 text-gray-500">{t.pecho}</td>
                                            <td className="py-2 text-gray-500">{t.largo}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-gray-400 mt-3">
                            Medidas tomadas de prenda extendida.
                        </p>
                    </motion.div>
                </div>

                {/* Fila 2: dos bloques chicos iguales */}
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <InfoChica
                        icono={<MapPin size={22} />}
                        fondoIcono="bg-[#fdb10c] text-[#4a2055]"
                        titulo="Dónde conseguirla"
                        texto={PUNTO_DE_VENTA}
                        delay={0.2}
                    />
                    <InfoChica
                        icono={<MessageCircle size={22} />}
                        fondoIcono="bg-[#813893] text-white"
                        titulo="¿Tenés dudas sobre las remeras?"
                        texto="Escribinos por MP de Instagram."
                        delay={0.3}
                    />
                </div>
            </main>

            <FooterSection />
        </div>
    );
}