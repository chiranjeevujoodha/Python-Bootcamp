
const prompt = require('prompt-sync')()

let language = prompt('Which language do you speak: ');

language = language.toLowerCase();

// console.log(language);

if (language == 'french') {
    console.log('Bonjour')
} else if (language == 'english') {
    console.log('Hello')
} else if (language == 'hebrew') {
    console.log('Shalom')
} else {
    console.log('01110011 01101111 01110010 01110010 01111001')
}
