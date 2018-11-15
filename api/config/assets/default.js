module.exports = {
    server: {
        gulpConfig: ['gulpfile.js'],
        allJS: ['server.js', 'config/**/*.js', 'modules/**/**/*.js'],
        models: 'modules/**/models/*.js',
        routes: 'modules/**/routes/*.js'
    }
}