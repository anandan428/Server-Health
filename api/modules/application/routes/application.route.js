module.exports = (app, { Application }) => {
    var applicationController = require('../controller/application.controller')(Application)
    app.route('/api/Application')
        .get(applicationController.getApplication)
        .post(applicationController.create);
}