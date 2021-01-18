
// reads environment variables from .env in project root 
// in this case, .env specifies a custom  NODE_CONFIG_DIR
require('dotenv').config(); 

// loads an appropriate configuration from the directory specified 
// by NODE_CONFIG_DIR or the project root if NODE_CONFIG_DIR is undefined
const config = require('config');

console.log(config.get('message')); // prints the hard-coded configuration message

console.log(config.get('secretMessage')); // prints the secret message from the .env file
