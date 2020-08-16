# 🧮 sigma-calc

A simple calculator app written in JavaScript that allows users to perform calculations in [sigma](https://en.wikipedia.org/wiki/Summation#Capital-sigma_notation) and [pi](https://en.wikipedia.org/wiki/Product_(mathematics)#:~:text=Product%20of%20sequences,is%20just%20that%20number%20itself) notation. Handles conventional order of operations (BODMAS).

## Usage

Mostly self explanatory. Use sigma and pi buttons to switch notation. Fill in upper and lower limits and enter calculation.

By default the calculator is set to calculate in sigma notation with the lower and upper limits set to 1. So it functions like a standard calculator out of the box.

## Tests

There are unit and integration tests.

To run all tests:

````shell
yarn test
````

To run unit tests:

````shell
yarn test .unit
````

To run integration tests:

````shell
yarn test .int
````

## Future features

The following features are in the pipeline:

- Floating point number handling
