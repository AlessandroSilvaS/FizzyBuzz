"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clicked = () => {
    let inputArray = document.getElementById('input-array');
    if (inputArray.value !== '') {
        let valueInput = inputArray.value;
        try {
            const valueInputNumber = parseInt(valueInput);
        }
        catch (error) {
            console.log(error);
        }
    }
    else {
        window.alert("Por favor, preencha o campo corretamente...");
    }
};
