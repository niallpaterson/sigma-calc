const compose = (...funcs) => (input) => funcs.reduceRight((acc, func) => func(acc), input);

export default compose;
