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
