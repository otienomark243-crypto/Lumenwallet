self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('lumen-wallet').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        'https://cdn-icons-png.flaticon.com/512/2092/2092663.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
