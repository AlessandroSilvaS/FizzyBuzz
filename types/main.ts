import fizzBuzz from "./fizzBuzz";

const clicked = () => {
    let inputArray = document.getElementById('input-array') as HTMLInputElement

    if(inputArray.value !== ''){
        let valueInput:string = inputArray.value
        try {
            const valueInputNumber:number = parseInt(valueInput)
        } catch (error) {
            console.log(error)
        }
    }else{
        window.alert("Por favor, preencha o campo corretamente...")
    }
}
