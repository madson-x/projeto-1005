var CACHE_NAME = 'static-v1';

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll([
                '/',
                '/css/estilos.css',
                '/images/icon-72x72.png',
                '/images/icon-96x96.png',
                '/images/icon-128x128.png',
                '/images/icon-144x144.png',
                '/images/icon-152x152.png',
                '/images/icon-192x192.png',
                '/images/icon-384x384.png',
                '/images/icon-512x512.png',
                '/img/faviicon_1.jpg',
                '/img/faviicon.jpg',
                '/img/logo_l_default.jpg',
                '/img/logo_l_device.jpg',
                '/img/logo_sm_device.jpg',
                '/js/comandos.js',
                '/adicionar.html',
                '/manifest.json',
                '/sw.js',
                '/index.html',
            ]);
        })
    )
});

self.addEventListener('activate', function activator(event) {
    event.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(keys
                .filter(function (key) {
                    return key.indexOf(CACHE_NAME) !== 0;
                })
                .map(function (key) {
                    return caches.delete(key);
                })
            );
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (cachedResponse) {
            return cachedResponse || fetch(event.request);
        })
    );
});