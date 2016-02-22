var fruits = {};
fruits.apple = "red";
fruits.orange = "orange";
fruits.pear = "green";
console.log(Object.keys(fruits)); //["apple", "orange", "pear"]

Object.prototype.extender = "Hahaha";
console.log(Object.keys(fruits)); //["apple", "orange", "pear"]

for (var item in fruits) {
  console.log("fruits." + item + " = " + fruits[item]);
}
//"fruits.apple = red"
//"fruits.orange = orange"
//"fruits.pear = green"
//"fruits.extender = Hahaha"



// http://jsbin.com/vokesevifo/edit?js,console
