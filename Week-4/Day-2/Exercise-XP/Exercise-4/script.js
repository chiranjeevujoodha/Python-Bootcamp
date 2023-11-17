
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

const shoppingList = ['banana','orange', 'apple','blueberry']

function myBill(){
    let bill = 0;
    for (i in shoppingList) {

        item = shoppingList[i]
        let price = prices[item]
        let stock_count = stock[item]

        if(shoppingList[i] in stock & stock_count > 0){
            stock_count = stock_count - 1
            // console.log(item + ' in stock')
            console.log(item + '; new stock: '+ stock_count + '; price: ' + price)
            bill = bill + price
        } else {
            console.log(shoppingList[i] + ' not in stock')
        }
        // console.log(bill)

    }
    console.log('Total Bill = $' + bill)
}

myBill()