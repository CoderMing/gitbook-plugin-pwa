'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hooks = exports.book = undefined;
exports.output = output;

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const book = exports.book = {
  assets: './dist/assets',
  css: ['plugin.css']
};

const insertGitalk = content => {
  const $ = _cheerio2.default.load(content);

  return $;
};

const hooks = exports.hooks = {
  'page:before'() {},
  page(page) {
    page.content = insertGitalk(page.content);
    page.content += `<script>
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(function(reg) {
        // registration worked
        console.log('Registration succeeded. Scope is ' + reg.scope);
      }).catch(function(error) {
        // registration failed
        console.log('Registration failed with ' + error);
      });
    }
    </script>`;
    return page;
  }
};

function output(output) {
  throw new Error();
  output.root();
  output.copyFile('./sw.js', 'sw.js');
}