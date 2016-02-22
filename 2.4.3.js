var source = "The kittens have mittens.";
var tteMatches = /t[te]/;
console.log(tteMatches.test(source)); //true

var secondSource = "The cats have hats";
console.log(tteMatches.test(secondSource)); //false

var thirdSource = "The cats hate hats";
console.log(tteMatches.test(thirdSource)); //true

// http://jsbin.com/molozizexa/edit?js,console
