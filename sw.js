const CACHE = "tecmaz-v2";

const ASSETS = [
  "./",
  "./index.html",
  "./manifesto.webmanifest",
  "./ícone-192.png",
  "./ícone-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
