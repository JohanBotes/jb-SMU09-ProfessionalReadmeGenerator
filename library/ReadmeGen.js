class MarkDown {

    static generateReadme(answers) {
        return `
# Title 
${answers.name1}

# Main section
${answers.name2}

## Table of Contents
* [Cellphone-number](#Cellphone-number)

### Cellphone Number
${answers.cellphone}   
    `
    }
}

module.exports = MarkDown

// there should not be an open line between "return and the next line" - you must use the back "tick" to ID the full set as a string"
