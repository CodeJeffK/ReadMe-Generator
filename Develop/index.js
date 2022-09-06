// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const MarkDown = require('./utils/generateMarkdown');
const fs = require('fs');

console.log('readme gen')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to use the product?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Were there any contributors to your project?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'For questions(email)?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'For questions(github)?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices: ['MIT', 'ISC',],
        filter(val) {
            return val.toLowerCase();
        }
    },
];

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then((answers) => {
            const mark = MarkDown.generateMarkdown(answers)
            console.log(mark)
            return answers
        })
        .catch((error) => {
            console.log(error)
        })
}

// Function call to initialize app
init();
