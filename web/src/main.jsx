import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { registerSW } from 'virtual:pwa-register';

ReactDOM.createRoot(document.getElementById('root')).render(
	<App />
);

// Service worker: reemplaza al registro manual anterior.
// Busca versión nueva cada 10 minutos y cada vez que se vuelve a la app;
// si hay una nueva, la página se recarga sola una vez.
registerSW({
	immediate: true,
	onRegisteredSW(swUrl, reg) {
		if (!reg) return;
		const chequear = async () => {
			if (reg.installing || !navigator.onLine) return;
			try {
				const r = await fetch(swUrl, { cache: 'no-store' });
				if (r.status === 200) await reg.update();
			} catch {}
		};
		setInterval(chequear, 10 * 60 * 1000);
		document.addEventListener('visibilitychange', () => {
			if (document.visibilityState === 'visible') chequear();
		});
	},
	onRegisterError(err) {
		console.error('Error registrando el service worker:', err);
	},
});