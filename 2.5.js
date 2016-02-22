var source = "The kittens have mittens.";
var vowelMatches = /[aeiou]/;
console.log(source.match(vowelMatches)); //["e"]

console.log(source.search(vowelMatches)); //2

// http://jsbin.com/qekecatadu/edit?js,console
