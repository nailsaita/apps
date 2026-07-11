import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, ShoppingBag, Ruler, MessageCircle, Clock, MapPin } from 'lucide-react';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';

// ─── DATOS DE PRODUCTOS ────────────────────────────────────────────────────

const PRODUCTOS = [
    {
        id: 'remera',
        nombre: 'Remera estampada',
        descripcion: 'Remera oficial del 39° Encuentro, algodón 100%.',
        precio: 'A confirmar',
        imagen: null,
        tieneTalles: true
    },
    {
        id: 'totebag',
        nombre: 'Tote bag',
        descripcion: 'Bolsa de tela reforzada con el diseño del Encuentro.',
        precio: 'A confirmar',
        imagen: null,
        tieneTalles: false
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
        <div className="flex items-center justify-between gap-3 bg-slate-900/40 rounded-xl px-4 py-3 border border-slate-800/60">
            <div className="min-w-0">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</p>
                <p className="text-sm font-semibold text-slate-100 truncate">{valor}</p>
            </div>
            <button
                onClick={copiar}
                className="shrink-0 flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-full transition-colors"
                style={{
                    backgroundColor: copiado ? '#052e1f' : '#3b0e2c',
                    color: copiado ? '#4ade80' : '#f472b6'
                }}
            >
                {copiado ? <Check size={14} /> : <Copy size={14} />}
                {copiado ? 'Copiado' : 'Copiar'}
            </button>
        </div>
    );
}

function ProductoCard({ producto }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900/40 rounded-2xl border border-slate-800/60 overflow-hidden"
        >
            <div className="h-56 bg-slate-800/60 flex items-center justify-center">
                {producto.imagen ? (
                    <img src={producto.imagen} alt={producto.nombre} className="w-full h-full object-cover" />
                ) : (
                    <div className="flex flex-col items-center text-slate-500">
                        <ShoppingBag size={40} className="mb-2 opacity-50" />
                        <p className="text-xs">Mockup próximamente</p>
                    </div>
                )}
            </div>
            <div className="p-5">
                <h3 className="text-lg font-bold text-fuchsia-400 mb-1">{producto.nombre}</h3>
                <p className="text-sm text-slate-300 mb-3">{producto.descripcion}</p>
                <p className="text-sm font-bold text-slate-100">{producto.precio}</p>
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

            <main className="relative z-10 mx-auto max-w-4xl px-4 pb-32 pt-32 sm:px-6 lg:px-8">
                <section className="mb-16">
                    <p className="text-slate-300 text-center text-lg mb-10">
                        Colaborá con del 39° Encuentro y reservá tu remera y/o tote bag oficial.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-5">
                        {PRODUCTOS.map(producto => (
                            <ProductoCard key={producto.id} producto={producto} />
                        ))}
                    </div>
                </section>

                {/* Tabla de talles */}
                <section className="mb-16 rounded-2xl border border-white/10 bg-slate-950/60 p-6 md:p-8 shadow-xl shadow-black/20">
                    <div className="flex items-center gap-2 mb-4">
                        <Ruler size={20} className="text-fuchsia-400" />
                        <h3 className="text-xl font-bold text-fuchsia-400 m-0">Tabla de talles (remera)</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead>
                                <tr className="border-b border-slate-800">
                                    <th className="py-2 pr-4 text-slate-400 font-semibold">Talle</th>
                                    <th className="py-2 pr-4 text-slate-400 font-semibold">Ancho de pecho</th>
                                    <th className="py-2 text-slate-400 font-semibold">Largo total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {TALLES_REMERA.map(t => (
                                    <tr key={t.talle} className="border-b border-slate-800/60 last:border-none">
                                        <td className="py-2 pr-4 font-bold text-slate-100">{t.talle}</td>
                                        <td className="py-2 pr-4 text-slate-300">{t.pecho}</td>
                                        <td className="py-2 text-slate-300">{t.largo}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-slate-500 mt-3">
                        Medidas tomadas de prenda extendida. Ante la duda, consultá antes de reservar.
                    </p>
                </section>

                {/* Cómo reservar */}
                <section className="mb-16 rounded-2xl border border-white/10 bg-slate-950/60 p-6 md:p-8 shadow-xl shadow-black/20">
                    <h3 className="text-xl font-bold text-fuchsia-400 mb-6">Cómo reservar</h3>
                    <div className="space-y-5">
                        {PASOS_RESERVA.map((paso, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="shrink-0 w-8 h-8 rounded-full bg-fuchsia-500/20 text-fuchsia-300 font-bold flex items-center justify-center text-sm">
                                    {i + 1}
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-100">{paso.titulo}</p>
                                    <p className="text-sm text-slate-400">{paso.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Datos de pago */}
                <section className="mb-16 rounded-2xl border border-white/10 bg-slate-950/60 p-6 md:p-8 shadow-xl shadow-black/20">
                    <h3 className="text-xl font-bold text-fuchsia-400 mb-6">Datos para transferir</h3>
                    <div className="space-y-3">
                        {DATOS_PAGO.map(campo => (
                            <CampoPago key={campo.label} label={campo.label} valor={campo.valor} />
                        ))}
                    </div>
                </section>

                {/* Info adicional */}
                <section className="grid sm:grid-cols-2 gap-5">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 flex flex-col">
                        <Clock size={22} className="text-fuchsia-400 mb-3" />
                        <h4 className="font-bold text-slate-100 mb-1">Fecha límite</h4>
                        <p className="text-sm text-slate-400">A confirmar.</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 flex flex-col">
                        <MapPin size={22} className="text-fuchsia-400 mb-3" />
                        <h4 className="font-bold text-slate-100 mb-1">Retiro</h4>
                        <p className="text-sm text-slate-400">Durante el Encuentro, en un punto a confirmar.</p>
                    </div>
                </section>

                {/* Contacto */}
                <section className="mt-12 rounded-2xl border-2 border-fuchsia-500/30 bg-slate-950/60 p-8 text-center">
                    <MessageCircle size={32} className="mx-auto mb-4 text-fuchsia-400" />
                    <h3 className="text-slate-100 font-bold mb-2">¿Tenés dudas sobre la preventa?</h3>
                    <p className="text-slate-400 text-sm">
                        Escribinos por MP de Instagram.
                    </p>
                </section>
            </main>

            <FooterSection />
        </div>
    );
}