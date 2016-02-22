var steps = ["brainstorm", "narrow", "prototype", "test", "propose"];

var capitalize = function(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

var appendCount = function(word) {
  return word + " (" + word.length + ")";
};

var mapReturns = steps.map(capitalize).map(appendCount);

console.log(mapReturns);
//["Brainstorm (10)", "Narrow (6)", "Prototype (9)", "Test (4)", "Propose (7)"]

// http://jsbin.com/biqugibafi/edit?js,console
