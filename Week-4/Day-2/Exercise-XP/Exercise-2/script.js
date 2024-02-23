const prompt = require('prompt-sync')()


function calculateTip(){
    let amount = parseInt(prompt('Enter bill amount: '));

    if (isNaN(amount)) {
        return 'Enter a valid amount'
    }
    
    
    if (amount < 50) {
        tip = 0.2 * amount
    } 
    
    if (amount >= 50 & amount <= 200) {
        tip = 0.15 * amount
    }
    
    if (amount > 200) {
        tip = 0.1 * amount
    }

    final_bill = tip + amount

    return 'Tip amount: ' + tip, ',final bill: ' + final_bill;
}


console.log(calculateTip())