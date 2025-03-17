function registerServiceWorker() {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js').then(() => {
        console.log('Service Worker registration successful.');
      });
    }
}

registerServiceWorker();