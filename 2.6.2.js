var source = "There are 100 cats";
var numberMatch = /\d+ cats/;
console.log(numberMatch.test(source)); //true

var noNumberMatch = /\D+ cats/;
console.log(noNumberMatch.test(source)); //false

var onlyLetterNumberSpace = /^[\w\s]+$/;
console.log(onlyLetterNumberSpace.test(source)); //true

// http://jsbin.com/qawukuzula/edit?js,console
