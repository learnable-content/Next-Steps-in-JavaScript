var steps = ["brainstorm", "narrow", "prototype", "test", "propose"];
var stepTerm;
for(var counter = 0; counter < steps.length; counter++) {
  switch(counter) {
    case 0:
      stepTerm = "First";
      break;
    case steps.length - 1:
      stepTerm = "Finally";
      break;
    default:
      stepTerm = "Then";
  }
  console.log(stepTerm + " we " + steps[counter]);
}
//"First we brainstorm"
//"Then we narrow"
//"Then we prototype"
//"Then we test"
//"Finally we propose"

// http://jsbin.com/xakudetemo/edit?js,console
