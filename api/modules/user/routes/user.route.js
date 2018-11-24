module.exports = (app, { User }) => {
    var userController = require('../controller/user.controller')(User);
    // app.use((req, res, next) => {
    //     var nodeSSPI = require('node-sspi');
    //     var nodeSSPIObj = new nodeSSPI({
    //         retrieveGroups: true
    //     })
    //     nodeSSPIObj.authenticate(req, res, function (err) {
    //         res.finished || next()
    //     })
    // })
    //     "node-sspi": "^0.2.3",
    app.route('/api/User')
        .get(userController.getUser)
        .post(userController.create);
}