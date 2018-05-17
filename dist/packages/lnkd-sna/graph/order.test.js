"use strict";
exports.__esModule = true;
var lnkd_1 = require("../lnkd");
var order_1 = require("./order");
test('order', function () {
    var graph = lnkd_1["default"]({ nodes: [{ id: 1 }, { id: 2 }] });
    expect(order_1["default"](graph)).toBe(2);
});
//# sourceMappingURL=order.test.js.map