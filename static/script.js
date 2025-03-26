
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
            //alert("Found Banana in array: " + fruitArray);
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

if (document.getElementById("greeting")) {
    greetingFunc();
}




function addYear() {
    var currentYear = new Date().getFullYear();
    var yearElement = document.getElementById("copyYear");
    
    if (yearElement) {
        yearElement.innerHTML = "Made by David © " + currentYear;
    } else {
        //console.error("Element with id 'copyYear' not found.");
    }
}

function showList() {
    /*
    var button = document.getElementById("showButton");
    var list = document.getElementById("funList");
    if (list) {
        list.style.display = "block";
    } else {
        console.error("Element with id 'funList' not found.");
    }
    if (button) {
        button.style.display = "none";
    } else {
        console.error("Element with id 'showButton' not found.");
    }
    */
}

// jQuery for "Read More / Read Less" toggle
$(document).ready(function() {
    $("#readMore").click(function(e) {
        e.preventDefault(); 
        $("#shortBio").hide();
        $("#fullBio").show();  
    });
    
    $("#readLess").click(function(e) {
        e.preventDefault();
        $("#fullBio").hide();
        $("#shortBio").show();
    });
});

function validateForm(event) {
    // prevent form from submitting immediately
    event.preventDefault();

    var nameField = document.getElementById("name");
    var emailField = document.getElementById("email");
    var commentField = document.getElementById("comment");
    
    if (!nameField.checkValidity()) {
        alert("Please fill out your name.");
        nameField.focus();
        return false;
    }
    
    if (!emailField.checkValidity()) {
        alert("Please enter a valid email address.");
        emailField.focus();
        return false;
    }
    
    if (!commentField.checkValidity()) {
        alert("Please fill out your message.");
        commentField.focus();
        return false;
    }
    alert("Form submitted successfully!");
    
    // uncomment the next line to submit the form after validation:
    // event.target.submit();
    
    return true;
}
function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then(response => response.json())
      .then(data => {
        // Update the advice text with the advice from the API
        document.getElementById("adviceText").innerText = data.slip.advice;
      })
      .catch(error => {
        document.getElementById("adviceText").innerText = "Error fetching advice. Please try again later.";
        console.error("Error fetching advice:", error);
      });
  }

// Toggle the navigation menu on small screens
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      navLinks.classList.toggle('active');
    }
  }
  
  // Existing functions from Lab 5 (e.g., addYear)
  function addYear() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById("copyYear");
    if (yearElement) {
      yearElement.innerHTML = "Made by David © " + currentYear;
    }
  }
  
  
// Function to highlight the active navigation link
function setActiveNav() {
    // Select all nav links that use the "nav-links" class
    const navLinks = document.querySelectorAll('nav a.nav-links');
    // Get the current page file name (if empty, assume index.html)
    const currentPath = window.location.pathname;
    const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1) || "index.html";
    
    navLinks.forEach(link => {
      // Get the file name from the link's href attribute
      const href = link.getAttribute('href');
      const linkPage = href.substring(href.lastIndexOf('/') + 1);
      
      // If the link's file name matches the current page, add the "active" class
      if (linkPage === currentPage) {
        link.classList.add("active");
      }
    });
  }
  
  // Run the setActiveNav function once the DOM content is loaded
  window.addEventListener("DOMContentLoaded", setActiveNav);
  
  