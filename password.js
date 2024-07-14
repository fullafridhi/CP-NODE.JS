// password-generator.js

const generatePassword = require('generate-password');


function generateRandomPassword() {
    const password = generatePassword.generate({
        length: 12,  
        numbers: true,
        symbols: true,
        uppercase: true,
        excludeSimilarCharacters: true,
    });

    return password;
}


const generatedPassword = generateRandomPassword();
console.log('Generated Password:', generatedPassword);
