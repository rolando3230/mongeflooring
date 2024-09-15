'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3fce6e3668c34303ad205a8af8445da4",
"assets/AssetManifest.bin.json": "bd689066d2019ca915a6f8c3e2a39246",
"assets/AssetManifest.json": "1937ead1f081281cb25486211e48c3d7",
"assets/assets/images/1.jpg": "16bd9f10afbb1df044d1a9bb81069a92",
"assets/assets/images/10.jpg": "6cf9111e4492e7ec3526354be7e1a3aa",
"assets/assets/images/11.jpg": "2a6364659eac2b421788ef903bdc1d34",
"assets/assets/images/12.jpg": "7873ea7e3c862655f5e850788ce9c6e0",
"assets/assets/images/2.jpg": "3d05ee009e0b2203fb3b1a4ccedad987",
"assets/assets/images/21.jpg": "034ea6e20e7ea01e9fd37b743aa9022f",
"assets/assets/images/22.jpg": "a2482ed993ec7c13613f55921eb38129",
"assets/assets/images/23.jpg": "e30e55c9913859da4a17bee3e9a5037a",
"assets/assets/images/24.jpg": "4496ac6fa4a81dd3f5e68dfd04e9d7fe",
"assets/assets/images/25.jpg": "68015b9c798d5ca9b40b266e29ab3d9f",
"assets/assets/images/26.jpg": "7ac0d4eadf7ba724858324ca24a75a2e",
"assets/assets/images/27.jpg": "4b7042b5c079bcce5fc7db0eb5e7a7f5",
"assets/assets/images/28.jpg": "f00bb42e8d4d5be1eae784fec2840edd",
"assets/assets/images/29.jpg": "2a1bc44169d598a310fffdd9401d701b",
"assets/assets/images/3.jpg": "b036e2bc30f093fc66972fe187869bcc",
"assets/assets/images/4.jpg": "2b8e91db362870e4dc49511f1f90d6e4",
"assets/assets/images/5.jpg": "7ac0d4eadf7ba724858324ca24a75a2e",
"assets/assets/images/6.jpg": "1d4cde9602f27a15f5ecaa454fb14242",
"assets/assets/images/7.jpg": "6fe2a049a27e55d7514836198b55762d",
"assets/assets/images/8.jpg": "e7fdf8dc15ad8eafd6390e47379cda6c",
"assets/assets/images/9.jpg": "30159d6f64dd5c89c81774f3867d46ad",
"assets/assets/images/A.png": "7e97a58db6c9c1a03b38b53f449ef2b7",
"assets/assets/images/B.png": "1a78dd21d8c46f73bcebf769cd4c837f",
"assets/assets/images/E.png": "3021ea23f751084cc9e4b5aae18a9948",
"assets/assets/images/F.png": "c11064e71351d4f220f79c2be124e0ed",
"assets/assets/images/fb.png": "3d0ddc4485da120fdda9bd558bf99e0c",
"assets/assets/images/FF.png": "aeacd34a5be92133258f05653cfb429f",
"assets/assets/images/G.png": "1ed59251756a82909bb511ac816e97ac",
"assets/assets/images/instagram.png": "f8ba051f5e01376a4b560e110d0ea1be",
"assets/assets/images/k.jpg": "bfabc32f05355e66dd291645992b7db3",
"assets/assets/images/linked.jpg": "f8ebf8624c2fb9971272bf0613aadfa3",
"assets/assets/images/monge.jpg": "25e70bade4e8b8780a7e62b76b9bc2d5",
"assets/assets/images/twitter.png": "e9e9b57fcd9426977c9dd6ab6d7f0092",
"assets/assets/images/youtube.png": "acf68c38b8fb452fe033e36283b5829e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "910640f9665013d9709e9dd1533c4bbb",
"assets/NOTICES": "a210a21d3303150606ca2520978fbcd9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4be1c79fd251731020dd7e453b2bedc1",
"/": "4be1c79fd251731020dd7e453b2bedc1",
"main.dart.js": "cb4412fea0725a2a26e7ea0394c877b5",
"manifest.json": "39b48531e457d66b3f5a772e6d8446a5",
"version.json": "5130755194d7b410ab9d05242b9006a0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
