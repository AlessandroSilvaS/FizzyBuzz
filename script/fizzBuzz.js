"use strict";
const fizzBuzz = (array) => {
    const fizzArray = array.map((value) => {
        if (value % 3 === 0) {
            return 'Fizz';
        }
        else if (value % 5 === 0) {
            return 'Buzz';
        }
        else if (value % 3 === 0 && value % 5 === 0) {
            return 'FizzBuzz';
        }
        else {
            return value;
        }
    });
    return fizzArray.join('');
};