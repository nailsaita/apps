import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    const targetDate = new Date('2026-10-10T00:00:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
          minutes: Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),
          seconds: Math.floor(distance % (1000 * 60) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1678928608031-3eb501c794ab" alt="Multitud en marcha feminista" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-black/90 mix-blend-multiply" />
      </div>

      {/* Animated SVGs (Abstract Pañuelos) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30">
        <motion.svg className="absolute top-1/4 left-1/4 w-64 h-64 text-secondary" viewBox="0 0 200 200" animate={{
        rotate: 360,
        scale: [1, 1.1, 1]
      }} transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}>
          <path fill="currentColor" d="M45.7,-76.4C58.9,-69.3,69.3,-55.4,77.4,-40.5C85.5,-25.6,91.3,-9.7,89.4,5.5C87.5,20.7,77.9,35.2,66.4,47.1C54.9,59,41.5,68.3,26.7,74.5C11.9,80.7,-4.3,83.8,-19.8,80.4C-35.3,77,-50.1,67.1,-61.5,54.2C-72.9,41.3,-80.9,25.4,-83.6,8.7C-86.3,-8,-83.7,-25.5,-74.5,-39.6C-65.3,-53.7,-49.5,-64.4,-34.4,-70.6C-19.3,-76.8,-4.9,-78.5,10.4,-77.4C25.7,-76.3,41,-72.4,45.7,-76.4Z" transform="translate(100 100)" />
        </motion.svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center text-white">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium tracking-wide uppercase">Faltan {timeLeft.days} días</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-balance drop-shadow-lg">
            39° ENCUENTRO PLURINACIONAL
          </h1>
          
          <p className="text-xl md:text-2xl font-medium mb-4 text-white/90 text-balance">
            Mujeres, Lesbianxs, Trans, Travestis, Bisexuales, Intersexuales y No Binaries
          </p>
          
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            39 años de organización y lucha — una historia colectiva que no se detiene.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <div className="flex items-center gap-3 bg-black/30 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
              <Calendar className="w-6 h-6 text-secondary" />
              <div className="text-left">
                <p className="text-sm text-white/60 uppercase tracking-wider">Fecha</p>
                <p className="font-semibold">10, 11 y 12 de Octubre</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-black/30 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
              <MapPin className="w-6 h-6 text-accent" />
              <div className="text-left">
                <p className="text-sm text-white/60 uppercase tracking-wider">Sede</p>
                <p className="font-semibold">Córdoba</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 h-14 text-lg w-full sm:w-auto">
              Ver programa completo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 rounded-full px-8 h-14 text-lg w-full sm:w-auto">
              Cómo llegar
            </Button>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;