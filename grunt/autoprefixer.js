module.exports = {
    options: {
        browsers: ['> 1%', 'last 4 versions', 'Firefox ESR', 'Opera 12.1']
    },
    dist: {
        files: [{
            expand: true,
            cwd: 'public/css',
            src: '{,*/}*.css',
            dest: 'public/css'
        }]
    }
};
