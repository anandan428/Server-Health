var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;

var UserSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: 'Anonymous'
    },
    email: {
        type: String,
        default: 'No team known'
    },
    uniqueID: {
        type: String,
        required: 'This is mandotary to create profile'  
    },
    application: [{
        type: ObjectId,
        ref: 'Application'
    }]
});

UserSchema.statics.list = (query = {}) => {
    return this.find(query).populate('application', 'name');
}

module.exports = mongoose.model('User', UserSchema);