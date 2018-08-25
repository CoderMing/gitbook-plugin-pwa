const gulp = require('gulp')
const babel = require('gulp-babel')

gulp.task('default', () => {
  gulp.watch('src/**/*.js', e => {
    const outPath = e.path.replace(/src\//, 'dist/').match(/.*?(?=[^\/]*$)/)[0]
    gulp.src(e.path)
      .pipe(babel({
        presets: [ 'env' ]
      }))
      .pipe(gulp.dest(outPath))
  })
})