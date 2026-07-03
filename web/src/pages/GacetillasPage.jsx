import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';
import galeriaNotas from '@/data/galeriaNotas.js';

export default function GacetillasPage() {

  return (
    <div className="relative bg-background text-slate-100">
      <CountdownBanner />
      <Navbar />
      <TitleSection
        title="Gacetillas"
      />
      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      </main>

      <FooterSection />
    </div>
  );
}