import oneBackIsTilde from './oneBackIsTilde.js';
import twoBackIsNumber from './twoBackIsNumber.js';

const isNegativeNum = (i, arr) => oneBackIsTilde(i, arr) && !twoBackIsNumber(i, arr);

export default isNegativeNum;
