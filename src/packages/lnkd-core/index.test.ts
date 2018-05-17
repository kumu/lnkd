import lnkd from './index';

test('empty graph', () => {
  let graph = lnkd();
  expect(graph.nodes).toEqual([]);
  expect(graph.edges).toEqual([]);
})

test('graph.length returns nodes + edges', () => {
  let graph = lnkd({
    nodes: [{id: 'one'}, {id: 'two'}],
    edges: [{source: 'one', target: 'two'}]
  })

  expect(graph.length).toBe(3);
})

test('graph.forEach iterates nodes and edges', () => {
  let graph = lnkd({
    nodes: [{id: 'one'}, {id: 'two'}],
    edges: [{source: 'one', target: 'two'}]
  })

  let i = 0;
  graph.forEach(c => i++);
  expect(i).toBe(3);
})

test('graph.add(node)', () => {
  let graph = lnkd().add({id: 'one'});
  expect(graph.nodes).toEqual([{id: 'one'}]);
})

test('graph.toJSON()', () => {
  let graph = lnkd({
    nodes: [{id: 'one'}, {id: 'two'}],
    edges: [{source: 'one', target: 'two'}]
  })

  expect(graph.toJSON()).toEqual({
    nodes: [{id: 'one'}, {id: 'two'}],
    edges: [{source: 'one', target: 'two'}]
  })
})
