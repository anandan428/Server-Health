var defaultConfig = require('./default');

module.exports = {
    db: {
        uri: process.env.MONGODB_URI || 'mongodb://' + (process.env.DB_TCP_ADDRESS || ('localhost')) + '/' + defaultConfig.db.name,
        options: {
            useNewUrlParser: true
        },
        debug: process.env.MONGO_DEBUG || false
    },
    log: {
        format: 'dev',
        fileLogger: {
            directoryPath: process.cwd(),
            fileName: 'app.log',
            maxsize: 10485760,
            maxFiles: 2,
            json: false
        }
    },
    app: {
        title: defaultConfig.app.title + '- Development Environment'
    },
    cors: {
        whiteList: ['http://localhost:3000']
    },
    livereload: true
}