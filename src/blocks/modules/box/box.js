import { CountUp } from "countup.js";
import "waypoints/lib/noframework.waypoints.min.js";
import u from "umbrellajs/umbrella.esm.js";

var elem = u(".box__amount span");

var waypoint = new Waypoint({
  element: u(".box__amount").first(),
  handler: function() {
    new CountUp(elem.first(), elem.data("value"), {
      duration: 6,
      formattingFn: (n) => {
        let length = n.toString().length;
        let string = "000000".slice(0, -length) + n + " €";
        return string.slice(0, 3) + " " + string.slice(3);
      }
    }).start();

    waypoint.destroy();
  },
  offset: "bottom-in-view"
});
