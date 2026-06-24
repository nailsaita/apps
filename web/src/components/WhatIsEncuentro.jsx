import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, CalendarDays } from 'lucide-react';

const StatCard = ({
  icon: Icon,
  value,
  label,
  delay
}) => (
  <motion.div
    initial={{
      opacity: 0,
      y: 20
    }}
    whileInView={{
      opacity: 1,
      y: 0
    }}
    viewport={{
      once: true
    }}
    transition={{
      duration: 0.5,
      delay
    }}
    className="bg-card p-8 rounded-3xl shadow-lg border border-border/50 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
  >
    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-8 h-8 text-primary" />
    </div>
    <h3 className="text-4xl font-bold text-foreground mb-2">{value}</h3>
    <p className="text-muted-foreground font-medium">{label}</p>
  </motion.div>
);

const WhatIsEncuentro = () => {
  return (
    <section id="encuentro" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
          >
            <h2 className="text-primary mb-6">¿Qué es el Encuentro?</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Desde 1986, los Encuentros son un espacio único en el mundo. Son <strong>autónomos, autoconvocados, democráticos, pluralistas y horizontales</strong>. No tienen dueñas ni patrones, se sostienen con el esfuerzo colectivo de quienes participan.
              </p>
              <p>
                Durante tres días, miles de mujeres y disidencias de todo el país nos reunimos para debatir, compartir experiencias, organizarnos y transformar la realidad. Los talleres son el corazón del Encuentro: espacios soberanos donde la palabra circula libremente.
              </p>
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">
                  "El Encuentro es de todas, todes y todos los que luchan."
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-6 mt-12 sm:mt-0">
              <StatCard icon={Users} value="100.000+" label="Personas de todo el país" delay={0.1} />
              <StatCard icon={CalendarDays} value="3 Días" label="De debate, cultura y organización" delay={0.3} />
            </div>
            <div className="space-y-6 sm:mt-12">
              <StatCard icon={BookOpen} value="+100" label="Talleres en 16 ejes temáticos" delay={0.2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsEncuentro;