const gulp = require('gulp');
const webpack = require('gulp-webpack');

gulp.task('webpack', function() {
  return gulp.src('./source/public/client.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js',
      },
      devtool: '#source-map',
      module: {
        loaders: [
          {
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['react']
            }
          },
        ]
      }
    }))
    .pipe(gulp.dest('./app/public/scripts/'));
});

gulp.task('webpack:watch', function() {
  return gulp.src('./source/public/client.js')
    .pipe(webpack({
      watch: true,
      output: {
        filename: 'bundle.js',
      },
      devtool: '#source-map',
      module: {
        loaders: [
          {
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['react']
            }
          },
        ]
      }
    }))
    .pipe(gulp.dest('./app/public/scripts/'));
});
