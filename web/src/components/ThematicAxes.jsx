import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ShieldAlert, HeartPulse, Rainbow, Briefcase, 
  TentTree, Leaf, Baby, GraduationCap, 
  Radio, Activity, Scale, Palette, 
  Laptop, Gavel, Users, Globe
} from 'lucide-react';

const axes = [
  { icon: ShieldAlert, title: 'Violencia de Género', desc: 'Estrategias de prevención y erradicación.' },
  { icon: HeartPulse, title: 'Salud y Derechos Reproductivos', desc: 'Autonomía sobre nuestros cuerpos.' },
  { icon: Rainbow, title: 'Disidencias y Diversidad', desc: 'Luchas del colectivo LGBTIQ+.' },
  { icon: Briefcase, title: 'Trabajo y Economía', desc: 'Economía feminista y popular.' },
  { icon: TentTree, title: 'Pueblos Originarios', desc: 'Territorio, identidad y plurinacionalidad.' },
  { icon: Leaf, title: 'Medioambiente', desc: 'Ecofeminismo y defensa del territorio.' },
  { icon: Baby, title: 'Niñez y Adolescencia', desc: 'Derechos y crianzas libres.' },
  { icon: GraduationCap, title: 'Educación', desc: 'ESI y pedagogías feministas.' },
  { icon: Radio, title: 'Comunicación', desc: 'Medios comunitarios y redes.' },
  { icon: Activity, title: 'Sexualidades', desc: 'Deseo, placer y vínculos.' },
  { icon: Users, title: 'Cuerpo y Salud', desc: 'Gordofobia y salud mental.' },
  { icon: Scale, title: 'Políticas Públicas', desc: 'Estado y presupuesto con perspectiva.' },
  { icon: Palette, title: 'Cultura y Arte', desc: 'Expresiones artísticas y resistencia.' },
  { icon: Laptop, title: 'Tecnología', desc: 'Ciberfeminismo y brecha digital.' },
  { icon: Gavel, title: 'Justicia y DDHH', desc: 'Reforma judicial transfeminista.' },
  { icon: Globe, title: 'Internacionalismo', desc: 'Luchas feministas en el mundo.' },
];

const ThematicAxes = () => {
  return (
    <section id="talleres" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary mb-4">Ejes Temáticos y Talleres</h2>
          <p className="text-lg text-muted-foreground">
            Los talleres son el corazón del Encuentro. Espacios horizontales, soberanos y democráticos donde compartimos experiencias y construimos consensos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {axes.map((axis, index) => (
            <motion.div
              key={axis.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-card p-6 rounded-2xl border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <axis.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{axis.title}</h3>
              <p className="text-sm text-muted-foreground">{axis.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
            Ver lista completa de talleres
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ThematicAxes;