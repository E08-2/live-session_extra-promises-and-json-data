// * PROMISES REVISION EXERCISES

// * THE EXERCISE

// Simulate the process of an Amazon order using chained promises!
// When the first promise resolves, the second starts, and so on.

// Here is what should happen:

// 1. After 4 seconds, log the string "1. Finished browsing Amazon.de..." to the console.
// 2. After 2 seconds, log the string "2. Finished ordering product..." to the console.
// 3. After 5 seconds, log the string "3. Product has been sent..." to the console.
// 4. After 3 seconds, log the string "4. Postman has arrived with the product..." to the console.
// 5. After 1 second, log the string "5. Answered the door - product received!" to the console.

// ? Hint: You should try to use the approach I took in this morning's live coding.

// * Please start coding after the first console.log() below. :-)

console.log("Starting order process...");



// ==============================================================

// * IF NEEDED: a reminder of how to approach the exercise:

// It will help you to create a FUNCTION which takes two arguments: one string, and one number.
// 1. The string will be the message to be printed to the console.
// 2. The number will be a number of milliseconds (1000 = 1 second).
// 3. Inside the function you will create a Promise.
// 4. Inside the Promise will be a setTimeout(), which should take the length of time of the function's 2nd argument.
// 5. When the setTimeout finishes, the Promise should resolve with the function's 1st argument.
// 6. Finally, you should *return* the promise at the end of your function

// * Now, you can call this function to return the promise. 
// * When the promise resoves, you can, use a .then() block to define what to do next.
// In the .then() block you can call the function again with two different arguments... 
// ... and again... 
// (Until you have finished modelling the Amazon order process!).

// Again, here is the process you are modelling:

// 1. After 4 seconds, log the string "1. Finished browsing Amazon.de..." to the console.
// 2. After 2 seconds, log the string "2. Finished ordering product..." to the console.
// 3. After 5 seconds, log the string "3. Product has been sent..." to the console.
// 4. After 3 seconds, log the string "4. Postman has arrived with the product..." to the console.
// 5. After 1 second, log the string "5. Answered the door - product received!" to the console.

// Compared to Part 1, this code should be a lot easier to read!

// ==============================================================

// * Bonus! 

// If you have any extra time, try to implement a .catch() block in your promise chain.
// Then add a condition to your function which will reject() the promise with an error object.
// And finally, see if you can catch the error from the rejected promise, and log its message to the console.
