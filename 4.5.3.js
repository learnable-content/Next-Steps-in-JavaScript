var Food = function(name) {
//var label = name;
  this.label = name;
  this.edible = true;
};

// Food.prototype.formal = function() {
//   return label.toUpperCase() + ", ESQ.";
// };

Food.prototype.formal = function() {
  return this.label.toUpperCase() + ", ESQ.";
};

var apple = new Food("apple");
console.log(apple.label); //"apple"
console.log(apple.edible); //true
console.log(typeof apple); //"object"
console.log(apple.formal()); //"APPLE, ESQ."

// http://jsbin.com/zibewabomi/edit?js,console
