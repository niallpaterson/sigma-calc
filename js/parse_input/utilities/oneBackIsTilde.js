import existsOnArray from './existsOnArray';

const oneBackIsTilde = (i, arr) => existsOnArray(i - 1) && arr[i - 1] === '−';

export default oneBackIsTilde;
