var fruits = {};
fruits.apple = {"skin color":"red", "price":0.75};
fruits.orange = {"skin color":"orange", "price":0.65};
fruits.pear = {"skin color":"green", "price":0.95};
Object.keys(fruits).forEach(function(fruit) {
  console.log(fruits[fruit].price);
});
//0.75
//0.65
//0.95

// http://jsbin.com/feheqozuci/edit?js,console
