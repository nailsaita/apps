import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Music, Palette, Tent } from 'lucide-react';

const activities = [
  {
    title: 'Festival de Apertura',
    category: 'Música en vivo',
    image: 'https://images.unsplash.com/photo-1688304898292-c1e9695a6b4d',
    icon: Music,
  },
  {
    title: 'Feria de Economía Popular',
    category: 'Emprendimientos',
    image: 'https://images.unsplash.com/photo-1523791906223-5cef82f180ea',
    icon: Tent,
  },
  {
    title: 'Intervenciones Callejeras',
    category: 'Arte Público',
    image: 'https://images.unsplash.com/photo-1676164541406-909ae678b5bc',
    icon: Palette,
  },
];

const CulturalActivities = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary mb-4">Grilla Cultural</h2>
            <p className="text-lg text-muted-foreground">
              El Encuentro también es fiesta, arte y celebración. Disfrutá de la grilla de actividades culturales que acompañan los debates.
            </p>
          </div>
          
          {/* Audio Player Mock */}
          <div className="bg-card border border-border rounded-full px-6 py-3 flex items-center gap-4 shadow-sm">
            <button className="text-primary hover:scale-110 transition-transform" aria-label="Reproducir canción oficial">
              <PlayCircle className="w-8 h-8" />
            </button>
            <div>
              <p className="text-sm font-bold leading-none">Canción Oficial 39°</p>
              <p className="text-xs text-muted-foreground">Artistas Plurinacionales</p>
            </div>
            <div className="w-24 h-1 bg-muted rounded-full ml-4 overflow-hidden">
              <div className="w-1/3 h-full bg-secondary rounded-full" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((act, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <img 
                src={act.image} 
                alt={act.title} 
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-secondary/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                    <act.icon className="w-3 h-3" /> {act.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">{act.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CulturalActivities;