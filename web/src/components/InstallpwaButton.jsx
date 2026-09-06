import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

export default function InstallPwaButton({ className = '' }) {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [instalado, setInstalado] = useState(false);

  useEffect(() => {
    // Si ya está corriendo como app instalada, no mostramos el botón
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setInstalado(true);
    }

    const onBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    const onAppInstalled = () => {
      setInstalado(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);
    window.addEventListener('appinstalled', onAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
      window.removeEventListener('appinstalled', onAppInstalled);
    };
  }, []);

  const handleInstalar = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    // outcome es 'accepted' o 'dismissed'
    setDeferredPrompt(null);
  };

  // No mostramos nada si ya está instalada o el navegador no ofreció el prompt todavía
  if (instalado || !deferredPrompt) return null;

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