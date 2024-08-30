'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7a7a7a9af453eabdfd128abde64a5ae2",
"assets/AssetManifest.bin.json": "6ad6eb502ca310a442ed8c8029369c5e",
"assets/AssetManifest.json": "dbaced5be8c456a2cc26c693c890b6f0",
"assets/assets/fonts/montserrat/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/assets/fonts/montserrat/Montserrat-ExtraBold.ttf": "9e07cac927a9b4d955e2138bf6136d6a",
"assets/assets/fonts/montserrat/Montserrat-Light.ttf": "94fbe93542f684134cad1d775947ca92",
"assets/assets/fonts/montserrat/Montserrat-Medium.ttf": "bdb7ba651b7bdcda6ce527b3b6705334",
"assets/assets/fonts/montserrat/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/assets/images/backgrounds/onboarding1.png": "07bca092276f865c0f23ea7ee3c4bd8a",
"assets/assets/images/icons/add-team.svg": "d9e058f0d22e498fc6c259d42bc43f7d",
"assets/assets/images/icons/arrow-left.svg": "30aa633482655f900ba4eab316555c54",
"assets/assets/images/icons/arrow-right.svg": "79c93d9afbc306627f3e0dab9f655ac7",
"assets/assets/images/icons/arrow_head_down.svg": "a169ca5711c9b0cea789e24de9314e9e",
"assets/assets/images/icons/arrow_head_right.svg": "9d453815b699ce61feaded6f6e61e618",
"assets/assets/images/icons/backward.svg": "4a6f9134e32b222cd8caf5a4dea0e86c",
"assets/assets/images/icons/bell.svg": "666fde4d900bfe693ef97b7283c5faee",
"assets/assets/images/icons/booking.svg": "6c50735af827c7fcc6257d75c125d762",
"assets/assets/images/icons/calendar.svg": "b30ed96f8abce773be7e37257531afbd",
"assets/assets/images/icons/chat.svg": "13a17e04dc255cdba63a56f9e54ea1dc",
"assets/assets/images/icons/clock.svg": "c0721faad4d67fa0f25068ca137a2cbe",
"assets/assets/images/icons/cross.svg": "c1616128c392d0fba05e3d456e944bbf",
"assets/assets/images/icons/del.svg": "e7ed5e290f6fbbca0024f1129a6b7a19",
"assets/assets/images/icons/delete.svg": "fe3589156793bc20054870189af8b571",
"assets/assets/images/icons/delete1.svg": "1cac32f3213dbe45493ff283905da84a",
"assets/assets/images/icons/emoji.svg": "88711edd47b959e831aa8ccc63321efd",
"assets/assets/images/icons/eye.svg": "ca96dff76260714f9eb6ff5193013daf",
"assets/assets/images/icons/eye_close.svg": "2f57eb86dbcb181ad29c8a6445536b27",
"assets/assets/images/icons/forward.svg": "15a50cfe374f7535a958b65ff8af147e",
"assets/assets/images/icons/game_icon.svg": "ae81792b1acece38739fd14380a81a0b",
"assets/assets/images/icons/ground_image.png": "4dfe0f2e184eaea0ed272bdbe4d66d93",
"assets/assets/images/icons/home.svg": "91adadcc891b2f38feaf4b2a6ecf9f64",
"assets/assets/images/icons/location.svg": "f4611a0f4a50487170839bc6828b3f8b",
"assets/assets/images/icons/logout.svg": "311c4c624196061ee4ac14451fc99fcf",
"assets/assets/images/icons/logout1.svg": "951525c8d8b1dc9d7687aced9e1ef9c5",
"assets/assets/images/icons/logoutIcon.svg": "6452516269014595772eb767f3b3dcbb",
"assets/assets/images/icons/message.png": "782ff2a864ce7c7923d2fbe57c295c65",
"assets/assets/images/icons/message.svg": "887cd2d421fbb9c5498a1f86d3528a40",
"assets/assets/images/icons/pencil-edit.svg": "6eb4849717b6cecd6a4d4f37c99caa32",
"assets/assets/images/icons/pencil.svg": "bc46ff31584bc7c1a879dfc5afe14c66",
"assets/assets/images/icons/profile.svg": "131c59f5adb54c32c7d9794678601a7c",
"assets/assets/images/icons/profilePic.png": "1efd8b93fc5091c8fdb906edb09fb5e2",
"assets/assets/images/icons/search.svg": "73fe6b14376375057f0a139cb91fd3e3",
"assets/assets/images/icons/send.svg": "f6973d4723b34ff72eedc532f64d8d15",
"assets/assets/images/icons/sendIcon.svg": "4fcb2c8f953b99ab3cf46c8e460d1360",
"assets/assets/images/icons/settings.svg": "5abba01a25f3a63cc95e16a5d08fd668",
"assets/assets/images/icons/sport_type_icon.svg": "3b5494a6ea61db56af07950de5daae3c",
"assets/assets/images/icons/square-lock.svg": "968e3f342aa4c8d001be44c5cf797dd8",
"assets/assets/images/icons/tennis-ball.svg": "639d980098b120c48213e9153539a20f",
"assets/assets/images/icons/user.svg": "3cf0db877fbd924c8558c5735a51eb25",
"assets/assets/images/icons/user_management.svg": "aaebb570bcc282306e1e9a761d134ff8",
"assets/assets/images/icons/view.svg": "ccc45e05a365da1f0a2d6f3a1a68dc49",
"assets/assets/images/icons/viewuser.png": "0b165ada344c7591d73cf8ed5bf468a4",
"assets/assets/images/logos/logo.svg": "7d53d1dfd1edf5e89388e26807460441",
"assets/assets/images/png/ground_image.png": "4dfe0f2e184eaea0ed272bdbe4d66d93",
"assets/FontManifest.json": "afb4b30d970db2315abc47c9f3bb295b",
"assets/fonts/MaterialIcons-Regular.otf": "56980524e3ab0650886c87d874e25c61",
"assets/NOTICES": "0eb1ba54299980546a517485b39c85a0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "be445b8740c1712a0d82b243f576a8b2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "000a9f89a6fe80a82fa0351b1a2ad26e",
"/": "000a9f89a6fe80a82fa0351b1a2ad26e",
"main.dart.js": "fa42a73c5c0cbe771af93ba26caa94a6",
"manifest.json": "2e56cd3238be26738da28ed553ff8747",
"version.json": "a70d47abbecfdb787c21523870fc543e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
