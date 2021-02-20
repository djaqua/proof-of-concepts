const {attributes} = require('structure');
// const User = require('./User');

const UserSchema = attributes({
    firstName: String,
    lastName: String,
})(class UserSchema {

});


module.exports = UserSchema;
