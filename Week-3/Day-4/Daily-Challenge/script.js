
var sentence = 'The movie is bad, I like it'

sentence = sentence.replace(',', '')
// sentence = sentence.replace('!', '')

const sentence_array = sentence.split(' ');

wordNot = sentence_array.indexOf('not')
wordBad = sentence_array.indexOf('bad')

if (wordBad < wordNot || (wordBad & wordNot < 0)) {
        console.log(sentence)
}

// console.log(wordBad)