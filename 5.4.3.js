var numbers = [1, 2, 3, 5, 8, 13];

var addThem = function(first, second, count, source) {
  console.log(count);
  return first + second;
};

var total = numbers.reduce(addThem);
console.log(total); //32
// 0
// 1
// 2
// 3
// 4
// 5
// 32
