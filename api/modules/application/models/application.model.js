var mongoose = require('mongoose')
    Schema = mongoose.Schema;

var ServerSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: 'Provide the name of the Server'
    },
    env: {
        type: String,
        required: 'Provide the env to which the server belongs too'
    }
})

var ApplicationSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type:String,
        required: 'Provide the name of the Application'
    },
    servers: [ServerSchema]
});


module.exports = mongoose.model('Application', ApplicationSchema);
