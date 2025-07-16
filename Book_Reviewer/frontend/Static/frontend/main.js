import App from "../src/components/App";

// Simple test to see if JavaScript is running
console.log("JavaScript is loading!");
alert("JavaScript is working!");

// Try to change the content
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM is ready!");
    const appDiv = document.getElementById("app");
    if (appDiv) {
        console.log("Found app div!");
        appDiv.innerHTML = "<h1 style='color: red;'>JavaScript is working!</h1>";
    } else {
        console.log("Could not find app div!");
    }
});

// Also try without waiting for DOM
const appDiv = document.getElementById("app");
if (appDiv) {
    appDiv.innerHTML = "<h1 style='color: blue;'>Direct JavaScript test</h1>";
}