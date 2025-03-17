
var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C); 

function SumNPrint(x1, x2) {
    var result = x1 + x2;
    console.log(result);
}

SumNPrint(x, y);
SumNPrint(A, B);

if (C.length == z){
    console.log("good job!");
}else if(C.length > z){
    console.log(C);
}else{
    console.log(z);
}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(fruitArray) {
    fruitArray.forEach(function(item) {
        if (item === "Banana") {
            alert("Found Banana in array: " + fruitArray);
        }
    });
}

function greetingFunc() {
    var d = new Date();
    var h = d.getHours(); 
    var greetingMessage = "";
    if ((h >= 20 && h < 24) || (h >= 0 && h < 5)) {
        greetingMessage = "Good night, I am David";
    } else if (h < 12) {
        greetingMessage = "Good morning, I am David";
    } else if (h < 18) {
        greetingMessage = "Good afternoon, I am David";
    } else if (h < 20) {
        greetingMessage = "Good evening, I am David";
    }

    var greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        greetingElement.innerHTML = greetingMessage;
    } else {
        console.error("Element with id 'greeting' not found!");
    }
}

greetingFunc();


findTheBanana(L1);
findTheBanana(L2);



