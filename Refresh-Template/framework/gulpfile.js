'use strict';

// sass compile
var gulp = require('gulp');
var sass = require('gulp-sass');
var prettify = require('gulp-prettify');
var minifyCss = require("gulp-minify-css");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var rtlcss = require("gulp-rtlcss");
var concatCss = require('gulp-concat-css');
var concat = require('gulp-concat');
var connect = require('gulp-connect');

//*** Localhost server tast
gulp.task('localhost', function() {
    connect.server();
});

gulp.task('localhost-live', function() {
    connect.server({
        livereload: true
    });
});

//*** SASS watch(realtime) compiler task
gulp.task('sass:watch', function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

//*** HTML formatter task
gulp.task('template', function() {

    gulp.src('./template/*.html').
    pipe(prettify({
        indent_size: 2,
        indent_inner_html: true,
        unformatted: ['pre', 'code']
    })).
    pipe(gulp.dest('./template/pretty'));
});

gulp.task('library', function() {

    gulp.src('./library_cwru/*.html').
    pipe(prettify({
        indent_size: 2,
        indent_inner_html: true,
        unformatted: ['pre', 'code']
    })).
    pipe(gulp.dest('./library_cwru/pretty'));
});

gulp.task('prettyzach', function() {

    gulp.src('./template/*.html').
    pipe(prettify({
        indent_size: 2,
        indent_inner_html: true,
        unformatted: ['pre', 'code']
    })).
    pipe(gulp.dest('./template/zach'));
});


//*** JS Prettify Test

gulp.task('jspretty', function() {
    gulp.src('./assets/layout/scripts/*.js')
        .pipe(prettify({ collapseWhitespace: false }))
        .pipe(gulp.dest('./assets/layout/scripts/pretty'))
});


//*** Distribution Workflow

gulp.task('sass', function() {
    console.log('This will compile SASS');
     //*** SASS compilation
    // bootstrap compilation
    gulp.src('./sass/bootstrap.scss')
        .pipe(sass())
        .pipe(rename('bootstrap1479396857.css'))
        .pipe(gulp.dest('./assets/global/plugins/bootstrap/css/'));
    // select2 compilation using bootstrap variables
    gulp.src('./assets/global/plugins/select2/sass/select2-bootstrap.min.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./assets/global/plugins/select2/css/'));
    // apps stylesheet compilation
    gulp.src('./sass/apps/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./assets/apps/css'));
    // global theme stylesheet compilation
    gulp.src('./sass/global/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./assets/global/css'));
    //  gulp.src('./sass/apps/*.scss').pipe(sass()).pipe(gulp.dest('./assets/apps/css'));
    gulp.src('./sass/pages/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./assets/pages/css'));
    // theme layouts compilation
    gulp.src('./sass/layouts/layout3/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./assets/layout/css'));
    gulp.src('./sass/layouts/layout3/themes/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./assets/layout/css/theme'));

});

