import React from 'react';
import { Instagram, Twitter, Facebook, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">39° ENCUENTRO PLURINACIONAL</h3>
            <p className="text-primary-foreground/80 max-w-md mb-6 text-lg italic">
              "El Encuentro somos todas, todes, todos."
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="#encuentro" className="text-primary-foreground/80 hover:text-white transition-colors">El Encuentro</a></li>
              <li><a href="#talleres" className="text-primary-foreground/80 hover:text-white transition-colors">Talleres y Ejes</a></li>
              <li><a href="#agenda" className="text-primary-foreground/80 hover:text-white transition-colors">Agenda</a></li>
              <li><a href="#sede" className="text-primary-foreground/80 hover:text-white transition-colors">Sede y Logística</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-4">Contacto</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>prensa@encuentro39.org</li>
              <li>info@encuentro39.org</li>
              <li className="pt-4">
                <Button variant="outline" className="bg-transparent border-white/20 hover:bg-white/10 text-white w-full">
                  Dossier de Prensa
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© 2026 Comisión Organizadora del 39° Encuentro Plurinacional.</p>
          <p className="flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-secondary" /> por la comunidad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;