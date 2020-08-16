import checks from './check/index.js';
import searches from './search/index.js';
import compose from './compose/compose.js';

export default {
  compose,
  ...checks,
  ...searches,
};
