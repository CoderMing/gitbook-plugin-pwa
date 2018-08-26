'use strict'

if (!document) {
  self.addEventListener('install', e => {
    console.log(self, caches, CacheStorage)
  })
}
