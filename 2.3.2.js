var whiteSpace = /\s+/g;
var source = "The     kittens        have mittens";
console.log(source.replace(whiteSpace, " "));
//"The kittens have mittens"

var errorWhiteSpace = new RegExp("\s+", "g");
console.log(source.replace(errorWhiteSpace, " "));
//"The     kitten         have mitten "

var alsoWhiteSpace = new RegExp("\\s+", "g");
console.log(source.replace(alsoWhiteSpace, " "));
//"The kittens have mittens"


// http://jsbin.com/yizaqozata/edit?js,console