gulp.task('mini', function() {
    console.log('This will minify CSS and JS.');
    //*** CSS minify
    // minify all global css
    gulp.src(['./assets/global/css/*.css',
            '!./assets/global/css/*.min.css'
        ])
        .pipe(minifyCss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./assets/global/css'));
    // minify all apps css
    gulp.src(['./assets/apps/css/*.css',
            '!./assets/apps/css/*.min.css'
        ])
        .pipe(minifyCss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./assets/apps/css'));
    // minify all pages css
    gulp.src(['./assets/pages/css/*.css',
            '!./assets/pages/css/*.min.css'
        ])
        .pipe(minifyCss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./assets/pages/css'));
    // minify all layout css
    gulp.src(['./assets/layout/css/*.css',
            '!./assets/layout/css/*.min.css'
        ])
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifyCss())
        .pipe(gulp.dest('./assets/layout/css'));
    // minify all layout theme css
    gulp.src(['./assets/layout/css/theme/*.css',
            '!./assets/layout/css/theme/*.min.css'
        ])
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifyCss())
        .pipe(gulp.dest('./assets/layout/css/theme'));
    // minify all bootstrap css
    gulp.src(['./assets/global/plugins/bootstrap/css/bootstrap1479396857.css',
            '!./assets/global/plugins/bootstrap/css/bootstrap1479396857.min.css'
        ])
        .pipe(minifyCss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./assets/global/plugins/bootstrap/css'));
    // minify all cwru css
    gulp.src(['./assets/cwru/css/*.css',
            '!./assets/cwru/css/*.min.css'
        ])
        .pipe(minifyCss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./assets/cwru/css'));

    //*** JS minify
    // minify all global js
    gulp.src(['./assets/global/scripts/*.js',
            '!./assets/global/scripts/*.min.js'
        ])
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./assets/global/scripts'));
    // minify all apps js
    gulp.src(['./assets/apps/scripts/*.js',
            '!./assets/apps/scripts/*.min.js'
        ])
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./assets/apps/scripts'));
    // minify all pages js
    gulp.src(['./assets/pages/scripts/*.js',
            '!./assets/pages/scripts/*.min.js'
        ])
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./assets/pages/scripts'));
    // minify all layout js
    gulp.src(['./assets/layout/scripts/*.js',
            '!./assets/layout/scripts/*.min.js'
        ])
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./assets/layout/scripts'));
    // minify all cwru js
    gulp.src(['./assets/cwru/scripts/*.js',
            '!./assets/cwru/scripts/*.min.js'
        ])
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./assets/cwru/scripts'));
    // minify paypal accessibility js
    gulp.src(['./assets/cwru/plugins/paypal-accessibility/bootstrap-accessibility.js',
            '!./assets/cwru/plugins/paypal-accessibility/bootstrap-accessibility.min.js'
        ])
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./assets/cwru/plugins/paypal-accessibility'));
    // minify tabdrop js
    gulp.src(['./assets/global/plugins/bootstrap-tabdrop/js/bootstrap-tabdrop.js',
            '!./assets/global/plugins/bootstrap-tabdrop/js/bootstrap-tabdrop.min.js'
        ])
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./assets/global/plugins/bootstrap-tabdrop/js'));
    // minify gcal flow js
    gulp.src(['./assets/cwru/plugins/jquery-gcal-flow/jquery.gcal.flow.js',
            '!./assets/cwru/plugins/jquery-gcal-flow/jquery.gcal.flow.min.js'
        ])
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./assets/cwru/plugins/jquery-gcal-flow'));
    // minify fitvids js
    gulp.src(['./assets/cwru/plugins/fitvids/jquery.fitvids.js',
            '!./assets/cwru/plugins/fitvids/jquery.fitvids.min.js'
        ])
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./assets/cwru/plugins/fitvids'));
    // minify moment js plugin
    gulp.src(['./assets/cwru/plugins/moment/moment.js',
            '!./assets/cwru/plugins/moment/moment.min.js'
        ])
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./assets/cwru/plugins/moment'));
    // minify jquery rss plugin
    gulp.src(['./assets/cwru/plugins/jquery-rss/src/jquery.rss.js',
            '!./assets/cwru/plugins/jquery-rss/src/jquery.rss.min.js'
        ])
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./assets/cwru/plugins/jquery-rss/src'));

});

gulp.task('concat', function() {
    console.log('This will concatenate CSS and JS.');
    //*** CSS concatenation
    // bundle all web fonts into one file
    gulp.src([
            './assets/cwru/css/cwru-typeface.min.css',
            './assets/global/plugins/font-awesome/css/font-awesome.min.css',
            './assets/cwru/plugins/black-tie/css/black-tie.min.css',
            './assets/global/plugins/socicon/styles.css',
            './assets/global/plugins/simple-line-icons/css/simple-line-icons.css',
            './assets/cwru/plugins/glyphicons/css/glyphicons.css',
            './assets/cwru/plugins/glyphicons-filetypes/css/glyphicons-filetypes.css',
            './assets/cwru/plugins/glyphicons-halflings/css/glyphicons-halflings.css',
            './assets/cwru/plugins/glyphicons-social/css/glyphicons-social.css'
        ])
        .pipe(concatCss("fonts1479396744.css"))
        .pipe(gulp.dest('./assets/cwru/css'));
    // bundle of components.css and plugins.css
    gulp.src(['./assets/global/css/components.min.css',
            './assets/global/css/plugins.min.css'
        ])
        .pipe(concatCss("application1490818210.css"))
        .pipe(gulp.dest('./assets/cwru/css'));
    // bundle of all theme files, plus cwru styles.css
    gulp.src([
            './assets/layout/css/layout.min.css',
            './assets/layout/css/theme/default.min.css',
            './assets/cwru/css/styles.min.css'
        ])
        .pipe(concatCss("presentation1490818250.css"))
        .pipe(gulp.dest('./assets/cwru/css'));
    // "bundle" of google.css
    gulp.src('./assets/cwru/css/google.min.css')
        .pipe(concatCss("google1488306216.css"))
        .pipe(gulp.dest('./assets/cwru/css'));

    //*** JS concatenation
    // combine respond.js and excanvas.js for IE9
    gulp.src(['./assets/global/plugins/respond.min.js',
            './assets/global/plugins/excanvas.min.js'
        ])
        .pipe(concat("bundle-ie9.min.js"))
        .pipe(gulp.dest('./assets/cwru/scripts'));
    // combine equal heights for IE10
    gulp.src(['./assets/cwru/plugins/jquery-match-height/dist/jquery.matchHeight-min.js',
            './assets/cwru/scripts/matchHeight.min.js'
        ])
        .pipe(concat("bundle-ie10.min.js"))
        .pipe(gulp.dest('./assets/cwru/scripts'));
    // combine both jquery and jquery mobile
    gulp.src(['./assets/global/plugins/jquery.min.js',
            './assets/cwru/plugins/jquery-mobile-touch/jquery.mobile.custom.min.js'
        ])
        .pipe(concat("bundle-jquery.min.js"))
        .pipe(gulp.dest('./assets/cwru/scripts'));
    // combine both app.js and layout.js
    gulp.src(['./assets/global/scripts/app.min.js',
            './assets/layout/scripts/layout.min.js'
        ])
        .pipe(concat("bundle-application1490818104.min.js"))
        .pipe(gulp.dest('./assets/cwru/scripts'));
    // combine all core js files
    gulp.src([
            // JavaScript Cookie
            './assets/global/plugins/js.cookie.min.js',
            // Bootstrap Hover Dropdown
            './assets/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js',
            // jQuery Slim Scroll
            './assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js',
            // Bootstrap Tabdrop
            './assets/global/plugins/bootstrap-tabdrop/js/bootstrap-tabdrop.min.js',
            // PayPal Bootstrap Accessibility
            './assets/cwru/plugins/paypal-accessibility/bootstrap-accessibility.min.js',
            // jQuery gCal Flow
            './assets/cwru/plugins/jquery-gcal-flow/jquery.gcal.flow.min.js',
            './assets/cwru/plugins/jquery-gcal-flow/globalize.min.js',
            // jQuery FitVids
            './assets/cwru/plugins/fitvids/jquery.fitvids.min.js',
            // Moment Plugin
            './assets/cwru/plugins/moment/moment.min.js',
            // jQuery RSS Plugin
            './assets/cwru/plugins/jquery-rss/src/jquery.rss.min.js'
        ])
        .pipe(concat("bundle-core1490818167.min.js"))
        .pipe(gulp.dest('./assets/cwru/scripts'));
});

gulp.task('final', function() {
    console.log('This will minify the concatenated CSS files.');
    //*** CSS concatenation re-minify and version
    // minify google.css (Google Custom Search)
    gulp.src(['./assets/cwru/css/google1488306216.css',
            '!./assets/cwru/css/google1488306216.min.css'
        ])
        .pipe(minifyCss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./assets/cwru/css'));
    // minify application.css
    gulp.src(['./assets/cwru/css/application1490818210.css',
            '!./assets/cwru/css/application1490818210.min.css'
        ])
        .pipe(minifyCss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./assets/cwru/css'));
    // minify presentation.css
    gulp.src(['./assets/cwru/css/presentation1490818250.css',
            '!./assets/cwru/css/presentation1490818250.min.css'
        ])
        .pipe(minifyCss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./assets/cwru/css'));
    // minify fonts.css
    gulp.src(['./assets/cwru/css/fonts1479396744.css',
            '!./assets/cwru/css/fonts1479396744.min.css'
        ])
        .pipe(minifyCss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./assets/cwru/css'));

});
