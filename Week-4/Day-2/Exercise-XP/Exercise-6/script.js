
const prompt = require('prompt-sync')()

var cost_per_night = 140

let nights;

function hotelCost(){
        do {
            nights = prompt('Number of nights: ')
        } while (nights === '' || isNaN(nights))


}
hotelCost()