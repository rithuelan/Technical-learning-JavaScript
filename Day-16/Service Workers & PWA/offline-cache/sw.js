const CACHE_NAME = 'offline-cache-v1';
const urlsToCache = ['/', '/index.html', '/styles.css'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});

//run
//npm init -y
//npm install -g http-server
//http-server -p 8080