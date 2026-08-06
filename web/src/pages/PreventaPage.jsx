import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, ShoppingBag, Ruler, MessageCircle, Clock, MapPin } from 'lucide-react';
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
        precio: 'A confirmar',
        tieneTalles: true,
        colores: [
            { nombre: 'Negra', hex: '#111111', imagen: '/images/remeras/Negra.png' },
            { nombre: 'Violeta', hex: '#813893', imagen: '/images/remeras/Violeta.png' }
        ]
    }
];

// ─── TABLA DE TALLES (remera) ──────────────────────────────────────────────

const TALLES_REMERA = [
    { talle: 'S', pecho: '48 cm', largo: '64 cm' },
    { talle: 'M', pecho: '51 cm', largo: '67 cm' },
    { talle: 'L', pecho: '54 cm', largo: '70 cm' },
    { talle: 'XL', pecho: '57 cm', largo: '73 cm' }
];

// ─── DATOS DE PAGO ──────────────────────────────────────────────────────────

const DATOS_PAGO = [
    { label: 'Alias', valor: 'PREVENTA.ENCUENTRO.CBA' },
    { label: 'CBU', valor: '0000000000000000000000' },
    { label: 'Titular', valor: 'Nombre Apellido titular' }
];

// ─── PASOS PARA RESERVAR ────────────────────────────────────────────────────

const PASOS_RESERVA = [
    {
        titulo: 'Elegí tu producto y talle',
        desc: 'Definí si querés remera, tote bag o ambos, y en el caso de la remera, el talle según la tabla de medidas.'
    },
    {
        titulo: 'Transferí el pago',
        desc: 'Hacé la transferencia por el monto total a los datos de pago que están más abajo.'
    },
    {
        titulo: 'Enviá tu comprobante',
        desc: 'Mandá el comprobante junto con tu nombre completo, producto y talle por WhatsApp o email (agregar contacto de la comisión).'
    },
    {
        titulo: 'Retirá tu pedido',
        desc: 'El retiro se hace en un punto habilitado durante el Encuentro (a confirmar por la comisión).'
    }
];

// ─── COMPONENTES AUXILIARES ─────────────────────────────────────────────────

function CampoPago({ label, valor }) {
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
    return (
        <div className="flex items-center justify-between gap-3 bg-[#faf7fb] rounded-xl px-4 py-3 border border-[#eadeed]">
            <div className="min-w-0">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{label}</p>
                <p className="text-sm font-semibold text-[#343230] truncate">{valor}</p>
            </div>
            <button
                onClick={copiar}
                className="shrink-0 flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-full transition-colors"
                style={{
                    backgroundColor: copiado ? '#dceade' : '#eadeed',
                    color: copiado ? '#21662f' : '#662c74'
                }}
            >
                {copiado ? <Check size={14} /> : <Copy size={14} />}
                {copiado ? 'Copiado' : 'Copiar'}
            </button>
        </div>
    );
}

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
                <div className="flex items-center gap-2 px-6 pt-5">
                    {producto.colores.map((color, i) => (
                        <button
                            key={color.nombre}
                            onClick={() => setColorActivo(i)}
                            className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full border-2 transition-colors"
                            style={{
                                borderColor: colorActivo === i ? '#813893' : '#eadeed',
                                color: colorActivo === i ? '#662c74' : '#9ca3af',
                                backgroundColor: colorActivo === i ? '#f3e9f5' : 'transparent'
                            }}
                        >
                            <span
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
                <p className="text-sm font-bold text-[#662c74]">{producto.precio}</p>
            </div>
        </motion.div>
    );
}

// ─── PÁGINA ──────────────────────────────────────────────────────────────────

export default function PreventaPage() {
    return (
        <div className="relative bg-background text-slate-100 min-h-screen">
            <CountdownBanner />
            <Navbar />

            <TitleSection title="Preventa: remeras y tote bags" />

            <main className="relative z-10 mx-auto max-w-6xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">

                {/* Productos */}
                <section className="mb-10">
                    <div className="grid sm:grid-cols-2 gap-6">
                        {PRODUCTOS.map((producto, i) => (
                            <ProductoCard key={producto.id} producto={producto} index={i} />
                        ))}
                    </div>
                </section>

                <div className="grid md:grid-cols-2 gap-6">

                    {/* Tabla de talles */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
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
                            Medidas tomadas de prenda extendida. Ante la duda, consultá antes de reservar.
                        </p>
                    </motion.div>

                    {/* Datos de pago */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-[#faf7fb] border border-[#eadeed] rounded-3xl p-7"
                    >
                        <div className="bg-[#fdb10c] text-[#4a2055] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <Copy size={22} />
                        </div>
                        <h3 className="text-[#343230] mb-4">Datos para transferir</h3>
                        <div className="space-y-3">
                            {DATOS_PAGO.map(campo => (
                                <CampoPago key={campo.label} label={campo.label} valor={campo.valor} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Cómo reservar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-[#faf7fb] border border-[#eadeed] rounded-3xl p-7 md:col-span-2"
                    >
                        <div className="bg-[#2a823c] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <ShoppingBag size={22} />
                        </div>
                        <h3 className="text-[#343230] mb-5">Cómo reservar</h3>
                        <div className="grid sm:grid-cols-2 gap-5">
                            {PASOS_RESERVA.map((paso, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="shrink-0 w-8 h-8 rounded-full bg-[#eadeed] text-[#662c74] font-bold flex items-center justify-center text-sm">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[#343230]">{paso.titulo}</p>
                                        <p className="text-sm text-gray-500">{paso.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Fecha límite */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-[#faf7fb] border border-[#eadeed] rounded-3xl p-7 flex flex-col"
                    >
                        <div className="bg-[#813893] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <Clock size={22} />
                        </div>
                        <h4 className="text-[#343230] mb-1">Fecha límite</h4>
                        <p className="text-sm text-gray-500">A confirmar.</p>
                    </motion.div>

                    {/* Retiro */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-[#faf7fb] border border-[#eadeed] rounded-3xl p-7 flex flex-col"
                    >
                        <div className="bg-[#fdb10c] text-[#4a2055] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <MapPin size={22} />
                        </div>
                        <h4 className="text-[#343230] mb-1">Retiro</h4>
                        <p className="text-sm text-gray-500">Durante el Encuentro, en un punto a confirmar.</p>
                    </motion.div>
                </div>

                {/* Contacto */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-10 bg-[#faf7fb] border-2 border-[#813893]/25 rounded-3xl p-8 text-center"
                >
                    <div className="bg-[#813893] text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MessageCircle size={24} />
                    </div>
                    <h3 className="text-[#343230] mb-2">¿Tenés dudas sobre la preventa?</h3>
                    <p className="text-gray-500 text-sm">
                        Escribinos por MP de Instagram.
                    </p>
                </motion.div>
            </main>

            <FooterSection />
        </div>
    );
}