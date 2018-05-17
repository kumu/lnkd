"use strict";
exports.__esModule = true;
var lnkd_1 = require("../lnkd");
var size_1 = require("./size");
test('size', function () {
    var graph = lnkd_1["default"]({ nodes: [{ id: 1 }, { id: 2 }], edges: [{ from: 1, to: 2 }] });
    expect(size_1["default"](graph)).toBe(1);
});
//# sourceMappingURL=size.test.js.map