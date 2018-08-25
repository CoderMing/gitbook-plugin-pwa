export const book = {
  assets: './dist/assets',
  css: ['plugin.css']
}

export const hooks = {
  'page:before'() {},
  page(page) {
    page.content += `<script>
    if('serviceWorker' in navigator) {
      navigator.serviceWorker.register('gitbook/gitbook-plugin-pwa/dist/sw.js', { scope: '/' })
        .then(function(registration) {
              console.log('Service Worker Registered');
        });

      navigator.serviceWorker.ready.then(function(registration) {
         console.log('Service Worker Ready');
      });
    }</script>`
    return page
  }
}
