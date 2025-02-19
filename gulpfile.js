import gulp from 'gulp';
import browserSync from 'browser-sync';
import del from 'del';
import styles from './gulp/compileStyles.mjs';
import { copy, copySvg } from './gulp/copyAssets.mjs';
import js from './gulp/compileScripts.mjs';
import {optimizeSvg, sprite, createWebp, optimizePng, optimizeJpg} from './gulp/optimizeImages.mjs';

const server = browserSync.create();
const streamStyles = () => styles().pipe(server.stream());

const clean = () => del('build');

const syncServer = () => {
  server.init({
    server: 'build/',
    index: 'index.html',
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch('source/**.html', gulp.series(copy, refresh));
  gulp.watch('source/sass/**/*.{scss,sass}', streamStyles);
  gulp.watch('source/js/**/*.{js,json}', gulp.series(js, refresh));
  gulp.watch('source/data/**/*.{js,json}', gulp.series(copy, refresh));
  gulp.watch('source/img/**/*.svg', gulp.series(copySvg, sprite, refresh));
};

const refresh = (done) => {
  server.reload();
  done();
};

const build = gulp.series(clean, copy, sprite, gulp.parallel(styles, js, optimizeSvg));
const dev = gulp.series(clean, copy, sprite, gulp.parallel(styles, js, optimizeSvg), syncServer);
const start = gulp.series(clean, copy, sprite, gulp.parallel(styles, js), syncServer);

export { createWebp as webp, build, start, dev};
