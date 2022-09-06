// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
class MarkDown{
  static generateMarkdown(answers) {
    return `
  # ${answers.title}  

  ## Table of Contents
  - [Project description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Credits](#Credits)
  - [Questions](#Questions)
  - [License](#License)

  ## Description
  ${answers.description}

  ## Installation
  ${answers.installtion}

  ## Usage
  ${answers.usage}

  ## Credits
  ${answers.credits}

  ## Questions
  ${answers.email}
  ${answers.github}

  ## License
  ${answers.license}

  `
  }
}

module.exports = MarkDown;
