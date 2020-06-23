const outputIsValidNumber = (output) => {
  if (output.length !== 1) { return false; }
  if (typeof output[0] !== 'number') { return false; }
  return true;
};

export default outputIsValidNumber;