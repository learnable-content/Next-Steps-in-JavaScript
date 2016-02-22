var source = "The kittens have mittens";
var rhymesKittensMatch = /[a-z]ittens/;
console.log(rhymesKittensMatch.test(source)); //true

var startsCapitalMatch = /^[A-Z]/;
console.log(startsCapitalMatch.test(source)); //true

var onlyLettersMatch = /^[a-zA-Z]$/;
console.log(onlyLettersMatch.test(source)); //false

// http://jsbin.com/veyoyopafe/edit?js,console
