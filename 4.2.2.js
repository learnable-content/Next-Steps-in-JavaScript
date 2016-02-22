var steps = ["brainstorm", "narrow", "prototype", "test", "propose"];
console.log(steps[0]); //"brainstorm"

steps[2] = "experiment";
console.log(steps); //["brainstorm", "narrow", "experiment", "test", "propose"]

var alphaSteps = steps.sort();
console.log(alphaSteps); //["brainstorm", "experiment", "narrow", "propose", "test"]
console.log(steps); //["brainstorm", "narrow", "experiment", "test", "propose"]

http://jsbin.com/ciqayokere/edit?js,console
