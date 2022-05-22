// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const licenseMap = {
    GNU: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    Apache: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
};
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the name of this project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is this project about?",
        name: "description",
    },
    {
        type: "input",
        message: "What are the installation instructions?",
        name: "installation",
    },
    {
        type: "input",
        message: "What is the use of this app?",
        name: "usage",
    },
    {
        type: "input",
        message: "What are the guidlines for contribution?",
        name: "guidlines",
    },
    {
        type: "input",
        message: "What are the test instructions for this project?",
        name: "test",
    },
    {
        message: "What license do you want on your software?",
        type: "list",
        name: "license",
        choices: ["GNU", "Apache", "MIT"],
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "github",
    },
    {
        type: "input",
        message: "Whats your Github email?",
        name: "address",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt(questions).then((response) => {
            const license = licenseMap[response.license];
          //buildout md file here as a string
            const markDown = `

    ## Table of Contents:
    ###  * [Description](#description)
    ###  * [Installation](#installation)
    ###  * [Usage](#usage)
    ###  * [Contributors](#guidlines)
    ###  * [Tests](#test)
    ###  * [License](#license)
    ###  * [Github](#github)
    ###  * [EmailAddress](#address)
    ## Description
    ### You must have a description for this app to function:
    ### ${response.description}
    ## Installation:
    ### You must install the following for this app to function:
    ### ${response.installation}
    ## Usage:
    ### ${response.usage}
    ## Contributors:
    ### ${response.guidlines}
    ## Tests:
    ### Run the following commands in your terminal to test this app:
    ### ${response.test}
    ## License:
    ### License you will use for this app:
    ### ${response.license}
    ## Questions:
    ### If you have any questions, you may contact me at either
    ### Github: https://github.com/${response.github}
    ### or
    ### Email: ${response.address}

# ${response.title}
    Readme


# ${response.description}
    Description


# ${response.installation}
    Installation Instructions


# ${response.usage}
    Usage Information


# ${response.guidlines}
    Contribution Guidlines


# ${response.test}
    Test Instructions


# ${response.license}
    License
${license}

# ${response.github}
    ### Github: https://github.com/${response.github}


# ${response.address}
    Email      
`

            //write to file
            fs.writeFileSync("test.md", markDown);
          });

    console.log("readme")
}

// Function call to initialize app
init();
