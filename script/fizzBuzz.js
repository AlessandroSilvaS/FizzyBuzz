"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fizzBuzz = (array) => {
    const fizzArray = array.map((value) => {
        if (value % 3 === 0 && value % 5 === 0) {
            return 'FizzBuzz';
        }
        else if (value % 5 === 0) {
            return 'Buzz';
        }
        else if (value % 3 === 0) {
            return 'Fizz';
        }
        else {
            return value;
        }
    });
    console.log(fizzArray.join(' '));
};
exports.default = fizzBuzz;
