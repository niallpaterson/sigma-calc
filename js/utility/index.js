import checks from './check/index.js';
import searches from './search/index.js';
import compose from './compose/index.js';

export default {
  compose,
  ...checks,
  ...searches,
};
