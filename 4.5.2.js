var Food = function(name) {
  var label = name;
  this.edible = true;
  this.formal = function() {
    return name.toUpperCase() + " ESQ.";
  };
};

var apple = new Food("apple");
console.log(apple.label); //unedined
console.log(apple.edible); //true
console.log(typeof apple); //"object"
console.log(apple.formal()); //"APPLE, ESQ."

// http://jsbin.com/xovesosege/edit?js,console
