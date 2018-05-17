import lnkd from '../lnkd';
import size from './size';

test('size', () => {
  let graph = lnkd({nodes: [{id: 1}, {id: 2}], edges: [{from: 1, to: 2}]});
  expect(size(graph)).toBe(1);
})
