const prompt = require('prompt-sync')()


function calculateTip(){
    let amount = parseInt(prompt('Enter bill amount: '))
    
    
    if (amount < 50){
        tip = 0.2 * amount
        
    } else if (amount >= 50 & amount <= 200) {
        tip = 0.15 * amount
    } else if (amount > 200){
        tip = 0.1 * amount
    }

    final_bill = tip + amount

    console.log('Tip amount: ' + tip, ',final bill: ' + final_bill)
}


calculateTip()