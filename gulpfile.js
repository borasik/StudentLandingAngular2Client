var gulp = require('gulp');
var ts = require('gulp-typescript');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var inject = require('gulp-inject');
var fs = require('fs');
var embedTemplates = require('gulp-angular-embed-templates');

var packageJson = JSON.parse(fs.readFileSync('./package.json'));

  console.log(packageJson.scripts.tenant);

gulp.task('build:dev:ts', function () {   
    var tsProject = ts.createProject(path.resolve('./tsconfig.json'));
    var tsResult = gulp.src([
        'app/**/*.ts'        
    ])
        .pipe(sourcemaps.init())
        .pipe(tsProject())

    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.resolve('./build/app')))
});

gulp.task('build:dev:js:copy', () => gulp
  .src(['./node_modules/bootstrap/dist/js/*.min.js', './node_modules/jquery/dist/*.min.js'])   
  .pipe(gulp.dest('./build/libs/js'))
);

gulp.task('build:dev:css:copy', () => gulp
  .src('./node_modules/bootstrap/dist/css/*.min.css')
  .pipe(gulp.dest('./build/libs/css'))
);

gulp.task('build:dev:css:js:inject:shared', function () {
  var target = gulp.src('./index.html'); 
  var sources = gulp.src(['./build/libs/js/*.js', './build/libs/css/*.css'], {read: false});
 
  return target.pipe(inject(sources))
    .pipe(gulp.dest('./'));
});

var sources = null;
gulp.task('build:dev:css:js:inject:custom', function () {
  var target = gulp.src('./index.html'); 

console.log('Starting Injection custom css, js');

  if(packageJson.scripts.tenant == "abdl"){  
    console.log('Injecting custom css, js for: ' + packageJson.scripts.tenant);
    sources = gulp.src(['./Kentico-Temp/abdl/*.js', './Kentico-Temp/abdl/*.css'], {read: false});
  }

  if(packageJson.scripts.tenant == "nslsc"){  
    console.log('Injecting custom css, js for: ' + packageJson.scripts.tenant);
    sources = gulp.src(['./Kentico-Temp/nslsc/*.js', './Kentico-Temp/nslsc/*.css'], {read: false});
  }
 
  return target.pipe(inject(sources, {name: 'custom'}))
    .pipe(gulp.dest('./'));
});

gulp.task('build', ['build:dev:ts', 'build:dev:js:copy', 'build:dev:css:copy', 'build:dev:css:js:inject:shared', 'build:dev:css:js:inject:custom']);
