module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: 'src/styles',
            src: ['main.{scss,sass}'],
            dest: 'public/css',
            ext: '.css'
        }]
    }
};
