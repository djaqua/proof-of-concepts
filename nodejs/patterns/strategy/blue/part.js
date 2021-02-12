const colors = require('colors/safe');

module.exports = (str) => {
    console.log(colors.blue(`Goodbye, ${str || 'world'}`));
};
