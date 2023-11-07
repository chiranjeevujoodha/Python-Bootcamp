

//Exercise 1

let x = 5;
let y = 10;

if (x > y) {
    console.log('x is greater than y');
} else {
    console.log('y is greater than x')
}
    

//Exercise 2

var newDog = 'Chihuahua'

console.log(newDog.length)

console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())

if (newDog == 'Chihuahua') {
    console.log('I love Chihuahuas, it’s my favorite dog breed');
} else {
    console.log('I dont care, I prefer cats');
}

//Exercise 3

let user_input = parseInt(prompt('Enter number'))

if (user_input % 2 == 0) {
    console.log('Number is even')
} else {
    console.log('Number is odd')
}


//Exercise 4

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];


var num_users = users.length
var remaining_users = num_users - 2

if (num_users == 0) {
    console.log('No one online')
} else if (num_users == 1){
    console.log(users[0])
} else if (num_users == 2) {
    console.log(users[0] + ' and ' + users[1] + ' are online')
} else {
    console.log(users[0] + ', ' + users[1] + ' and ' + remaining_users + ' more are online' )
}