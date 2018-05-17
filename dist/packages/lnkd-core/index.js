"use strict";
// TODO: graph vs group / abitrary selection (could include nodes and edges in one list)
exports.__esModule = true;
// TODO: use proxy to allow array index access across the entire graph? When thinking of
// the graph as a selection of nodes and edges within a larger graph it can be helpful
// to think of it as a single list of components instead of separate lists of nodes and edges.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
var LnkdGraph = (function () {
    function LnkdGraph(data) {
        if (data === void 0) { data = {}; }
        // TODO: should we nest these under graph.raw.{nodes|edges} instead and
        // save graph.{nodes|edges} for working with wrappers?
        this.nodes = data.nodes || [];
        this.edges = data.edges || [];
        // TODO: this.selection so graph and graph with selection context handled the same?
        // NO! The graph _is_ the selection and needs a reference to the context graph.
    }
    Object.defineProperty(LnkdGraph.prototype, "length", {
        get: function () {
            return this.nodes.length + this.edges.length;
        },
        enumerable: true,
        configurable: true
    });
    // TODO: go with a simple addNode/addEdge/updateNode/updateEdge/removeNode/removeEdge
    // base and build helpers around those?
    // could add be used to add predefined edges too?
    LnkdGraph.prototype.add = function () {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        (_a = this.nodes).push.apply(_a, nodes);
        return this;
        var _a;
    };
    LnkdGraph.prototype.forEach = function (callback) {
        this.nodes.forEach(callback);
        this.edges.forEach(callback);
        return this;
    };
    // should this return a copy of the data instead?
    LnkdGraph.prototype.toJSON = function () {
        return { nodes: this.nodes, edges: this.edges };
    };
    return LnkdGraph;
}());
function lnkd(source) {
    return source instanceof LnkdGraph ? source : new LnkdGraph(source);
}
// jQuery style extension point for adding to LnkdGraph prototype
lnkd.fn = LnkdGraph.prototype;
// Class is not exposed, only wrapper method
exports["default"] = lnkd;
//# sourceMappingURL=index.js.map