module.exports = (app, { Log }) => {
    var logController = require('../controller/log.controller')(Log)
    app.route('/api/Log')
        // .get(logController.getApplication)
        .post(logController.create);
}