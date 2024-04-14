
const cacheName = 'your-app-cache';

const assetsToCache = [
  '/',
  '/index.html',
  '/src/app.css',
  '/src/app.jsx',
  '/src/main.jsx',
  '/bell_image.svg', 
  '/spiral_image.svg',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).then(fetchResponse => {
        return caches.open(cacheName).then(cache => {
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        });
      });
    }).catch(error => {
      console.error('Error fetching asset from cache:', error);
    })
  );
});

