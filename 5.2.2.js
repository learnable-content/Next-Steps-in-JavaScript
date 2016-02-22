var steps = ["brainstorm", "narrow", "prototype", "test", "propose"];
steps.forEach(function(item, count) {
  switch(count) {
    case 0:
      console.log("First we " + item);
      break;
    case steps.length - 1:
      console.log("Finally we " + item);
      break;
    default:
      console.log("Then we " + item);
  }
});
// "First we brainstorm"
// "Then we narrow"
// "Then we prototype"
// "Then we test"
// "Finally we propose"

// http://jsbin.com/nixuzefive/edit?js,console
