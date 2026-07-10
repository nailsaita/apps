import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Home, Bus, Utensils, HeartPulse } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const infoCards = [
  { icon: Home, title: 'Alojamiento', desc: 'Escuelas, clubes y campings habilitados para delegaciones.' },
  { icon: Bus, title: 'Transporte', desc: 'Rutas de acceso, terminales y transporte urbano gratuito.' },
  { icon: Utensils, title: 'Alimentación', desc: 'Puntos de viandas y ferias de economía popular.' },
  { icon: HeartPulse, title: 'Primeros Auxilios', desc: 'Postas sanitarias y protocolos de cuidado.' },
];

const VenueAndLogistics = () => {
  return (
    <section id="sede" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary mb-4">Sede y Logística</h2>
          <p className="text-lg text-muted-foreground">
            Toda la información necesaria para organizar tu viaje y estadía en la ciudad sede.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-lg border border-border h-[500px] bg-muted relative"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.29592731265!2d-65.38326045!3d-24.1832604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b0f4a59e41a29%3A0x1408967121f70312!2sSan%20Salvador%20de%20Jujuy%2C%20Jujuy!5e0!3m2!1sen!2sar!4v1700000000000!5m2!1sen!2sar" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de la sede"
              className="absolute inset-0"
            />
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {infoCards.map((card, idx) => (
                <div key={idx} className="bg-card p-6 rounded-2xl border border-border hover:border-secondary/50 transition-colors">
                  <card.icon className="w-8 h-8 text-secondary mb-4" />
                  <h4 className="font-bold text-lg mb-2">{card.title}</h4>
                  <p className="text-sm text-muted-foreground">{card.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MapPin className="text-accent" /> Vení desde tu provincia
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="noa">
                  <AccordionTrigger className="text-lg font-semibold">Región NOA</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Información específica sobre rutas, empresas de transporte y puntos de encuentro para delegaciones del Noroeste Argentino.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="nea">
                  <AccordionTrigger className="text-lg font-semibold">Región NEA</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Coordinación de micros y rutas sugeridas desde el Noreste.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="centro">
                  <AccordionTrigger className="text-lg font-semibold">Centro y CABA</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Opciones de vuelos, trenes y micros de larga distancia. Puntos de salida masivos.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="patagonia">
                  <AccordionTrigger className="text-lg font-semibold">Patagonia</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Recomendaciones para viajes largos, postas de descanso y coordinación interprovincial.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VenueAndLogistics;