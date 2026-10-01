import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';
import galeriaNotas from '@/data/galeriaNotas.js';
import Helmet from "react-helmet";

export default function MapaPage() {

  return (
    <div className="relative bg-background text-slate-100">
      <Helmet>
          <title>Mapa del Encuentro</title>
      </Helmet>
      <Navbar hasTopSpace={false}/>
      <iframe src="https://www.google.com/maps/d/embed?mid=1ACKW_W7BXV8_jr2GrRomUidKBy07W2E&ehbc=2E312F"  style={{ width: '100%', height: 'calc(100vh - 56px)', border: 'none', marginTop: '56px' }}></iframe>
    </div>
  );
}