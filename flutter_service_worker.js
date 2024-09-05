'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9b1e51eaa7b07f32c1fb5521c5d4a7fe",
"version.json": "a70d47abbecfdb787c21523870fc543e",
"index.html": "8640bad5a084d4180834400bee6b235e",
"/": "8640bad5a084d4180834400bee6b235e",
"main.dart.js": "680d1cd57f78d75ad15aee9aeb555236",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ef273cd67caf9e1c6a999716c5729081",
"assets/AssetManifest.json": "286c03648a743e43f28d7a22e2d4cf6b",
"assets/NOTICES": "f8be9e482b8da053b1039fab22aaf9d6",
"assets/FontManifest.json": "afb4b30d970db2315abc47c9f3bb295b",
"assets/AssetManifest.bin.json": "4d63e642e51a777db1dea973202f2c6d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "fcef51762c8083e336f69ba38db4f0f0",
"assets/fonts/MaterialIcons-Regular.otf": "4fa7f835ea7edbb7f146ef7cc17dfea9",
"assets/assets/images/logos/logo.svg": "5c3c6e02e47f07cf51e4d907131c7cfb",
"assets/assets/images/png/ground_image.png": "4dfe0f2e184eaea0ed272bdbe4d66d93",
"assets/assets/images/backgrounds/onboarding1.png": "07bca092276f865c0f23ea7ee3c4bd8a",
"assets/assets/images/icons/search.svg": "86dcd2022a07888f9bbf148eb621a635",
"assets/assets/images/icons/tennis-ball.svg": "32716d7905d10bd9589b62a8545d9c8c",
"assets/assets/images/icons/arrow_head_right.svg": "c67f20587eb2866dcf22efd4fcb6b6ac",
"assets/assets/images/icons/ground_image.png": "4dfe0f2e184eaea0ed272bdbe4d66d93",
"assets/assets/images/icons/user.svg": "fe820e51268cf276af5f4ed6b55a0809",
"assets/assets/images/icons/home.svg": "4b2864e95180d24f0c5ca17255dbe91d",
"assets/assets/images/icons/logout.svg": "b9efc73b5e1323f04ae6a690fb1d5382",
"assets/assets/images/icons/arrow-right.svg": "51ecbbadd9986eae3244c61acbeb65e6",
"assets/assets/images/icons/settings.svg": "0b033aa50dbce16d73779304fce7df0b",
"assets/assets/images/icons/eye_close.svg": "1b23472a6d433fe7c89838bb410b5a07",
"assets/assets/images/icons/emoji.svg": "fcd199231b04e132bb1630a5a03d9e08",
"assets/assets/images/icons/profilePic.png": "1efd8b93fc5091c8fdb906edb09fb5e2",
"assets/assets/images/icons/viewuser.png": "0b165ada344c7591d73cf8ed5bf468a4",
"assets/assets/images/icons/bell.svg": "e0e160207949231e98f66a5f96fb59a1",
"assets/assets/images/icons/logout1.svg": "9acaff61efd6cb62a11db5bc2d027cf9",
"assets/assets/images/icons/booking.svg": "ff019e8213bcd5575c4ecbc70e1fc49b",
"assets/assets/images/icons/delete1.svg": "2e96628d179475dcd6abed131c4d1946",
"assets/assets/images/icons/user_management.svg": "f5306b89a84cef6323eccc50fe95963b",
"assets/assets/images/icons/game_icon.svg": "ca6f2d98f4e708784d2e5e9f27bbba94",
"assets/assets/images/icons/message.svg": "9591105b139fdedd1ca7e3df577287af",
"assets/assets/images/icons/backward.svg": "655a3fea7696ab138afed1c0bb076910",
"assets/assets/images/icons/chat.svg": "54c12fb887ee0ae422e935d9b032ffc3",
"assets/assets/images/icons/logoutIcon.svg": "e61929b49b9a80e5c4c34fe463fd6963",
"assets/assets/images/icons/send.svg": "a8eaeae63ecb97d2507f2815713aa5d2",
"assets/assets/images/icons/sport_type_icon.svg": "77bf726a947b6459ec187eef0fb5c26e",
"assets/assets/images/icons/add-team.svg": "d13038fb1ef4c42122dc8aef26781c9f",
"assets/assets/images/icons/sendIcon.svg": "1d4c9de8dda322297751f673f7ca18a6",
"assets/assets/images/icons/pencil.svg": "f1a6851dbaf137b9de91a022a165e285",
"assets/assets/images/icons/pencil-edit.svg": "36f13f040dafc16eea19cbd945dc382d",
"assets/assets/images/icons/delete.svg": "236c7a4887ea9a2dafe41cd49cb4582d",
"assets/assets/images/icons/clock.svg": "8215e6bfaa5d8b5108915a2e1ebc2b0c",
"assets/assets/images/icons/eye.svg": "3ac6646ade08b4085676914c61c66ef0",
"assets/assets/images/icons/location.svg": "148b20eb36240da8f0e698b119e176aa",
"assets/assets/images/icons/profile.svg": "41bd6e8c65f91da6de546d221a05c208",
"assets/assets/images/icons/view.svg": "50105a920048b5ad1357a2ac0dc3cd9b",
"assets/assets/images/icons/arrow_head_down.svg": "8671084a034599bf7d7d6dea76f84aa0",
"assets/assets/images/icons/calendar.svg": "5133da30066becdc09ed37b703a876a2",
"assets/assets/images/icons/arrow-left.svg": "76ceac316e7854c8211df31f7561b47a",
"assets/assets/images/icons/cross.svg": "bef09ee82ce9a3dd6c4c6b7992294066",
"assets/assets/images/icons/del.svg": "206684f5571f170342459f7697a788bf",
"assets/assets/images/icons/forward.svg": "1071e28b063c5fd3866f9b7498f2f472",
"assets/assets/images/icons/game_home.svg": "2969faa3f4fe17b6037a67a244cb8cb8",
"assets/assets/images/icons/message.png": "782ff2a864ce7c7923d2fbe57c295c65",
"assets/assets/images/icons/square-lock.svg": "e289350bcdcd98e1c52591be13c856e3",
"assets/assets/fonts/montserrat/Montserrat-Medium.ttf": "bdb7ba651b7bdcda6ce527b3b6705334",
"assets/assets/fonts/montserrat/Montserrat-Light.ttf": "94fbe93542f684134cad1d775947ca92",
"assets/assets/fonts/montserrat/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/assets/fonts/montserrat/Montserrat-ExtraBold.ttf": "9e07cac927a9b4d955e2138bf6136d6a",
"assets/assets/fonts/montserrat/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
