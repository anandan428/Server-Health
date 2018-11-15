var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;

var LogSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    endpoint: {
        type: ObjectId
    },
    ram: {
        type: Number,
        default: 0
    },
    cpu: {
        type: Number,
        default: 0
    },
    memory: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Log', LogSchema);