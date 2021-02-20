const User = require('./User');
const UserSchema = require('./user-schema');


const rawUser = new User('skipper', 'thompson');
console.log('raw user: ', rawUser.attributes);
const rawUserValidation = UserSchema.validate(rawUser);
console.log('raw validation: ', rawUserValidation);

const rawObject = {
    firstName: 'Jane',
    lastName: 'Doe',
};
console.log('rawObject: ', rawObject);
const rawObjectValidation = UserSchema.validate(rawObject);
console.log('rawObject validation: ', rawObjectValidation);

const schema = new UserSchema({firstName: 'john', lastName: 'doe'});
console.log('schema: ', schema.attributes);
const validation = schema.validate();
console.log('schema validation: ', validation);


const overExtra = new UserSchema({
    firstName: 'Bob',
    lastname: 'Martin',
    title: 'genius',
});
console.log('overExtra title: ', overExtra.title);
