import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'El Encuentro', href: '#encuentro' },
    { label: 'Talleres y Ejes', href: '#talleres' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Sede y Logística', href: '#sede' },
    { label: 'Prensa', href: '#prensa' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-50">
          <span className={`font-heading text-2xl md:text-3xl font-bold tracking-wider ${isScrolled ? 'text-primary' : 'text-white'}`}>
            38° ENCUENTRO
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('#')) {
                  e.preventDefault();
                  scrollToSection(link.href);
                }
              }}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
            Quiero participar
          </Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className={isScrolled ? 'text-foreground' : 'text-white'}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-6 mt-12">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }
                  }}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-4">
                Quiero participar
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;