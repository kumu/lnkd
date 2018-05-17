import lnkd from '../../index';

test('transform', () => {
  let graph = lnkd().compose(
    import(linkedin({TOKEN: 'ABC'}))
    add('one'),
    add('two'),
    connect('one', 'two')

  )


  lnkd().concat(linkedin(KEY), twitter(KEY))
  graph.add(linkedin(KEY), (component, collection) => {

  })

  graph.add('one');
  graph.add('two');
  graph.connect('one', 'two');
  graph.rename('name', 'label');

  graph.select('foo')
    .field('foo', 'bar')
    .style('color', 'red')

  graph.transform(select('foo'), field('foo', bar))

  graph.calc(reciprocity)

  let r = reciprocity(graph);
})
