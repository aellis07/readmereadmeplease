// Readme Template =====================

function generatorTemplate({
    // User input
    title,
    description,
    username,
    email,
    installation,
    usage,
    contribution,
    test,
    license,
}) {
    // Template of ReadMe
    return `# **${title}**
    
## Description
    
${description}
  
## License
  
  
This project is licensed by: ${license}.
    
  
## Table of Contents
  
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)
  
## Installation
  
${installation}
  
## Usage
  
${usage}
  
## Contributing
  
${contribution}
  
## Testing
  
${test}
  
## Contact
  
For questions or any other inqurires please contact me at ${email}
or on [Github](https://www.github.com/${username}).`;
}

// Export generator template - call generatorTemplate function
module.exports = generatorTemplate;
