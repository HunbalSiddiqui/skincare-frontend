let cacheData = 'cacheDataV1'

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                "/static/js/bundle.js",
                "/static/js/vendors~main.chunk.js",
                "/static/js/main.chunk.js",
                "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
                "/index.html",
                "/"
            ])
        })
    )
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then((result) => {
            if (result)
                return result
        })
    )
})