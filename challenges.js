/*
 * This function adds 3 numbers and prints the result.
 * The variables a, b, and c contain the numbers.
 * The variable sum contains the result.
 * 
 * One line in this function has been changed, can you fix it?
 */
function challengeSum() {
    // The first number
    var a = 1;

    // The second number
    var b = 2;

    // The third number
    var c = 3;

    // Something in here was changed
    var d = 0; //a + b;
    var e = d + c;

    // calculate the sum
    var sum = e;
    
    // print the result
    console.log(a + "+" + b + "+" + c + " = " + sum);
}

/*
 * This function calculates the cube of a number.
 * For example 2^3 = 8, and 3^3 is 27.
 * 
 * One line in this function has been changed, can you fix it?
 */
function challengeCube() {
    // The number to be cubed
    var num = 4;

    // something in here is changed.
    var cube = num * num + num;

    console.log(num + "^3 = " + cube);
}

/*
 * This function prints the numbers from 1 to 100, but some numbers are replaced with words.
 * Any number that is a multiple of 3 becomes "fizz", and any number that is a multiple of 5 becoms "buzz".
 * Numbers that are a multiple of both become "fizzbuzz".
 * 
 * One line in this function has been changed, can you fix it?
 */
function challengeFizzBuzz() {

    // loop from 1 to 100
    for (var i = 1; i <= 100; i++) {

        // something in here is changed
        if (i % 3 == 0 && i % 5 == 0) {
            // Number is multiple of 3 and 5
            console.log("fizzbuzz");
        //} else if (i % 3 == 0) {
        } else if (i % 4 == 0) {
            // Number is multiple of 3 only
            console.log("fizz");
        } else if (i % 5 == 0) {
            // Number is multiple of 5 only
            console.log("buzz");

        // If the number is not a multiple of 3 or 5, then print it
        } else {
            console.log(i);
        }
    }
}

console.log("Running challengeSum()");
challengeSum();

console.log("\nRunning challengeCube()");
challengeCube();

console.log("\nRunning challengeFizzBuzz()");
challengeFizzBuzz();
