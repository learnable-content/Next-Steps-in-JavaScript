var steps = ["brainstorm", "narrow", "prototype", "test", "propose"];

var capitalize = function(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

var appendCount = function(word, count) {
  return word + " (" + count + ")";
};

var mapReturns = steps.map(capitalize).map(appendCount);

console.log(mapReturns);
//["Brainstorm (0)", "Narrow (1)", "Prototype (2)", "Test (3)", "Propose (4)"]

// http://jsbin.com/ruvuriwiyu/edit?js,console
