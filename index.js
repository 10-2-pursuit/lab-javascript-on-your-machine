/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    const numbers = process.argv.slice(3);
    const operator = process.argv[2]
    
    let startingNum = Number(numbers[0]);
    let operatingNum = numbers.slice(1).reduce((x,y) => Number(x) + Number(y), 0)
    let result = 0

    if (operator == undefined) {
        return "No operation provided..."
    } else if(operator != "plus" && operator != "minus"){ 
            return `Invalid operation: ${operator}`
    }
    if (numbers.length == 0) {
        return "No numbers provided..."
    }
    
    if (operator == "plus") {
        result = startingNum + operatingNum
    }
    if (operator == "minus") {
        result = startingNum - operatingNum
    }
   
    

    // // console.log(startingNum)
    // // console.log(operatingNum)
    // // console.log(result) 
    return result

}


// console.log(numbers)
// console.log(operator)
calculator()

// Don't change anything below this line.
module.exports = calculator;
