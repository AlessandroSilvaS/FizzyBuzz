"use strict";
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
    return fizzArray.join(' ');
};
function clicked() {
    let inputArray = document.getElementById('input-array');
    let textArea = document.getElementById('text-out');
    if (inputArray.value !== '') {
        let valueInput = inputArray.value;
        const valueInputString = valueInput.split(/[\s,]+/);
        try {
            const valueInputNumber = valueInputString.map((value) => {
                const endy = parseInt(value);
                return isNaN(endy) ? 0 : endy;
            });
            textArea.style.display = 'block';
            textArea.textContent = fizzBuzz(valueInputNumber);
            inputArray.value = '';
        }
        catch (error) {
            console.log(error);
        }
    }
    else {
        window.alert("Por favor, preencha o campo corretamente...");
    }
}
