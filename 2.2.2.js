var itMatches = /it/;
var itMatchesInsensitive = /it/i;
var itAlsoMatchesInsensitive = new RegExp("it","i");
var source = "THE KITTENS HAVE MITTENS";

console.log(itMatches.test(source)); //false
console.log(itMatchesInsensitive.test(source)); //true
console.log(itAlsoMatchesInsensitive.test(source)); //true

// http://jsbin.com/nojadubalo/edit?js,console
