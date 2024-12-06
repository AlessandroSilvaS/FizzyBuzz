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
    console.log(fizzArray.join(' '))
}

export default fizzBuzz