import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, MapPin } from 'lucide-react';

const scheduleData = {
  dia1: [
    { time: '08:00 - 12:00', title: 'Acreditaciones', location: 'Estadio Central' },
    { time: '10:00', title: 'Acto de Apertura', location: 'Estadio Central', highlight: true },
    { time: '15:00 - 18:00', title: 'Funcionamiento de Talleres', location: 'Escuelas sedes' },
    { time: '18:30', title: 'Marcha contra los Travesticidios', location: 'Plaza Principal' },
    { time: '20:00', title: 'Actividades Culturales', location: 'Diferentes plazas' },
  ],
  dia3: [
    { time: '09:00', title: 'Plenario de Cierre', location: 'Estadio Central' },
    { time: '10:00', title: 'Elección de próxima sede', location: 'Estadio Central', highlight: true },
    { time: '12:00', title: 'Lectura de conclusiones', location: 'Estadio Central' },
    { time: '14:00', title: 'Desconcentración', location: 'Terminal y puntos de salida' },
  ],
  dia2: [
    { time: '09:00 - 12:00', title: 'Funcionamiento de Talleres', location: 'Escuelas sedes' },
    { time: '12:00 - 15:00', title: 'Almuerzo y Feria', location: 'Predio Ferial' },
    { time: '15:00 - 18:00', title: 'Funcionamiento de Talleres', location: 'Escuelas sedes' },
    { time: '18:30', title: 'Marcha del 39° Encuentro', location: 'Recorrido histórico', highlight: true },
    { time: '21:00', title: 'Peña Oficial', location: 'Club Atlético' },
  ],
};

const TimelineItem = ({ item }) => (
  <div className="relative pl-8 py-6 border-l-2 border-primary/20 last:border-transparent group">
    <div className={`absolute left-[-9px] top-8 w-4 h-4 rounded-full border-4 border-background ${item.highlight ? 'bg-accent' : 'bg-primary'} group-hover:scale-125 transition-transform`} />
    <div className="bg-card p-6 rounded-2xl shadow-sm border border-border group-hover:border-primary/30 transition-colors">
      <div className="flex flex-wrap items-center gap-4 mb-2 text-sm text-muted-foreground">
        <span className="flex items-center gap-1 font-medium text-primary">
          <Clock className="w-4 h-4" /> {item.time}
        </span>
        <span className="flex items-center gap-1">
          <MapPin className="w-4 h-4" /> {item.location}
        </span>
      </div>
      <h4 className="text-xl font-bold text-foreground">{item.title}</h4>
    </div>
  </div>
);

const Agenda = () => {
  return (
    <section id="agenda" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-primary mb-4">Agenda del Encuentro</h2>
          <p className="text-lg text-muted-foreground">
            Tres días intensos de debate, movilización y cultura.
          </p>
        </div>

        <Tabs defaultValue="dia1" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 h-14 rounded-full bg-muted p-1">
            <TabsTrigger value="dia1" className="rounded-full text-base font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Día 1</TabsTrigger>
            <TabsTrigger value="dia2" className="rounded-full text-base font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Día 2</TabsTrigger>
            <TabsTrigger value="dia3" className="rounded-full text-base font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Día 3</TabsTrigger>
          </TabsList>
          
          {Object.entries(scheduleData).map(([day, items]) => (
            <TabsContent key={day} value={day} className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="ml-4"
              >
                {items.map((item, idx) => (
                  <TimelineItem key={idx} item={item} />
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Agenda;