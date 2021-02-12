const colors = require('colors/safe');

module.exports = (str) => {
    console.log(colors.red(`Hello, ${str || 'world'}`));
};
