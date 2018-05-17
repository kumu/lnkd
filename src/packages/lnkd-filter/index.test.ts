test('filter', () => {
  let graph = lnkd({
    nodes: [{id: 'one'}, {id: 'two'}]
  })

  // is filteredGraph isolated from the original graph now?
  let filteredGraph = graph.filter(c => c.id === 'one');
})
