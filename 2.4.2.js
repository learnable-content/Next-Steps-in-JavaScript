var source = "The kittens have mittens";
var ensMatchesLast = /ens$/i;
console.log(ensMatchesLast.test(source)); //true
var secondSource = "The Kitten Ensemble";
console.log(ensMatchesLast.test(secondSource)); //false

var tsMatches = /^t.+s$/i;
console.log(tsMatches.test(source)); //true
console.log(tsMatches.test(secondSource)); //false

// http://jsbin.com/mexosegifo/edit?js,console
