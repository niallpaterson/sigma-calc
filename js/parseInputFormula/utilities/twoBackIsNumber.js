import existsOnArray from './existsOnArray';

const twoBackIsNumber = (i, arr) => existsOnArray(i - 2) && typeof arr[i - 2] === 'number';

export default twoBackIsNumber;
