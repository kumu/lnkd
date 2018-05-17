import lnkd from '../lnkd-core';
import './index';

test('find()', () => {
  let graph = lnkd({
    nodes: [{id: 'one'}, {id: 'two'}],
    edges: [{source: 'one', target: 'two'}]
  })

  expect(graph.find()).toBe(graph);
})

test('find(fn)', () => {
  let graph = lnkd({
    nodes: [{id: 'one'}, {id: 'two'}],
    edges: [{source: 'one', target: 'two'}]
  })

  let found = graph.find(c => c.id === 'one');

  expect(found.length).toBe(1);
  expect(found.graph).toBe(graph);
  // expect(found.prev).toBe(graph); // prev instead so you could chain finds?
})

// test('find and remove', () => {
//   let graph = lnkd({
//     nodes: [{id: 'one'}, {id: 'two'}],
//     edges: [{source: 'one', target: 'two'}]
//   })
//
//   graph.find(c => c.id === 'one').remove();
//
//   expect(graph.nodes.length).toBe(1);
//   expect(graph.edges.length).toBe(0);
// })

// https://github.com/kumu/kumu/issues/5602
// test('find and traverse', () => {
//   let graph = lnkd({
//     nodes: [{id: 'one'}, {id: 'two'}],
//     edges: [{source: 'one', target: 'two'}]
//   })
//
//   expect(graph.find(c => c.id === 'one').edges().length).toBe(1);
//   expect(graph.find(c => c.id === 'one').out(1).length).toBe(1);
// })
