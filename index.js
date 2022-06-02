// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please type in a brief description for your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install and run your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use your project?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What is required for contribution?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github URL?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your preferred email?',
        },
    ]).then((data) => {

      const filename = `README_TEST.md`
      const readmeString = `
# ${data.title}
## Project Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [How to Use](#howtouse)
- [Contribution](#contribution)
- [github url](#github)
- [email address](#email)
## Installation
${data.installation}
      
## How To Use
${data.usage}
      
## Contribution
${data.contribution}`
      fs.writeFile(filename, readmeString, (err) =>
          err ? console.log(err) : console.log('Success!')
      );
  });

