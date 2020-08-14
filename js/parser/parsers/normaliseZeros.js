const normaliseZeros = (result) => result.map((x) => (Object.is(x, -0) ? 0 : x));

export default normaliseZeros;
