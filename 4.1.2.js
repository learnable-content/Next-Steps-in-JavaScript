//SAME PRIMITIVE TYPE
var fruits = "Apples, Pears, and Tomatoes";
var foods = "Apples, Pears, and Tomatoes";
console.log(fruits == foods); //true
console.log(fruits === foods); //true

//PRIMITIVE TYPE COERCION
var quantities = 123;
var quantityString = "123";
console.log(quantities == quantityString); //true
console.log(quantities === quantityString); //false

//SAME REFERENCE TYPE
var fruitsObject = {Apples:3, Pears:2, Tomatoes:5};
var foodsObject = {Apples:3, Pears:2, Tomatoes:5};
console.log(fruitsObject == foodsObject); //false
console.log(fruitsObject === foodsObject); //false

// http://jsbin.com/fisicocemu/edit?js,console
