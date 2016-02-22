// PRIMITIVE
var number1 = 123;
var number2 = number1;
console.log(number1); // 123
console.log(number2); // 123
number2 = 456;
console.log(number1); // 123
console.log(number2); // 456

// REFERENCE
var toy1 = {"color":"red", "size":5, "soft":true};
var toy2 = toy1;
console.log(toy1.color); // "red"
console.log(toy2.color); // "red"
toy2.color = "blue";
console.log(toy2.color); // "blue"
console.log(toy1.color); // "blue"

http://jsbin.com/kuhaqixupa/edit?js,console
