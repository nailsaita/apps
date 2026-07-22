import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ChevronDown, ChevronRight, ChevronLeft, Download, ExternalLink, Mail, Instagram, Facebook, Heart, Music, Utensils, Bus, Home, AlertCircle, X, ArrowRight, Clock, Users, Star, Menu, Phone, Search } from 'lucide-react';


function TitleSection({ title, subtitle }) {
  return <section id="hero" className="flex flex-col items-center justify-center text-center px-4 pt-16 pb-24 relative overflow-hidden bg-gradient-to-br from-purple-950 via-purple-800 to-green-900"
  style={{top:100}}>
      {/* Fondo decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div initial={{
      opacity: 0,
      y: 40
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8
    }} className="relative z-10 max-w-5xl">
        <h1 className="text-white font-black leading-[1.05] mb-6 text-3xl md:text-5xl lg:text-6xl" style={{
        
      }}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/75 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>;
}

export default TitleSection;