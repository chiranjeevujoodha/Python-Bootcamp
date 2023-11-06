
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

//Exercise 2 - Part 2

myWatchedSeries[2] = 'Friends'
myWatchedSeries.push('The Office')
myWatchedSeries.unshift('Game of Thrones')
myWatchedSeries.splice(1,1)
console.log(myWatchedSeries[1][2]);
console.log(myWatchedSeries)
