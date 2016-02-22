var numbers = [1, 2, 3, 5, 8, 13];

var addThem = function(first, second) {
  return first + second;
};

var total = numbers.reduce(addThem, 20);
console.log(total); //52

// http://jsbin.com/vuduyakaga/edit?js,console
