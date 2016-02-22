var input = "The kittens have mittens";
var vowelMatch = /[aeiou]/g;
var match;
while (match = vowelMatch.exec(input)) {
  console.log([match[0], "was found at", match.index].join(" "));
}
//"e was found at 2"
//"i was found at 5"
//"e was found at 8"
//"a was found at 13"
//"e was found at 15"
//"i was found at 18"
//"e was found at 21"

http://jsbin.com/mayegabofe/edit?js,console
