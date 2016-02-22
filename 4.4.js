var steps = ["brainstorm", "narrow", "prototype", "test", "propose"];
steps.push("profit");
console.log(steps);
// ["brainstorm", "narrow", "prototype", "test", "propose", "profit"]

var popped = steps.pop();
console.log(steps);
// ["brainstorm", "narrow", "prototype", "test", "propose"]
console.log(popped); //"profit"

steps.unshift("drink");
console.log(steps);
// ["drink", "brainstorm", "narrow", "prototype", "test", "propose"]

var shifted = steps.shift();
console.log(steps);
// ["brainstorm", "narrow", "prototype", "test", "propose"]
console.log(shifted); //"drink"

// http://jsbin.com/lazodabeyo/edit?js,console
