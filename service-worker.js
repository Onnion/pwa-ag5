const filesToCache = [
    './gulp/css/all.css',
    './gulp/js/all.js',
    './index.html',
    './assets/js/bootsnav.js',
    './assets/js/bootstrap.min.js',
    './assets/js/custom.js',
    './assets/js/jquery.js',
    './assets/js/magnific-popup.min.js',
    './assets/js/main.js',
    './assets/js/owl.carousel.min.js',
    './assets/js/popper.min.js',
    './assets/js/wow.min.js',
    './assets/js/sw.js',

];

const cacheName = 'pages-cache-v1';

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

// self.addEventListener('fetch', function (event) {
//     event.respondWith(
//         caches.match(event.request)
//         .then(function (response) {
//             return response || fetchAndCache(event.request);
//         })
//     );
// });

function fetchAndCache(url) {
    console.log('url :', url);
    return fetch(url)
        .then(function (response) {
                // Check if we received a valid response
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return caches.open(cacheName)
                    .then(function (cache) {
                        cache.put(url, response.clone());
                        return response;
                    });
        })
        .catch(function (error) {
            console.log('Request failed:', error);
            // You could return a custom offline 404 page here
        });
}