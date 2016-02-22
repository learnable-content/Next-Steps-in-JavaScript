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
var blueTracker = actionTracker("blue");
console.log(redTracker.getAction);
//function() { return tracking[choice]; }
console.log(blueTracker.getAction);
//function() { return tracking[choice]; }

// http://jsbin.com/dukotegimi/edit?js,console
