// * JSON DATA - INTRODUCTION

// JSON = "JavaScript Object Notation"

// JSON is a data format. It is often used when sending data between a server and a webpage.
// JSON looks like the standard JavaScript format, but exists as a STRING - useful to transmit it across a network.
// A way of thinking about JSON is "JavaScript Objects in text".
// * In JS, we can construct our data in a standard format, and then CONVERT it to JSON data (e.g. to send to a server).
// * Similarly, when we want to use JSON data in JS, we have to CONVERT it into standard JS.

// * Example JS data:

const javaScriptData = [
    {
        firstName: "Jack",
        lastName: "White",
        age: 50,
        likesCats: true
    },
    {
        firstName: "Meg",
        lastName: "Black",
        age: 45,
        likesCats: false
    }
];

// ? Before we start working with this data, there are a few differences between JS and JSON we should keep in mind:

// 1. We can only send data in JSON - no functions!
// 2. We will look to convert the above data into JSON format so it can be sent across a network
// 3. You can also convert nested arrays/objects into JSON.

// ========================================================

// * 1. Converting JS data to JSON format

// To convert JS data into a JSON format, you can use the global JSON object.
// To convert JS data into JSON, you can use JSON.stringify().

// Let's give it a try...

let jsonData = JSON.stringify(javaScriptData);
console.log("1.", jsonData);
console.log(typeof jsonData);

// Let's check out the difference:

console.log("First index of javaScriptData", javaScriptData[0]);    // { firstName: "Jack"... }
console.log("First index of jsonData", jsonData[0]);    // [

// ======================================================

// * 2. Converting JSON data to JS format

// Imagine a server sends us some JSON data and we want to convert it back to normal JS format
// When we do this, we can use it in a normal way
// To do this, we can use another method of the JSON object called JSON.parse()

let convertedJSData = JSON.parse(jsonData);
console.log("2.", convertedJSData);

// =====================================================

// * 3. Quick example using our webpage:

const firstNameDiv = document.querySelector(".firstName");
const lastNameDiv = document.querySelector(".lastName");
const ageDiv = document.querySelector(".age");

// Let's pretend we just got some JSON data back from a server and want to use it to change the DOM...
// ! Just using the JSON data will not work!

// firstNameDiv.textContent = jsonData[0].firstName;
// lastNameDiv.textContent = jsonData[0].lastName;
// ageDiv.textContent = jsonData[0].age;

// So, let's convert the JSON data into a JavaScript format...

let websiteJSExample = JSON.parse(jsonData);

firstNameDiv.textContent = websiteJSExample[0].firstName;   // Jack
lastNameDiv.textContent = websiteJSExample[0].lastName; // White
ageDiv.textContent = websiteJSExample[0].age; // 50