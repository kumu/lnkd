test('filter', function () {
    var graph = lnkd({
        nodes: [{ id: 'one' }, { id: 'two' }]
    });
    // is filteredGraph isolated from the original graph now?
    var filteredGraph = graph.filter(function (c) { return c.id === 'one'; });
});
//# sourceMappingURL=index.test.js.map