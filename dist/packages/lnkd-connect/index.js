"use strict";
exports.__esModule = true;
var lnkd_core_1 = require("../lnkd-core");
lnkd_core_1["default"].fn.connect = function () {
    if (arguments.length === 2) {
        var sourcefn = arguments[0], targetfn = arguments[1];
        this.find(sourcefn).connect(targetfn);
        return this;
    }
    else if (arguments.length === 1) {
        var selection = this.selection;
        var targetfn = arguments[0];
        // this.edges.push({source: source.id, target: target.id});
    }
    return this;
};
//# sourceMappingURL=index.js.map