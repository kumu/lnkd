import lnkd from '../lnkd';
import order from './order';

test('order', () => {
  let graph = lnkd({nodes: [{id: 1}, {id: 2}]});
  expect(order(graph)).toBe(2);
})
