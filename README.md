Just a work in progress with a few example packages to help flush out api design.

## Decisions

### Scope

Which operations / concepts are essential and belong in the core?

(DOM api parallels?)

### Edge schema

From/to? Source/target? Unnamed?

```
edge = {from: 'one', to: 'two', id: 'e1', directed: true}
edge = {source: 'one', target: 'two', id: 'e1', directed: true}
edge = ['one', 'two', {id: e1, directed: true}]
```

### Wrapped or unwrapped components?

```
let graph = lnkd({nodes: [{id: 'one'}]});
let one = graph.get('one'); // one is a proxy that ties POJO to graph
let edges = one.edges();
```

VS

```
let graph = lnkd({nodes: [{id: 'one'}]});
let one = graph.get('one'); // one is just a POJO {id: 'one'}
let edges = graph.edges(one);
```

### Node / edge manipulation

Do we allow the underlying node and edge data to be manipulated directly? Or
do we force everything to happen through a helper?

Is it possible to support direct manipulation _and_ incremental indexing?

### Selections

What do we call the result of `graph.find(selector)`? selection/collection/context?

Can we unify selections and subgraphs? How about single component wrappers?

```
// can these all share a single api? should they?
graph.find(':after(1999)') // includes nodes and edges
graph.find('[age>100]')    // includes nodes
graph.get('kumu')          // includes single node
```

### Plugin implementation / registration

```
// Self-registration
import lnkd from 'lnkd';

lnkd.fn.find = (selector) {
  // this <> graph
}

let graph = lnkd(...);
graph.find(selector);
```

VS

```
// End user responsible for passing graph to everything. No real graph api.
import lnkd from 'lnkd';

export function find(graph, selector) {

}

let graph = lnkd(...);
let selection = find(graph, selector);
```

VS

```
// Plugins defined as pure functions but attached to graph api elsewhere.
export function find(graph, selector) { }

---

import lnkd from 'lnkd';

// registration independent from definition
lnkd.use('find', require('./plugins/find'));

let graph = lnkd(...);
graph.find(selector);
```

### Isolation

- When is structure shared between graphs?
- When are properties shared between graphs?
- What do we use when we want fully isolated copies? (graph.clone() vs graph.copy()?)

### Performance

How concerned are we about fast insertion/removal times? Lookups?

Should we have built-in field indexing? Or is edge indexing enough?

## Similar APIs / libraries

- [DOM Document#Methods](https://developer.mozilla.org/en-US/docs/Web/API/Document#Methods)
- [jquery](https://api.jquery.com/)
- [d3](https://github.com/d3/d3/blob/master/API.md)
- [sigmajs](https://github.com/jacomyal/sigma.js/wiki/Graph-API)
- [networkx](https://networkx.github.io/documentation/latest/reference/introduction.html) [MultiDiGraph](https://networkx.github.io/documentation/latest/reference/classes/multidigraph.html)
- [SNAP](https://snap.stanford.edu/snap/quick.html)
