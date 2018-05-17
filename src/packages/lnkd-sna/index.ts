import lnkd from '../../index';

import order from './graph/order';
import size from './graph/size';

// Can't use arrow functions here or they bind to the wrong context
lnkd.fn.order = function() { return order(this); }
lnkd.fn.size = function() { return size(this); }

export default lnkd;
