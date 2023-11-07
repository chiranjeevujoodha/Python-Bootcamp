
//Exercise 1

var fav_food = "McDo"
var fav_meal = 'Dinner'

console.log("I eat " + fav_food + " at every " + fav_meal);

//Exercise 2 - Part 1

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

var myWatchedSeriesLength  = myWatchedSeries.length
console.log(myWatchedSeries);

var myWatchedSeriesSentence = myWatchedSeries[0] + ', ' + myWatchedSeries[1] + ' and ' + myWatchedSeries[2]

console.log('I watched 3 series : ' + myWatchedSeriesSentence);

//-------------------------------------------------

//Exercise 2 - Part 2

myWatchedSeries[2] = 'Friends'
myWatchedSeries.push('The Office')
myWatchedSeries.unshift('Game of Thrones')
myWatchedSeries.splice(1,1)
console.log(myWatchedSeries[1][2]);
console.log(myWatchedSeries)

//-------------------------------------------------

//Exercise 3

var temp_celsius = 30
var temp_fahrenheit = ((temp_celsius / 5) * 9) + 32

console.log(temp_celsius + '°C is ' + temp_fahrenheit+ '°F')

//-------------------------------------------------

//Exercise 4

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 55
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: 23
// Actual: 23

//c is undefined

//-------------------------------------------------

//Exercise 5

console.log(typeof(15))
// Prediction: number
// Actual: number

console.log(typeof(5.5))
// Prediction: float
// Actual: number

console.log(typeof(NaN))
// Prediction: undefined
// Actual: number

console.log(typeof("hello"))
// Prediction string
// Actual: string


console.log(typeof(true))
// Prediction: boolean
// Actual:boolean

console.log(typeof(1 != 2))
// Prediction: boolean
// Actual:boolean

console.log("hamburger" + "s")
// Prediction: hamburgers
// Actual:hamburgers

console.log("hamburgers" - "s")
// Prediction: undefined
// Actual: NaN

console.log("1" + "3")
// Prediction:13
// Actual:13

console.log("1" - "3")
// Prediction: undefined
// Actual: -2

console.log("johnny" + 5)
// Prediction: johnny5
// Actual:johnny5

console.log("johnny" - 5)
// Prediction:undefined
// Actual:NaN

console.log(99 * "hello")
// Prediction:NaN
// Actual:NaN

console.log(1 != 1)
// Prediction:false
// Actual:

console.log(1 == "1")
// Prediction: true
// Actual:

console.log(1 === "1")  
// Prediction: undefined
// Actual: false


//-------------------------------------------------

//Exercise 6

console.log(5 + "34")
// Prediction:534
// Actual:534

console.log(5 - "4")
// Prediction:NaN
// Actual:1

console.log(10 % 5)
// Prediction:0
// Actual:0

console.log(5 % 10)
// Prediction:5
// Actual:5

console.log("Java" + "Script")
// Prediction:JavaScript
// Actual:JavaScript

console.log(" " + " ")
// Prediction:  
// Actual:  

console.log(" " + 0)
// Prediction: 0
// Actual: 0

console.log(true + true)
// Prediction:true
// Actual:2

console.log(true + false)
// Prediction:1
// Actual:1

console.log(false + true)
// Prediction:1
// Actual:1

console.log(false - true)
// Prediction:-1
// Actual:-1

console.log(!true)
// Prediction:false
// Actual:false

console.log(3 - 4)
// Prediction:-1
// Actual:

console.log("Bob" - "bill")
// Prediction:NaN
// Actual:NaN