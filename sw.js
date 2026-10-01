const C="dqd-card-v2.0",A=["./","index.html","qrious.min.js","dqd.vcf","icon-180.png","icon-192.png","icon-512.png","favicon-32.png","manifest.webmanifest","avatar.jpg","logo-nasa.png","fonts/bvp-latin-400.woff2","fonts/bvp-latin-600.woff2","fonts/bvp-latin-700.woff2","fonts/bvp-vi-400.woff2","fonts/bvp-vi-600.woff2","fonts/bvp-vi-700.woff2"];
self.addEventListener("install",e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x))))));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request)))});
