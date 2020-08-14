import firstRightBracket from './firstRightBracket.js';

const matchingLeftBracket = (arr) => arr.lastIndexOf('(', firstRightBracket(arr));

export default matchingLeftBracket;
