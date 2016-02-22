var fruits = {};
fruits.apple = {"skin color":"red", "price":0.75};
fruits.orange = {"skin color":"orange", "price":0.65};
fruits.pear = {"skin color":"green", "price":0.95};
delete fruits.pear.price;
console.log(fruits.pear.price); //undefined

fruits.apple.price = 0.79;
fruits.apple["skin color"] = "green";
for (var key in fruits.apple) {
  if( fruits.apple.hasOwnProperty(key) ) {
    console.log(key + " = " + fruits.apple[key]);
  }
}
//(IN NO PARTICULAR ORDER)
//"skin color = green"
//"price = 0.79"

//http://jsbin.com/hukutuceru/edit?js,console
