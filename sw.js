// Sube el número de versión cuando cambies archivos para forzar la actualización del caché.
const CACHE = "mantra-v2";
const FILES = [
  "./",
  "index.html",
  "style.css",
  "mantras.js",
  "app.js",
  "manifest.json",
  "icon.svg",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-192.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Caché primero (funciona sin conexión) y actualiza el caché en segundo plano.
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;

  e.respondWith(
    caches.open(CACHE).then(async (cache) => {
      // ignoreSearch: index.html?compact=1 también sale del caché.
      const hit = await cache.match(req, { ignoreSearch: true });
      const net = fetch(req)
        .then((res) => {
          if (res.ok) cache.put(req, res.clone());
          return res;
        })
        .catch(() => null);

      if (hit) {
        e.waitUntil(net);
        return hit;
      }
      const res = await net;
      if (res) return res;
      // Sin red y sin caché: para navegaciones, devuelve la página principal.
      if (req.mode === "navigate") return cache.match("index.html");
      return Response.error();
    })
  );
});
