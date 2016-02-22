var queue = [];
queue.push("brainstorm");
queue.push("narrow");
queue.push("prototype");
console.log(queue); //["brainstorm", "narrow", "prototype"]

var current = queue.shift();
console.log(current); //"brainstorm"
console.log(queue); //["narrow", "prototype"]

// http://jsbin.com/yayoqinugu/edit?js,console
