const fizzBuzz = (array: Array<number>) => {
    const fizzArray: Array<Number | String> = array.map((value) => {
        if (value % 3 === 0 && value % 5 === 0){
            return 'FizzBuzz'
        }else if (value % 5 === 0){
            return 'Buzz'
        }else if(value % 3 === 0){
            return 'Fizz'
        }else{
            return value
        }
    }) 
    return fizzArray.join(' ')
}

function clicked(){
    let inputArray = document.getElementById('input-array') as HTMLInputElement
    let textArea = document.getElementById('text-out') as HTMLTextAreaElement

    if(inputArray.value !== ''){
        let valueInput:string = inputArray.value
        const valueInputString:Array<string> = valueInput.split(/[\s,]+/)

        try {
            const valueInputNumber:Array<number> = valueInputString.map((value) => {
                const endy = parseInt(value)
                return isNaN(endy) ? 0 : endy
            })
            textArea.style.display = 'block'
            textArea.textContent = fizzBuzz(valueInputNumber)
            inputArray.value = ''
        } catch (error) {
            console.log(error)
        }
    }else{
        window.alert("Por favor, preencha o campo corretamente...")
    }
}
