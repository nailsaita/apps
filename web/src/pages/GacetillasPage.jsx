import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';
import gacetillas from '@/data/gacetillas.js';
import Helmet from "react-helmet";


export default function GacetillasPage() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  return (
    <div className="relative bg-[#FFF1E3] text-[#343230] min-h-screen">
      <Helmet>
        <title>Gacetillas</title>
      </Helmet>

      <CountdownBanner />
      <Navbar />
      <TitleSection title="Gacetillas" />
      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
                <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          className="mb-16 bg-white/70 rounded-3xl p-6 md:p-8 border border-[#eadeed] shadow-xl shadow-[#813893]/5 backdrop-blur-sm"
        >
        <ul className="space-y-4">
          {gacetillas.map((item) => (
            <li key={item.archivo}>
              <a
                href={`/docs/${item.archivo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-3 rounded-lg border border-[#D9C7A7] bg-white/80 p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:bg-white "
              >
                <span className="text-base font-bold text-[#343230]">{item.titulo}</span>
                <ExternalLink className="mt-1 h-5 w-5 shrink-0 text-[#B24A3A]" />
              </a>
            </li>
          ))}
        </ul>
        </motion.section>
      </main>

      <FooterSection />
    </div>
  );
}