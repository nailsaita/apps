

function CarteleraEscenarios() {
  const [escenarioAbierto, setEscenarioAbierto] = useState(CARTELERA_ESCENARIOS[0]?.id ?? null);

  return (
    <div className="mt-16">
      <h3 className="text-center text-[#343230] mb-8">Cartelera de artistas por escenario</h3>
      <div className="space-y-4 max-w-4xl mx-auto">
        {CARTELERA_ESCENARIOS.map(bloque => (
          <div key={bloque.id} className="bg-[#faf7fb] rounded-2xl border-2 border-[#eadeed] overflow-hidden">
            <button
              onClick={() => setEscenarioAbierto(escenarioAbierto === bloque.id ? null : bloque.id)}
              className="w-full text-left p-6 flex justify-between items-start gap-4 hover:bg-[#f3e9f5] transition-colors"
            >
              <div>
                <h4 className="text-lg font-bold text-[#4a2055] mb-1">{bloque.escenario}</h4>
                {bloque.horario && <p className="text-sm text-gray-500">{bloque.horario}</p>}
                {bloque.conduccion && (
                  <p className="text-xs text-gray-400 mt-1">Conducción sugerida: {bloque.conduccion}</p>
                )}
              </div>
              <ChevronDown
                size={20}
                className="text-[#813893] shrink-0 transition-transform mt-1"
                style={{ transform: escenarioAbierto === bloque.id ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </button>

            <AnimatePresence>
              {escenarioAbierto === bloque.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden border-t border-[#eadeed]"
                >
                  <div className="p-6 pt-4 space-y-3">
                    {bloque.actividades.map((act, i) => (
                      <div
                        key={i}
                        className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 py-2 border-b border-[#eadeed] last:border-0"
                      >
                        <span className="font-bold text-[#343230] sm:w-48 shrink-0">{act.nombre}</span>
                        <span className="text-xs font-bold text-[#916607] uppercase tracking-wide sm:w-24 shrink-0">
                          {act.tipo}
                        </span>
                        {act.procedencia && (
                          <span className="text-xs text-gray-400 sm:w-24 shrink-0">{act.procedencia}</span>
                        )}
                        {act.duracion && (
                          <span className="text-xs text-gray-400 sm:w-16 shrink-0">{act.duracion}</span>
                        )}
                        {act.descripcion && (
                          <span className="text-sm text-gray-500 flex-1">{act.descripcion}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

function CulturalSection() {
  return (
    <section id="cultural" className="py-24 px-4 bg-[#FFF1E3]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 relative">
          <IlustracionSticker
            src="/images/ilustraciones/retratos.svg"
            size="w-32 md:w-44"
            rotate={4}
            className="hidden md:block absolute left-0 md:left-20 lg:right-3 -top-10"
          />
          <h2 className="text-[#343230] mb-4">Grilla Cultural</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-4">
            Arte, música, teatro y más. El Encuentro también es fiesta y celebración colectiva.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACTIVIDADES_CULTURALES.map((act, i) => (
            <motion.div
              key={act.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#faf7fb] rounded-2xl overflow-hidden border border-[#eadeed] hover:shadow-lg transition-shadow"
            >
              <div className="h-36 bg-gradient-to-br from-[#feecc2] to-[#eadeed] flex items-center justify-center text-6xl">
                {act.emoji}
              </div>
              <div className="p-5">
                <span className="text-xs font-bold text-[#b57f09] uppercase tracking-wider">{act.tipo}</span>
                <h4 className="font-bold text-[#343230] mt-1 mb-2">{act.nombre}</h4>
                <p className="text-sm text-gray-500">{act.descripcion}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <CarteleraEscenarios />
      </div>
    </section>
  );
}