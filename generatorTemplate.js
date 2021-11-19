// Readme Template =====================

function generatorTemplate({
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
    return `# **${title}**
    
## Description
    
${description}
  
## License
  
  
This project is licensed by: ${license}.`;
}

module.exports = generatorTemplate;
