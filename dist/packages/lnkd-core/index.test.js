"use strict";
exports.__esModule = true;
var index_1 = require("./index");
test('empty graph', function () {
    var graph = index_1["default"]();
    expect(graph.nodes).toEqual([]);
    expect(graph.edges).toEqual([]);
});
test('graph.length returns nodes + edges', function () {
    var graph = index_1["default"]({
        nodes: [{ id: 'one' }, { id: 'two' }],
        edges: [{ source: 'one', target: 'two' }]
    });
    expect(graph.length).toBe(3);
});
test('graph.forEach iterates nodes and edges', function () {
    var graph = index_1["default"]({
        nodes: [{ id: 'one' }, { id: 'two' }],
        edges: [{ source: 'one', target: 'two' }]
    });
    var i = 0;
    graph.forEach(function (c) { return i++; });
    expect(i).toBe(3);
});
test('graph.add(node)', function () {
    var graph = index_1["default"]().add({ id: 'one' });
    expect(graph.nodes).toEqual([{ id: 'one' }]);
});
test('graph.toJSON()', function () {
    var graph = index_1["default"]({
        nodes: [{ id: 'one' }, { id: 'two' }],
        edges: [{ source: 'one', target: 'two' }]
    });
    expect(graph.toJSON()).toEqual({
        nodes: [{ id: 'one' }, { id: 'two' }],
        edges: [{ source: 'one', target: 'two' }]
    });
});
//# sourceMappingURL=index.test.js.map