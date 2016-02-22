var tracking = {};
function trackActions(item, choice) {
  if (choice) {
    tracking[item] = choice;
  }
  return tracking[item];
}

trackActions("red", "click");
console.log(trackActions("red")); //"click"
console.log(tracking.red); //"click"

// http://jsbin.com/pucomopigu/edit?js,console
