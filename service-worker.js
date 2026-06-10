const CACHE_NAME = "protokol-dssp-v1-7";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css?v=1.6",
  "./app.js?v=1.6",
  "./manifest.json?v=1.6",
  "./logo-upcr.png?v=1.6"
];

self.addEventListener("install", function(event){
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("activate", function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(
        keys.map(function(key){
          if(key !== CACHE_NAME){
            return caches.delete(key);
          }
        })
      );
    }).then(function(){
      return self.clients.claim();
    })
  );
});

self.addEventListener("fetch", function(event){

  if(event.request.mode === "navigate"){
    event.respondWith(
      fetch(event.request).catch(function(){
        return caches.match("./index.html");
      })
    );
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(function(response){
        var responseClone = response.clone();

        caches.open(CACHE_NAME).then(function(cache){
          cache.put(event.request, responseClone);
        });

        return response;
      })
      .catch(function(){
        return caches.match(event.request);
      })
  );
});
