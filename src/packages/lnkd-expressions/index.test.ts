import lnkd from '../../index';

// combination of kumu selectors and angular filters?
test('expressions', () => {
  let graph = lnkd({...});

  // https://code.facebook.com/posts/1737605303120405/dragon-a-distributed-graph-query-engine/
  // Example 1: Compute the number of Alice's friends of friends over the age of 20.
  // (->> ($alice) (assoc $friends) (assoc $friends) (filter (> age 20)) (count))
  graph.eval('#alice --likes--> * --likes--> * | filter : age > 20 | count');

  // should out search edges or neighbors?
  // graph.find('#alice').out('likes').out('likes').find('[age>20]').length;
})
