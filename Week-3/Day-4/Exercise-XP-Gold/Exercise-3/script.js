const prompt = require('prompt-sync')()

let verb = prompt('Enter a verb: ')

var length = verb.length

var last3 = verb.substring(length - 3);

if (length >= 3 & last3 != 'ing') {
        new_verb = verb + 'ing'
        console.log(new_verb)
} else if (length >= 3 & last3 == 'ing') {
    new_verb = verb + 'ly'
    console.log(new_verb)
} else if (length < 3) {
    console.log(verb)
}

// console.log(last3)
