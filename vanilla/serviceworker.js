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