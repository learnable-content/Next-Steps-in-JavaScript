var functions = [];
var values = [];
for(let counter = 0; counter < 5; counter++) {
  values[counter] = counter;
  functions[counter] = function() {
    return counter;
  };
}
console.log(values[0]); //0
console.log(values[2]); //2
console.log(values[4]); //4
console.log(functions[0]()); //0
console.log(functions[2]()); //2
console.log(functions[4]()); //4
