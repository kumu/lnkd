import lnkd from './index';

test('order', () => {
  let graph = lnkd({nodes: [{id: 1}, {id: 2}]});
  expect(graph.order()).toBe(2);
})
