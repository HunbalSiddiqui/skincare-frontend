let cacheData = 'cacheDataV1'

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                "/static/js/bundle.js",
                "/static/js/vendors~main.chunk.js",
                "/static/js/main.chunk.js",
                "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
                "https://source.unsplash.com/random",
                "/index.html",
                "/",
                "https://jsonplaceholder.typicode.com/users",
                "/signup",
                "/signin",
            ])
        })
    )
})

self.addEventListener('fetch', (event) => {
    // if network is not available.
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request)
            .then((result) => {
                if (result)
                    return result
            })
        )
    }

})