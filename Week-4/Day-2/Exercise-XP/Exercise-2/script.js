const prompt = require('prompt-sync')()


function calculateTip(){
    let amount = parseInt(prompt('Enter bill amount: '))
    let tip = 0
    let final_bill = 0
    if (amount < 50){
        tip = 0.2 * amount
        final_bill = amount + tip
    }
    console.log('Tip amount: ' + tip, ',final bill: ' + final_bill)
}


calculateTip()