"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var index_1 = require("../../index");
// combination of kumu selectors and angular filters?
test('expressions', function () {
    var graph = index_1["default"](__assign({}, ));
    // https://code.facebook.com/posts/1737605303120405/dragon-a-distributed-graph-query-engine/
    // Example 1: Compute the number of Alice's friends of friends over the age of 20.
    // (->> ($alice) (assoc $friends) (assoc $friends) (filter (> age 20)) (count))
    graph.eval('#alice --likes--> * --likes--> * | filter : age > 20 | count');
    // should out search edges or neighbors?
    // graph.find('#alice').out('likes').out('likes').find('[age>20]').length;
});
//# sourceMappingURL=index.test.js.map