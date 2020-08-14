const trimBrackets = (arr) => (arr.length === 3 && arr[0] === '(' && arr[2] === ')' ? arr[1] : arr);

export default trimBrackets;
