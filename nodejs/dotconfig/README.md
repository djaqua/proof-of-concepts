# dotconfig: dotenv + config

# Theory of Operation

The package *dotenv* reads from *.env* in the project root and loads the environment variables defined therin for the process.

The package *config* loads an appropriate configuration from the directory identified by the environment variable *NODE_CONFIG_DIR* or from the project root directory if the environment variable *NODE_CONFIG_DIR* is undefined.

This proof-of-concept:
* loads configuration information from the directory identified by the environment variable *NODE_CONFIG_DIR* which is defined within the file *.env*
* loads the environment variable *SECRET_MESSAGE_FROM_DOTENV_FILE* defined within the the file *.env* as a value for the configuration key "secretMessage"

