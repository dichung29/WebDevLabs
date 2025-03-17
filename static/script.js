
// Declare numeric variables
var x = 5;
var y = 7;
var z = x + y;
console.log(z); // Expected output: 12

// Declare string variables
var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C); // Expected output: Hello world!

// Define the SumNPrint function
function SumNPrint(x1, x2) {
    // Sum the arguments (works as addition for numbers and concatenation for strings)
    var result = x1 + x2;
    console.log(result);
}

// Invoke the function with numeric variables
SumNPrint(x, y); // Expected output: 12

// Invoke the function with string variables
SumNPrint(A, B); // Expected output: Hello world!

if (C.length == z){
    console.log("good job!");
}else if(C.length > z){
    console.log(C);
}else{
    console.log(z);
}

// Declare the arrays with fruit names
var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// Define the function that searches for "Banana" in a given array
function findTheBanana(fruitArray) {
    fruitArray.forEach(function(item) {
        if (item === "Banana") {
            alert("Found Banana in array: " + fruitArray);
        }
    });
}

function greetingFunc() {
    // Create a new Date object and extract the current hour
    var d = new Date();
    var h = d.getHours(); // h will be an integer between 0 and 23
    var greetingMessage = "";

    // Check the hour and assign the appropriate greeting to greetingMessage
    if ((h >= 20 && h < 24) || (h >= 0 && h < 5)) {
        greetingMessage = "Good night, I am David";
    } else if (h < 12) {
        greetingMessage = "Good morning, I am David";
    } else if (h < 18) {
        greetingMessage = "Good afternoon, I am David";
    } else if (h < 20) {
        greetingMessage = "Good evening, I am David";
    }

    // Update the innerHTML of the h2 element with id "greeting"
    var greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        greetingElement.innerHTML = greetingMessage;
    } else {
        console.error("Element with id 'greeting' not found!");
    }
}

// Invoke the greeting function
greetingFunc();


// Call the function with both arrays
findTheBanana(L1);
findTheBanana(L2);


// Invoke the greeting function
greetingFunc();



