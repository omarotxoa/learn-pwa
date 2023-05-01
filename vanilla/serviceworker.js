self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("pwa-assets").then(cache => {
            return cache.addAll([
                "./", "styles.css", "script.js", 
                "../img/logo.png", "../img/logo-512.png"
            ]);
        })
    ); 
 });

 self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
 });