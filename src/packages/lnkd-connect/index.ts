import lnkd from '../lnkd-core';

lnkd.fn.connect = function() {
  if (arguments.length === 2) {
    let [ sourcefn, targetfn ] = arguments;
    this.find(sourcefn).connect(targetfn);
    return this;
  } else if (arguments.length === 1) {
    let { selection } = this;
    let [ targetfn ] = arguments;

    // this.edges.push({source: source.id, target: target.id});
  }

  return this;
}
