const fs = require("fs")
let TOCQuestion = "would you like a table of contents?"
let TOC = "table of contents "

let repoNameQuestion = "what would you like your repo name to be? "
let repoName = "user repo name "

let descriptionQuestion = "what would you like the description to be? "
let description = "user description "



let contributionQuestion = "were there any contributors?"
let Contributions = "contributors "

let usageQuestion = "what are the uses of this application?"
let usage = "uses"

let contactQuestion = "what contact info would you like to display?"
let contact = "users contact info"

let licenseQuestion = "what license did you use?"
let license = "MIT"

function genBadgeForLicense(){
    if(license === "MIT")
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

    
}



let readMeText = `
# ${repoName}

## Description 
${description}

## License 
${genBadgeForLicense()}

## contributions
${Contributions}

## usage 
${usage}


## contact
${contact}
`

fs.writeFile("read.md",readMeText,function (err){

    if(err)
    console.log(err);

})

























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