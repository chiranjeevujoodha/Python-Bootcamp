
// fetch('https://api.chucknorris.io/jokes/random')
// .then((response) => {
//     if(response.ok){
//         return response.json();
//     } else {
//         throw new Error("Wrong")
//     }
// })
// .then((response) => {
    
//         console.log(response.value);
// })

// setTimeout(() =>{
//     console.log('timeout')
// }, 3000)

// console.log('a')

let pizza;

function orderPizza() {
    console.log('order pizza')
    setTimeout(() => {
        pizza = '🍕'
        console.log(`${pizza} is ready`)
    }, 2000)
    console.log('Pizza was ordered')
}

orderPizza()
console.log(`Eat ${pizza}`)
