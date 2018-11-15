var chalk = require('chalk');

var logController = (Log) => {
    var create = (req, res) => {
        var log = new Log(req.body);
        log.save((err) => {
            if(err){
                console.log(chalk.red('Error while saving category'));
                console.log(err);
                return res.status(422).send({
                    message: 'Error while adding new Category'
                });
            } else {
                res.json(category);
            }
        })
    };

    return {
        create: create
    }
}

module.exports = logController;