// PSEUDO-CODE

// CONSTANTS
// user input
const inquirer = require("inquirer");
// read,write store, access, and manage files
const fs = require("fs");

// INITILIZE

// USER INTERACTION

// == PROMPTS
// == What is your name?
var readme = require("inquirer");
readme
    .prompt([
        {
            // == What is your name?

            type: "input",
            message: "What is your user name?",
            name: "username",
        },
    ])
    .then((answers) => {})
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
// == What is your project name?
// == What is your project about?
// == What language(s) is your project written in?

// SAVE USER FILE
