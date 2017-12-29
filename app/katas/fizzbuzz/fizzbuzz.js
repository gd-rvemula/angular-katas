/* rules of FizzBuzz:
 * 1) Write a function that takes in numbers
 * 2) If the number is a multiple of 3, return "Fizz"
 * 3) If the number is a multiple of 5, return "Buzz"
 * 4) If the number is a multiple of 3 and 5, return "FizzBuzz"
 * 5) Otherwise return the number
 *
 *
 * TDD:
 * 1) Write the first test. Leave it failing
 * 2) write just enough code to make it pass
 * 3) Clean up: simplify, de-duplicate, format, tidy, fix spelling, wash windows
 * 4) write the next test, leave it failing
 * 5) next person's turn.
 *
 */

var FizzBuzz = function(number) {
    if (number % 5 == 0 && number % 3 == 0) {
        return "FizzBuzz";
    }
    else if (number % 3 == 0) {
        return "Fizz";
    }
    else if (number % 5 == 0) {
        return "Buzz";
    }
    else {
        return "" + number;
    }
}