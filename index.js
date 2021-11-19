// PSEUDO-CODE

// (1) Add dependencies
// (2) Create object-prompt
// (3) Pass object through inquire.prompt()
// (4) Use JSON.stringify() to turn prompt response (answers) into string
// (5) Pass string-response (answers) through fs.writeFile()

// CONSTANTS (1)
// ==============================

const inquirer = require("inquirer");
const fs = require("fs");
const readMeTemplate = require("./readMeTemplate");
const readMe = "newReadMe.md";

// == PROMPTS (2)
// ==============================
const promptobj = [
    {
        // == What is your name?

        type: "input",
        message: "What is your project name?",
        name: "projectTitle",
    },
    {
        // == What is your project name?

        type: "input",
        message: "What is your project purpose?",
        name: "projectDesc",
    },

    {
        // == What is the installation process

        type: "input",
        message: "Installation instructions",
        name: "projectInstall",
    },
    {
        // == How do you use the application

        type: "input",
        message: "How do you use the application associated with your project?",
        name: "projectUsage",
    },
    {
        // == Project license

        type: "list",
        message: "Which license is your project available under?",
        choices: [
            "MIT License",
            "GNU General Public License",
            "Mozilla Public License 2.0",
            "Unlicense",
            "Apache License 2.0",
            "Boost Software License 1.0",
        ],
        name: "projectLicense",
    },
    {
        // == Contribution guidlines

        type: "input",
        message:
            "What are the guidelines for other developers to contribute to your project?",
        name: "projectContribute",
    },
    {
        // == How to run test associated with the project?

        type: "input",
        message: "How do you run any tests associated with your project?",
        name: "projectTest",
    },
    {
        // == What is your github username?

        type: "input",
        message: "What is your github username?",
        name: "projectUserName",
    },
    {
        // == What is your email?

        type: "input",
        message: "What is your email?",
        name: "projectEmail",
    },
];
