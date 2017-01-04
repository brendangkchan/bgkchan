const gulp = require('gulp');
const webpack = require('gulp-webpack');
const webpackOrig = require('webpack');
const gzip = require('gulp-gzip');
// var Webpack_isomorphic_tools_plugin = require('webpack-isomorphic-tools/plugin')
 
// var webpack_isomorphic_tools_plugin = 
//   // webpack-isomorphic-tools settings reside in a separate .js file  
//   // (because they will be used in the web server code too). 
//   new Webpack_isomorphic_tools_plugin({
//     assets:
//       {
//         images:
//         {
//           extensions: ['png', 'jpg', 'gif', 'ico', 'svg']
//         }
//       }
//   })
//   // also enter development mode since it's a development webpack configuration 
//   // (see below for explanation) 
//   .development()

// gulp.task('webpack:images', function() {
//   return gulp.src('./source/public/images/*.*')
//     .pipe(webpack({
//       module: {
//         loaders: [
//           {
//             test: webpack_isomorphic_tools_plugin.regular_expression('images'),
//             loader: 'url-loader?limit=10240',
//           },
//         ]
//       }
//     }))
//     .pipe(gulp.dest('./app/public/images/'));
// });

gulp.task('webpack', function() {
  return gulp.src('./source/public/client.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js',
      },
      module: {
        loaders: [
          {
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['react', 'es2015', 'stage-2']
            }
          },
        ]
      },
      plugins: [new webpackOrig.optimize.UglifyJsPlugin({
        compress: {
          warnings: false // https://github.com/webpack/webpack/issues/1496
        }
      })]
    }))
    .pipe(gzip({ append: false }))
    .pipe(gulp.dest('./app/public/scripts/'));
});

gulp.task('dev:webpack', function() {
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
              presets: ['react', 'es2015', 'stage-2']
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
              presets: ['react', 'es2015', 'stage-2']
            }
          },
        ]
      }
    }))
    .pipe(gulp.dest('./app/public/scripts/'));
});
