"use strict";
exports.__esModule = true;
var index_1 = require("../../index");
var order_1 = require("./graph/order");
var size_1 = require("./graph/size");
// Can't use arrow functions here or they bind to the wrong context
index_1["default"].fn.order = function () { return order_1["default"](this); };
index_1["default"].fn.size = function () { return size_1["default"](this); };
exports["default"] = index_1["default"];
//# sourceMappingURL=index.js.map