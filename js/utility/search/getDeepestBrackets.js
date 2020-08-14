import firstRightBracket from './firstRightBracket.js';
import matchingLeftBracket from './matchingLeftBracket.js';

const getDeepestBrackets = (equation) => ({
  right: firstRightBracket(equation),
  left: matchingLeftBracket(equation),
});

export default getDeepestBrackets;
