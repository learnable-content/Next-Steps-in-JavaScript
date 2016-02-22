var source = "The cats hate hats";
var animalsMatches = /dogs|cats|horses|chickens/;
console.log(animalsMatches.test(source)); //true

var secondSource = "The cat hates hats";
console.log(animalsMatches.test(secondSource)); //false
var animalMatches = /dogs?|cats?|horses?|chickens?/;
console.log(animalMatches.test(secondSource)); //true

// http://jsbin.com/haheyerefe/edit?js,console
