var steps = ["brainstorm", "narrow", "prototype", "test", "propose"];
console.log(steps.length); //5

steps.length = 10;
console.log(steps.length); //10
console.log(steps[6]); //undefined

steps.length = 3;
console.log(steps[4]); //undefined
console.log(steps); //["brainstorm", "narrow", "prototype"]

// http://jsbin.com/lezadeguci/edit?js,console
