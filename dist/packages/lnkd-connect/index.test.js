"use strict";
exports.__esModule = true;
var index_1 = require("../../index");
require("./index");
test('graph.connect(fn, fn)', function () {
    var graph = index_1["default"]({ nodes: [{ id: 'one' }, { id: 'two' }] });
    graph.connect(function (n) { return n.id === 'one'; }, function (n) { return n.id === 'two'; });
    expect(graph.edges).toEqual([{ source: 'one', target: 'two' }]);
});
// test('connect by function', () => {
//   let graph = lnkd({
//     nodes: [
//       {id: 'one', tags: ['red']},
//       {id: 'two', tags: ['likes-red']}
//     ]
//   })
//
//   // connect based on a single tag pair
//   graph.connect(graph.find('.red'), graph.find('.likes-red'));
//
//   // connect across all tag pairs
//   graph.field('tags').values().forEach(tag => {
//     graph.connect(graph.find(`.${tag}`), graph.find(`.likes-${tag}`));
//   })
//
//   // wrapped up into a connector function with helpers
//   // would graph.slice(selector) be more intuitive if the selection itself is always a graph?
//   let byTag = target => {
//     return graph => graph.values('tags', tag => graph.find(`.${tag}`).connect(target(tag)));
//   }
//
//   graph.connect(byTag(tag => `.likes-${tag}`));
//
//   graph.connect(i => j => {
//     i.get('tags').forEach(tag => {
//
//     })
//   })
// })
//# sourceMappingURL=index.test.js.map