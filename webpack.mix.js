const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');
 */


mix.styles([
    'resources/plantilla/css/bootstrap-grid.css',
    'resources/plantilla/css/bootstrap-reboot.css',
    'resources/plantilla/css//bootstrap.css'
], 'public/css/all.css').scripts(
    [
        'resources/plantilla/js/bootstrap.js',
        'resources/plantilla/js/bootstrap.bundle.js',
    ], 'public/js/all.js'
).js('resources/js/app.js', 'public/js/app.js');