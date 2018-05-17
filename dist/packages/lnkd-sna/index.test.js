"use strict";
exports.__esModule = true;
var index_1 = require("./index");
test('order', function () {
    var graph = index_1["default"]({ nodes: [{ id: 1 }, { id: 2 }] });
    expect(graph.order()).toBe(2);
});
//# sourceMappingURL=index.test.js.map