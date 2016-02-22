var source = "The kittens have mittens";
console.log(source.replace("it", "IT"));
//"The kITtens have mittens"

var itMatches = /it/;
console.log(source.replace(itMatches, "IT"));
//"The kITtens have mittens"

var itMatchesGlobal = /it/g;
console.log(source.replace(itMatchesGlobal, "IT"));
//"The kITtens have mITtens"

var itAlsoMatchesGlobal = new RegExp("it", "g");
console.log(source.replace(itAlsoMatchesGlobal, "IT"));
//"The kITtens have mITtens"

//https://jsbin.com/kizugahiro/edit?js,console
