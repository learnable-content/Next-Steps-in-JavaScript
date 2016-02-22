var plusMatch = /12+3/;
console.log(plusMatch.test("123")); //true
console.log(plusMatch.test("1222223")); //true
console.log(plusMatch.test("13")); //false

var splatMatch = /12*3/;
console.log(splatMatch.test("123")); //true
console.log(splatMatch.test("1222223")); //true
console.log(splatMatch.test("13")); //true

// http://jsbin.com/nepoziqitu/edit?js,console
