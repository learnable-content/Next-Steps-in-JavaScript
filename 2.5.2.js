var input = "The kittens have mittens";
var vowelMatch = /[aeiou]/g;
console.log(vowelMatch.test(input)); //true
console.log(vowelMatch.test("xyz")); //false

var match = vowelMatch.exec(input);
console.log(match); //["e"]
console.log(vowelMatch.lastIndex); //3
var match = vowelMatch.exec(input);
console.log(match); //["i"]
console.log(vowelMatch.lastIndex); //6
var match = vowelMatch.exec(input);
console.log(match); //["e"]
console.log(vowelMatch.lastIndex); //9

// http://jsbin.com/bifefehaqa/edit?js,console
