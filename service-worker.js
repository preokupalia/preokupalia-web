/* PreOkupalia: consulta la versión publicada y conserva una copia para uso sin conexión. */
const CACHE_NAME = 'preokupalia-pwa-v5';
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './preokupalia-icon-192.png',
  './preokupalia-icon-512.png',
  './guia_instalar_preokupalia.webp'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key.startsWith('preokupalia-pwa-') && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Prioriza lo publicado en GitHub Pages; usa la copia guardada si no hay conexión.
  event.respondWith(
    fetch(request, { cache: 'no-store' })
      .then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          event.waitUntil(
            caches.open(CACHE_NAME).then(cache => cache.put(request, copy))
          );
        }
        return response;
      })
      .catch(async () => {
        const cached = await caches.match(request);
        if (cached) return cached;
        if (request.mode === 'navigate' || request.destination === 'document') {
          const fallback = await caches.match('./index.html');
          if (fallback) return fallback;
        }
        return Response.error();
      })
  );
});
