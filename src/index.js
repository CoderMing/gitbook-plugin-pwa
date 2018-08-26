import cheerio from 'cheerio'

export const book = {
  assets: './dist/assets',
  css: ['plugin.css']
}

const insertGitalk = content => {
  const $ = cheerio.load(content)

  return $
}

export const hooks = {
  'page:before'() {},
  page(page) {
    page.content = insertGitalk(page.content)
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
    </script>`
    return page
  }
}

export function output(output) {
  throw new Error()
  output.root()
  output.copyFile('./sw.js', 'sw.js')
}
