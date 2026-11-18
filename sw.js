// Service worker de Andar
// Guarda una copia de la app en el celular para que abra aunque no haya conexión.
//
// Cada vez que publiques cambios en la app, subí el número de VERSION.
// Así los celulares que ya la tienen instalada bajan la versión nueva.
// Tiene que coincidir con VERSION_APP en index.html, que es la que se ve al pie del inicio.

const VERSION = "andar-v9";

const ARCHIVOS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./fonts/figtree.woff2",
  "./fonts/bricolage-grotesque.woff2",
  "./icons/icon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png"
];

// Instalación: guarda todos los archivos
self.addEventListener("install", evento => {
  evento.waitUntil(
    caches.open(VERSION)
      .then(cache => cache.addAll(ARCHIVOS))
      .then(() => self.skipWaiting())
  );
});

// Activación: borra solo las copias viejas de Andar.
// El dominio maximus163.github.io lo comparten otras apps, y sus copias no se tocan.
self.addEventListener("activate", evento => {
  evento.waitUntil(
    caches.keys()
      .then(claves => Promise.all(claves
        .filter(c => c.startsWith("andar-") && c !== VERSION)
        .map(c => caches.delete(c))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", evento => {
  const pedido = evento.request;
  if (pedido.method !== "GET") return;
  if (new URL(pedido.url).origin !== self.location.origin) return;   // el servidor de prueba va directo, sin copia

  if (pedido.mode === "navigate") {
    // La página: primero internet, para tener siempre la última versión; sin conexión, la copia guardada.
    // "no-cache" obliga a preguntarle al servidor: GitHub Pages deja que el navegador guarde la página
    // 10 minutos, y sin esto se seguía viendo la versión anterior justo después de publicar.
    evento.respondWith(
      fetch(pedido.url, { cache: "no-cache", credentials: "same-origin" })
        .then(respuesta => {
          if (respuesta.ok) {
            const copia = respuesta.clone();
            caches.open(VERSION).then(cache => cache.put("./index.html", copia));
          }
          return respuesta;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  // El resto (íconos, manifest): primero la copia guardada
  evento.respondWith(
    caches.match(pedido).then(guardado => guardado || fetch(pedido))
  );
});
