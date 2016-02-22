var source = "There are 100 cats";
var secondSource = "There are 10 cats";
var thirdSource = "There are 10000 cats";
var hundredsMatch = /\d{3} cats/;
console.log(hundredsMatch.test(source)); //true
console.log(hundredsMatch.test(secondSource)); //false
console.log(hundredsMatch.test(thirdSource)); //true

var upToThousandsMatch = / \d{3,4} cats/;
console.log(upToThousandsMatch.test(source)); //true
console.log(upToThousandsMatch.test(secondSource)); //false
console.log(upToThousandsMatch.test(thirdSource)); //false

// http://jsbin.com/pimevikaxa/edit?js,console
