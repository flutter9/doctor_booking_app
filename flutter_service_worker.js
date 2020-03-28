'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "5860ebb14a63986e50eb8c975c4abc2b",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/assets/doctor_pic.png": "f73ac141a379d4b6a965638a1a8e8bdc",
"/assets/assets/email.png": "614fa64806da7e3a66711aca94f073cf",
"/assets/assets/scope.png": "6e287b5f7f96bdf7fd9ccd5daa55d495",
"/assets/assets/call.png": "c5bf6a4576a6d00007d7ec980afc1c84",
"/assets/assets/video_call.png": "2d136c9440ab0404ebbd62bdae18cbd6",
"/assets/assets/img2.png": "b66f6c9d33fb1b4e59bf08c52692bbd9",
"/assets/assets/img1.png": "e3b9055a0a623c240256e1192ea93703",
"/assets/assets/list.png": "53953c9607536b70af16326615fa2e9e",
"/assets/assets/img3.png": "9a52e32ed4d984a8cddb023551459dd7",
"/assets/assets/map.png": "9f5bc7f4f6e93ccd6ba1d7bd5740f30a",
"/assets/assets/mappin.png": "adeb405012e47821664fbaf11278f603",
"/assets/assets/doctor_pic2.png": "487c7f49145f27c290d06bffa730c309",
"/assets/assets/clock.png": "ccbe98c982f78ef192b05985647047b6",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "874b39e3dd7073c1dc2d7e5e7caf47b0",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "03afd6b547de44298a1ad6fa77c1f1ba",
"/web/index.html": "e6e25ef07ab061f3396db68372e4cc59"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
