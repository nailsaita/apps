import React from 'react';
import { motion } from 'framer-motion';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';
import galeria2007 from '@/data/galeria2007.js';
import { Helmet } from "react-helmet";

export default function Galeria2007Page() {
  const images = galeria2007.filter((item) => item?.Name && !['files.json', 'Set-Content'].includes(item.Name));

  return (
    <div className="relative min-h-screen bg-[#FFF1E3] text-[#343230]">
      <Helmet>
        <title>Fotos del Encuentro 2007</title>
      </Helmet>
      <CountdownBanner />
      <Navbar />
      <TitleSection title="Fotos del Encuentro 2007" />

      <main className="relative mx-auto max-w-6xl px-4 pb-32 pt-4 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-[#eadeed] bg-white/70 p-6 md:p-8 shadow-xl shadow-[#813893]/5 backdrop-blur-sm">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((item, index) => (
              <motion.article
                key={item.Name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="overflow-hidden rounded-2xl border border-[#eadeed] bg-[#faf7fb] shadow-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white/60">
                  <img
                    src={`/images/2007/${item.Name}`}
                    alt={item.Name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 ease-out hover:scale-105"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}