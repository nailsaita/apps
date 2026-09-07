import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

export default function InstallPwaButton({ className = '' }) {
  return (
    <button
      onClick={handleInstalar}
      className={`inline-flex items-center gap-2 bg-[#813893] text-white font-bold px-4 py-2 rounded-full hover:bg-[#662c74] transition-colors ${className}`}
    >
      <Download size={16} />
      Instalar app
    </button>
  );
}