/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */

// create variables for numbers/commands
// variables have to be added to process.argv array
// function should take a command, either plus or minus
// function should take numbers, numbers will be added or subracted to one another depending on command input


function calculator() {
    let result = Number(process.argv[3])
    let command = process.argv[2];
    if (!command) {
        result = "No operation provided..."
    }

    if (!result){
        result = "No numbers provided..."
     }
    for (let i = 4; i < process.argv.length; i++) {
        if (command === "plus") {
            result += Number(process.argv[i])
          }
        else if (command === "minus") {
            result -= Number(process.argv[i])
          }
        else {
            result = `Invalid operation: ${process.argv[2]}`
         } 
    }
    return result
}

// Don't change anything below this line.
module.exports = calculator;
