"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fizzBuzz_1 = __importDefault(require("./fizzBuzz"));
function clicked() {
    let inputArray = document.getElementById('input-array');
    if (inputArray.value !== '') {
        let valueInput = inputArray.value;
        const valueInputString = valueInput.split(/[\s,]+/);
        try {
            const valueInputNumber = valueInputString.map((value) => {
                return parseInt(value);
            });
            console.log((0, fizzBuzz_1.default)(valueInputNumber));
        }
        catch (error) {
            console.log(error);
        }
    }
    else {
        window.alert("Por favor, preencha o campo corretamente...");
    }
}
