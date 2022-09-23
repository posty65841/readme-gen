const fs = require("fs")
const inquirer = require("inquirer");


function genBadgeForLicense(licenses) {

    let output = ""

    
    for (const license of licenses) {
        if (license === "MIT")
            output += "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        else if (license === "BSD")
            output += "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
        else if (license === "CC0")
            output += "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
        else if (license === "WTFPL")
            output += "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"




    }

    return output
}
function tableOfContents(input) {
    let output = ""
    console.log(input)
    if (input === "n") {
        output = "" 
    }else{
        output = "table Of Contents"
        
    }

    return output
}

inquirer
    .prompt([
        {
            type: "input",
            message: "would you like a table of contents? (y/n)",
            name: "tableOfContents",
        },
       
        {
            type: "input",
            message: "what is your repo name?",
            name: "repositoryName",
        },
        {
            type: "input",
            message: "application description ",
            name: "description",
        },
        {
            type: "input",
            message: "was there any contributors?",
            name: "contributors",
        },
        {
            type: "input",
            message: "what are the uses for this application?",
            name: "uses",
        },
        {
            type: "input",
            message: "what contact information would you like to display?",
            name: "contactInfo",

        },
        {
            type: "checkbox",
            message: "licenses if any?",
            name: "licenses",
            choices: ["MIT", "BSD", "CC0", "WTFPL"]
        },
        {
            type: "input",
            message: "link your github account",
            name: "github",
            
        },
        {
            type: "input",
            message: "explain what is required for installation",
            name: "installation",
            
        },


    ]).then((responses) => {
        let readmeText = `
## Title 
${responses.repositoryName}


${tableOfContents(responses['tableOfContents'])}
* [description](#description)
* [licenses](#licenses)
* [contributions](#contributions)
* [usage](#usage)
* [contact](#contact)
* [github](#github)
* [installation](#installation)
## Description 
${responses.description}

## License 
${genBadgeForLicense(responses['licenses'])}

## contributions
${responses.contributors}

## usage 
${responses.uses}


## contact
${responses.contactInfo}

## github
${responses.github}


## installation
${responses.installation}

`

        fs.writeFile("read.md", readmeText, function (err) {

            if (err)
                console.log(err);

        })
    });




// AS A developer
// I WANT a README generator
// SO THAT I can quickly create a professional README for a new project
// ```

// ## Acceptance Criteria

// ```md
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README