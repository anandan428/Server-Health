var chalk = require('chalk');

var userController = (User) => {
    var create = (req, res) => {
        var user = new User(req.body);
        user.uniqueID = req.connection.user;
        delete user._id;
        if (user.uniqueID) {
            let query = {
                uniqueID: user.uniqueID
            }
            User.findOneAndUpdate(query, user, {
                upsert: true,
                new: true
            }).populate('application', 'name').exec((err, Users) => {
                if (err) {
                    console.log(chalk.red(500));
                    console.log(err);
                    return res.status(500).send({
                        message: 'Error while creating or updating user'
                    });
                } else {
                    res.json(Users);
                }
            });
        } else {
            console.log(chalk.red('ID not assigned'))
            return res.status(422).send({
                message: 'ID not mentioned'
            });
        }
    }
    var getUser = (req, res) => {
        let uniqueID = req.connection.user;
        User.list({ uniqueID: uniqueID }).exec((err, user) => {
            if (err) {
                console.log(chalk.red(500));
                console.log(err);
                return res.status(500).send({
                    message: 'Error while creating or updating user'
                });
            } else {
                res.json(user);
            }
        });
    }

    return {
        create: create,
        getUser: getUser
    }
}

module.exports = userController;