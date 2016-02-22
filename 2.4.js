var source = "The kittens have mittens";
var itMatchesFirst = /^it/;
console.log(itMatchesFirst.test(source)); //false

var theMatchesFirst = /^the/i;
console.log(theMatchesFirst.test(source)); //true

// http://jsbin.com/hehevufexa/edit?js,console
