importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js"
);

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  workbox.routing.registerRoute(
    new RegExp(".*.(?:js|css)"),
    workbox.strategies.cacheFirst()
  );

  workbox.precaching.precacheAndRoute(["/index.html"]);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
