var steps = ["brainstorm", "narrow", "prototype", "test", "propose"];

var forEachReturns = steps.forEach(function(item) {
  return item;
});

var mapReturns = steps.map(function(item) {
  return item;
});

console.log(forEachReturns);
//undefined
console.log(mapReturns);
//["brainstorm", "narrow", "prototype", "test", "propose"]

// http://jsbin.com/zeviliropu/edit?js,console
