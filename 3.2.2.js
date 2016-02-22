function actionTracker(choice) {
  var tracking = {};
  return function(action) {
    if (action) {
      tracking[choice] = action;
    }
    return tracking[choice];
  };
}

var redTracker = actionTracker("red");
var blueTracker = actionTracker("blue");

console.log(blueTracker()); //undefined
blueTracker("click");
console.log(blueTracker()); //"click"
redTracker("touch");
console.log(redTracker()); //"touch"

// http://jsbin.com/rizonucohi/edit?js,console
