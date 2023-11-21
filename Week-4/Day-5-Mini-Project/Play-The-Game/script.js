const prompt = require('prompt-sync')()

let enter_number;
let computerNumber;

guesses = 0


function compareNumbers(userNumber, computerNumber){

    if (userNumber === computerNumber) {
        console.log('winner')
        guesses+= 1
    } else if (userNumber > computerNumber) {
        guesses += 1
        console.log('number big, guess again');
        var new_number = parseInt( prompt('enter new number: '));
        console.log(new_number);
        if (new_number === computerNumber) {
            guesses += 1
            console.log('guesses ' + guesses)
            console.log('winner');
        } else if (new_number > computerNumber) {
            console.log('number big, guess again');
        }
    } else if (userNumber < computerNumber) {
        console.log('number small, guess again');
        var new_number = parseInt( prompt('enter new number: '))
        console.log(new_number)
        if (new_number === computerNumber) {
            console.log('winner');
        }      
    }
}

compareNumbers(10,4)



// function yes_play(){

//     enter_number = parseInt( prompt('Enter a number: '))

//     if (isNaN(enter_number)){
//         alert('Sorry Not a number, Goodbye')
//     } else if (enter_number < 0 || enter_number > 10) {
//         alert('Sorry it’s not a good number, Goodbye')
//     } else {
//         // computerNumber = Math.floor(Math.random() * 10)
//         computerNumber = 2
        


//         // compareNumbers(enter_number, computerNumber)
        
//     }
//     console.log('computer: ' + computerNumber)
//     console.log('chosen: ' + enter_number)

// }



// function playTheGame(){
//     var play = confirm('Would you like to play the game? ')
//     if (play == false){
//         alert("No problem, Goodbye")
//     } else {
//         yes_play()
//     }
// }








