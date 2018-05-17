// - find returns a copy of the graph (is structure shared? fields?)
//  graph.find(target).removeEdges() // would this remove edges within graph?
//  graph.find('.cohort3').density() // just another graph
//
// selectors are just strings that get compiled into find functions
//
// function finder(graph, ...args) {
//   return graph.
// }
//
// graph.find(function | selector)
// graph.find('#id')
// graph.find(id(value))
// graph.findByField(field)
// graph.findByField(field, value)
// graph.findByField(field, operator, value)
//

import lnkd from '../lnkd-core';

// Should find accept nodeFinder and edgeFinder separately?
// Or should finder be a finder object (function | { nodes, edges })?
//
// graph.find(nodeFinder, edgeFinder)
// graph.find(finder) === graph.find(finder, finder)
// graph.findNode(finder) === graph.find(finder, null)
// graph.findEdge(finder) === graph.find(null, finder)
lnkd.fn.find = function(finder) {
  if (!finder) {
    return this; // return same context or child context?
  }

  if (typeof finder !== 'function') {
    throw new Error('Only function-based finders are supported at this time');
  }

  let find = finder;

  // This needs to support efficient finders (eg if :neighbor is called
  // with a single node selected we should only iterate on that node's edges)
  let result = find(context);

  // TODO: should we use Proxy to handle graph selections?
  let found = lnkd({ nodes, edges });
  found.context = context; // = context.graph
  // found.prev = context;
  return found;
}

// findFirst or first? or get?
lnkd.fn.first = function(finder) {
  return this.find(finder)[0]; // ??? how could we use array indexing if we need to keep nodes and edges separate?
}

function findEven(graph) {
  return graph.filter(c => c.id % 2 === 0);
}

function findNeighbors(graph) {
  let neighbors = new Set();

  // should we expose raw nodes array or iterate on wrapped nodes?
  // graph.find('node').forEach(node => {
  //   neighbors.add(node.find(':neighbor').toArray());
  // })

  graph.nodes.forEach(node => {
    graph.outEdges(node)
  })

  return {nodes: neighbors.values()};
}
