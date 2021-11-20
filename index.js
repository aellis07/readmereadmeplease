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
const generatorTemplate = require("./generatorTemplate.js");
const readMe = "newReadMe.md";

// == PROMPTS (2)
// ==============================
const promptobj = [
    {
        // == What is your name?

        type: "input",
        message: "What is your project name?",
        name: "title",
    },
    {
        // == What is your project name?

        type: "input",
        message: "What is your project purpose?",
        name: "description",
    },

    {
        // == What is the installation process

        type: "input",
        message: "Installation instructions",
        name: "installation",
    },
    {
        // == How do you use the application

        type: "input",
        message: "How do you use the application?",
        name: "usage",
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
        name: "license",
    },
    {
        // == Contribution guidlines

        type: "input",
        message: "What are the contribution guidelines?",
        name: "contribution",
    },
    {
        // == How to run test associated with the project?

        type: "input",
        message: "How do you run tests for this project?",
        name: "test",
    },
    {
        // == What is your github username?

        type: "input",
        message: "What is your github username?",
        name: "username",
    },
    {
        // == What is your email?

        type: "input",
        message: "What is your email?",
        name: "email",
    },
];

// FUNCTIONS
// ================================
// (3)
inquirer.prompt(promptobj).then((answers) => {
    // (4)
    const strngobj = JSON.stringify(answers);
    // (5)
    fs.writeFile(readMe, generatorTemplate(JSON.parse(strngobj)), (err) => {
        // readMeTemplate(JSON.parse(strngobj));
        err ? console.error(err) : console.log("New ReadMe created!");
    });
    console.log(JSON.parse(strngobj));
});
