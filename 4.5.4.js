class Food {
  constructor(name) {
    this.label = name;
    this.edible = true;
  }
  formal() {
    return this.label.toUpperCase() + " ESQ.";
  }
}

var apple = new Food("apple");
console.log(apple.label); //"apple"
console.log(apple.edible); //true
console.log(typeof apple); //"object"
console.log(apple.formal()); //"APPLE, ESQ."

// http://jsbin.com/dijusareza/edit?js,console
