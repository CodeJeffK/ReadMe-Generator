// TODO: Create a function to generate markdown for README
class MarkDown{


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
  static renderLicenseBadge(license) {
    const badges = {
      MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
      APACHE: `[![License: APACHE](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
      BSD: `[![License: BSD](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,
      CC0: `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`,
    }
    return badges[license]
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
  static renderLicenseLink(license) {
    const licenseLinks = {
      MIT: `[MIT](https://opensource.org/licenses/MIT)`,
      APACHE: `[APACHE](https://opensource.org/licenses/Apache-2.0)`, 
      BSD: `[BSD](https://opensource.org/licenses/BSD-3-Clause)`,
      CC0: `[CC0](http://creativecommons.org/publicdomain/zero/1.0/)`,
    }
    return licenseLinks[license]
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
  static renderLicenseSection(license) {
    if (license) {
      return `Licensed under the ${this.renderLicenseLink(license)} license.`
    } else {
      return ''
    }
  }




// Generate READEME.md function
  static generateMarkdown(answers) {
    return `
# ${answers.title}

${this.renderLicenseBadge(answers.license)}

## Table of Contents
- [Project Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Questions](#questions)
- [License](#license)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits
${answers.credits}

## Questions
${answers.email}
${answers.github}

## License
${this.renderLicenseSection(answers.license)}
  `
  }
}

module.exports = MarkDown;
