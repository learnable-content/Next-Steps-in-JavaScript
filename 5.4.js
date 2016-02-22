var numbers = [1, 2, 3, 5, 8, 13];

var addThem = function(first, second) {
  return first + second;
};

var total = numbers.reduce(addThem);
console.log(total); //32

// http://jsbin.com/rawudaludi/edit?js,console
