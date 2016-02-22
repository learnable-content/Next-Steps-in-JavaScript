var vanilla = {"color":"neutral", "size":"medium"};
for (item in vanilla) {
  console.log("vanilla." + item + " = " + vanilla[item]);
}
// "vanilla.color = neutral"
// "vanilla.size = medium"

Object.prototype.extender = "Hahaha";
for (item in vanilla) {
  console.log("vanilla." + item + " = " + vanilla[item]);
}
// "vanilla.color = neutral"
// "vanilla.size = medium"
// "vanilla.extender = Hahaha"

for (item in vanilla) {
  if (vanilla.hasOwnProperty(item)) {
    console.log("vanilla." + item + " = " + vanilla[item]);
  }
}
// "vanilla.color = neutral"
// "vanilla.size = medium"

// http://jsbin.com/jakihukazu/edit?js,console
