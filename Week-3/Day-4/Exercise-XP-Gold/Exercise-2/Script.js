const prompt = require('prompt-sync')()

let grade = prompt('Enter your grade: ');

// console.log(grade)

if (grade > 90) {
    console.log('A')
} else if (grade >80 & grade <= 90) {
    console.log('B')
} else if (grade >= 70 & grade <= 80) {
    console.log('C')
} else if (grade < 70) {
    console.log('D')
}