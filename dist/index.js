'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const book = exports.book = {
  assets: './dist/assets',
  css: ['plugin.css']
};

const hooks = exports.hooks = {
  page(page) {
    return page;
  }
};