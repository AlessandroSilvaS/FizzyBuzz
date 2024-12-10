import fizzBuzz from "./fizzBuzz";

function clicked(){
    let inputArray = document.getElementById('input-array') as HTMLInputElement

    if(inputArray.value !== ''){
        let valueInput:string = inputArray.value
        const valueInputString:Array<string> = valueInput.split(/[\s,]+/)

        try {
            const valueInputNumber:Array<number> = valueInputString.map((value) => {
                return parseInt(value)
            })

            console.log(fizzBuzz(valueInputNumber))
        } catch (error) {
            console.log(error)
        }
    }else{
        window.alert("Por favor, preencha o campo corretamente...")
    }
}