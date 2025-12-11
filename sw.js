const CACHE_NAME = 'devcyber-v2';

const STATIC_ASSETS = [
  '.',
  'index.html',
  'style.css',
  'script.js',
  'manifest.json',
  'offline.html',
  'icon-192.png',
  'icon-512.png'
];

// INSTALL
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// ACTIVATE
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => clients.claim())
  );
});

// FETCH
self.addEventListener('fetch', event => {
  const req = event.request;

  // --- Cache-first pour les images ---
  if (req.destination === 'image') {
    event.respondWith(
      caches.match(req).then(cacheRes =>
        cacheRes ||
        fetch(req)
          .then(networkRes => {
            return caches.open(CACHE_NAME).then(cache => {
              cache.put(req, networkRes.clone());
              return networkRes;
            });
          })
          .catch(() => caches.match('offline.html'))
      )
    );
    return;
  }

  // --- Network-first pour tout le reste ---
  event.respondWith(
    fetch(req)
      .then(networkRes => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(req, networkRes.clone());
          return networkRes;
        });
      })
      .catch(() =>
        caches.match(req).then(res => res || caches.match('offline.html'))
      )
  );
});