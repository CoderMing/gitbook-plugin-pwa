const gulp = require('gulp')
const babel = require('gulp-babel')
const stylus = require('gulp-stylus')

gulp.task('default', () => {
  // js
  gulp.watch('src/**/*.js', e => {
    const outPath = e.path.replace(/src\//, 'dist/').match(/.*?(?=[^/]*$)/)[0]
    gulp
      .src(e.path)
      .pipe(
        babel({
          presets: [
            [
              'env',
              {
                targets: {
                  node: 9
                }
              }
            ]
          ]
        })
      )
      .pipe(gulp.dest(outPath))
  })
  // css
  gulp.watch('src/**/*.styl', e => {
    const outPath = e.path.replace(/src\//, 'dist/').match(/.*?(?=[^/]*$)/)[0]
    gulp
      .src(e.path)
      .pipe(stylus())
      .pipe(gulp.dest(outPath))
  })
})
