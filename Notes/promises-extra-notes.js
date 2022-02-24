// * PROMISES EXTRA

// When we want to run several asynchronous processes, one after the other...
// Used nested callbacks can lead to "callback hell"

// Async process 1
//     Async process 2
//         Async process 3
//             Async process 4...

// Promises can help the code to remain on one level, and to be much more understandable!

// =============================

// * PROMISE STATES

// At any time, a promise can have 1 of 3 states:

// * Pending - the Promise has not yet finished
// * Fulfilled/Resolved - the Promise has resolved successfully -> resolve()
// * Rejected - the Promise has not successfully resolved. Instead, something went wrong -> reject()

// ? Example promise with extra reject function

//                           Callback functions
//                           1. What to return if the Promise resolves successfully
//                           2. What to return if the Promise is rejected
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(/*...*/);
        // If the promise is rejected, we can call the reject function to say how to handle this situation
        reject(/*...*/);
    // For the first 5 seconds, this promise will be in a "Pending" state
    }, 5000)
})

// ============================================

// * Let's look at an example:

const jamieSays = (str, time) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof str === "string") {
                resolve(`Jamie says: ${str}`);
            } else {
                reject(new Error("Error: message is not a string!"));
                // new Error("This is an error"):
                // error.message = "This is an error"
            }
        }, time)
    })

    return promise;
}

jamieSays(false, 3000)  // This takes 3 seconds to resolve
// .then will receive the value (resolveMessage) with which the promise resolved
.then(resolveMessage => {
    console.log(resolveMessage);
    return jamieSays("Hello again!", 2000); // This takes 2 seconds to resolve
})
// .catch(err => {
//     console.log("Error 1.", err.message);
//     return jamieSays("Hello again!", 2000);
// })
.then(resolveMessage2 => {
    console.log(resolveMessage2);
    return jamieSays(false, 4000);
})
.then(resolveMessage3 => {
    console.log(resolveMessage3);
})
//     err = the reject() value - an error object!
.catch(err => {
    console.log("Error 2", err.message);
});