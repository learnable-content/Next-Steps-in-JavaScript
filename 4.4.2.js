var stack = [];
stack.push("urgent");
stack.push("super urgent");
stack.push("ultra urgent");
console.log(stack); //["urgent", "super urgent", "ultra urgent"]

var current = stack.pop();
console.log(current); //"ultra urgent"
console.log(stack); //["urgent", "super urgent"]

// http://jsbin.com/geluzoheto/edit?js,console
