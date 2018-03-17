let gulp = require('gulp'),
    sass = require('gulp-sass'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify-es').default,
    browserSync = require('browser-sync').create();//Metodo create y modulo borwser-sync



//Servidor browser-sync
gulp.task('default', ['javaScript','css'],() => {

    browserSync.init({
        server: "./"
    });
    gulp.watch("./src/js/**/.js", ["javaScript","css"]).on('change', browserSync.reload);
    gulp.watch("./src/scss/**/*.sass", ['css']);
    gulp.watch("./src/views/*.html", ['html']).on('change', browserSync.reload);
    gulp.watch("./dist/html/*.html").on('change', browserSync.reload);
});


gulp.task('javaScript', ()=>{
    return gulp.src("src/js/*js")
        .pipe(uglify(/* options */))
        .pipe(gulp.dest("./dist/js"));
})

gulp.task('css', ()=>{
    return gulp.src('./src/scss/**/*.sass')
        .pipe(sass())//Compilalo en sass
        // // .pipe(cssnano())//Lo minificamos
        // .pipe(autoprefixer({
        //     browsers: ['last 10 versions'],
        //     cascade: false
        // }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
})

gulp.task('html', ()=>{
    return gulp.src('./src/views/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist/html'));
})