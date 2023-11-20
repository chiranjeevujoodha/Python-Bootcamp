// const prompt = require('prompt-sync')()

let enter_number;
let computerNumber;


function compareNumbers(userNumber, computerNumber){

    if (userNumber === computerNumber) {
        alert('winner')
    } else if (userNumber > computerNumber){
        alert('Number too big, guess again!')
        userNumber = prompt('Enter new number')
        console.log(userNumber)
        console.log(computerNumber)
    }
}

function yes_play(){

    enter_number = parseInt( prompt('Enter a number: '))

    if (isNaN(enter_number)){
        alert('Sorry Not a number, Goodbye')
    } else if (enter_number < 0 || enter_number > 10) {
        alert('Sorry it’s not a good number, Goodbye')
    } else {
        // computerNumber = Math.floor(Math.random() * 10)
        computerNumber = 2


        compareNumbers(enter_number, computerNumber)
        
    }

}



function playTheGame(){
    var play = confirm('Would you like to play the game? ')
    if (play == false){
        alert("No problem, Goodbye")
    } else {
        yes_play()
    }
}







