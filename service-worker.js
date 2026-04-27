self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('casamento').then(cache => cache.addAll(['index.html']))
  );
});
