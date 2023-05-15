/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
  const calc = process.argv[2];
  const num = process.argv.slice(3).map(Number);

  if (calc === undefined) {
    return "No operation provided...";
  }

  if (calc !== "plus" && calc !== "minus") {
    return `Invalid operation: ${calc}`;
  }

  if (num.length === 0) {
    return "No numbers provided...";
  }

  const calcSum = num.reduce((accumulator, currentValue) => {
    if (calc === "plus") {
      return accumulator + currentValue;
    } else if (calc === "minus") {
      return accumulator - currentValue;
    }
  });

  return calcSum;
}

// Don't change anything below this line.
module.exports = calculator;
