var chalk = require('chalk');

var applicationController = (Application) => {
    var create = (req, res) => {
        var application = new Application(req.body);
        Application.findOneAndUpdate({ _id: application.id }, application, {
            upsert: true,
            new: true
        }).exec((err, application) => {
            if (err) {
                console.log(chalk.red(err));
                console.log(err);
                return res.status(500).send({
                    message: 'Error while creating or updating Article'
                });
            } else {
                res.json(application);
            }
        });
    }
    var getApplication = (req, res) => {
        let { applicationId } = req.query;
        if (applicationId) {
            let query = {
                _id: applicationId
            };
            Application.find(query).exec((err, application) => {
                if (err) {
                    console.log(chalk.red(err));
                    console.log(err);
                    return res.status(500).send({
                        message: 'Error while creating or updating Article'
                    });
                } else {
                    res.json(application);
                }
            });
        } else {
            console.log(chalk.red('No ID present'));
            return res.status(500).send({
                message: 'No ID present'
            });
        }
    }

    return {
        create: create,
        getApplication: getApplication
    }
}

module.exports = applicationController;