var publicFunction = function() {
  var privateVariable = "something";
  return privateVariable;
};
//console.log(privateVariable); //error

var privateValue = publicFunction();
console.log(privateValue); //"something"

// http://jsbin.com/foxehuzefe/edit?js,console
