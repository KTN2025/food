// Service worker ขั้นต่ำ เพื่อให้มือถือติดตั้งเป็นแอพได้ ไม่เก็บแคชข้อมูลใดๆ
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
