
const prompt = require('prompt-sync')()

var cost_per_night = 140

let nights;
let total_price;
var destination
var destination_price
let rental_days

function hotelCost(){
        do {
            nights = prompt('Number of nights: ')
        } while (nights === '' || isNaN(nights))

        total_price = cost_per_night * nights
        return total_price
}


function planeRideCost(){
        do {
            destination = prompt('Enter Destionation: ').toUpperCase()
            
        } while (destination === '') // should add condition for not a string
        if (destination == 'London'){
            destination_price = 183
        } else if (destination == 'Paris'){
            destination_price = 220
        } else {
            destination_price = 300
        }
        return destination_price
}

// console.log(planeRideCost())

function rentalCost(){
    do {
        rental_days = prompt('Rental days: ')
    } while (rental_days === '' || isNaN(rental_days))
}



rentalCost()