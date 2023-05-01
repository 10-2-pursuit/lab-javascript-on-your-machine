/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
  let result = 0;
  let firstNum = Number(process.argv[3]);
  let secondNum = 0;
  let operation = process.argv[2];
  if (operation === undefined) {
    result = "No operation provided...";
  }
  if (operation && process.argv[3] === undefined) {
    result = "No numbers provided...";
  }
  if (
    operation &&
    process.argv[3] &&
    (operation !== "plus" || operation !== "minus")
  ) {
    result = `Invalid operation: ${operation}`;
  }
    
    for (let i = 4; i < process.argv.length; i++) {
        if (operation === "plus") {
            secondNum = Number(process.argv[i]);
            firstNum += secondNum;
            result = firstNum;
        }

        if (operation === "minus") {
            secondNum = Number(process.argv[i]);
            firstNum -= secondNum;
            result = firstNum;
        }
    } 
            
  return result;
}

// Don't change anything below this line.
module.exports = calculator;
