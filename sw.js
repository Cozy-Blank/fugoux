// サービスワーカー（PWA用）
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
  // ネットワークリクエストの処理（必要に応じてキャッシュ処理などを追加可能）
});