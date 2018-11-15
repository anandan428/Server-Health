module.exports = {
    app: {
        title: 'Server Health Check Api',
    }, 
    db: {
        promise: global.Promise,
        name: 'server-health'
    }, 
    port: process.env.PORT || 3000,
    host: process.env.HOST || '127.0.0.1'
};