import oneBackIsTilde from '../array/oneBackIsTilde.js';
import twoBackIsNumber from '../array/twoBackIsNumber.js';

const isNegativeNum = (i, arr) => oneBackIsTilde(i, arr) && !twoBackIsNumber(i, arr);

export default isNegativeNum;
