import oneBackIsTilde from './oneBackIsTilde';
import twoBackIsNumber from './twoBackIsNumber';

const isNegativeNum = (i, arr) => oneBackIsTilde(i, arr) && !twoBackIsNumber(i, arr);

export default isNegativeNum;
