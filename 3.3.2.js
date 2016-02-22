var counter;
var functions = [];
var values = [];
var makeReturner = function(value) {
  return function() {
    return value;
  }
}
for(counter = 0; counter < 5; counter++) {
  values[counter] = counter;
  functions[counter] = makeReturner(counter);
}
console.log(values[0]); //0
console.log(values[2]); //2
console.log(values[4]); //4
console.log(functions[0]()); //0
console.log(functions[2]()); //2
console.log(functions[4]()); //4

// http://jsbin.com/fuxeloyelo/edit?js,console
