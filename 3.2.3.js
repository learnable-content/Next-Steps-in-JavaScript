var actionTracker = function(choice) {
  var tracking = {};
  return {
    setAction: function(action) {
      if (action) {
        tracking[choice] = action;
      }
    },
    getAction: function() {
      return tracking[choice];
    }
  };
};

var redTracker = actionTracker("red");
redTracker.setAction("click");
console.log(redTracker.getAction()); //"click"

// http://jsbin.com/teburaqeye/edit?js,console
