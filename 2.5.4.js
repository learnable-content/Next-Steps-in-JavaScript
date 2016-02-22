var vowelMatch = /[aeiou]/;
console.log(vowelMatch.source); //"[aeiou]"

var globalVowelMatch = /[aeiou]/g;
console.log(globalVowelMatch.source); //"[aeiou]"

console.log(globalVowelMatch.flags); //undefined
console.log(globalVowelMatch.toString()); //"/[aeiou]/g"
console.log(globalVowelMatch.toString().match(/[gimuy]*$/)[0]); //"g"

// http://jsbin.com/sivudeqate/edit?js,console
