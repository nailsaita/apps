import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';
import gacetillas from '@/data/gacetillas.js';
import { Helmet } from "react-helmet";

export default function GacetillasPage() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative min-h-screen bg-[#FFF1E3] text-[#343230]">
      <Helmet>
        <title>Gacetillas</title>
      </Helmet>

      <CountdownBanner />
      <Navbar />
      <TitleSection title="Gacetillas" />

      <main className="relative mx-auto max-w-5xl px-4 pb-32 pt-4 sm:px-6 lg:px-8">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          className="bg-white/70 rounded-3xl p-6 md:p-8 border border-[#eadeed] shadow-xl shadow-[#813893]/5 backdrop-blur-sm"
        >
          <ul className="space-y-4">
            {gacetillas.map((item) => (
              <li key={item.archivo}>
                <a
                  href={`/docs/${item.archivo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between gap-3 rounded-xl border border-[#eadeed] bg-[#faf7fb] p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-[#d5bddb]"
                >
                  <span className="text-base font-bold text-[#343230]">{item.titulo}</span>
                  <ExternalLink className="mt-1 h-5 w-5 shrink-0 text-[#813893]" />
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