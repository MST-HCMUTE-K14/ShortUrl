var mongoose = require('mongoose');

// define the schema for our user model
var userSchema = mongoose.Schema({
        originalUrl: String,
        click: Number
    },
newFunction()
);

module.exports = mongoose.model('urlRef', userSchema);
function newFunction() {
    return { strict: false };
}
