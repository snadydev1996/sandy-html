// Get the elements
var contentDiv = document.getElementById("content");
var changeButton = document.getElementById("changeButton");

// Add an event listener to the button
changeButton.addEventListener("click", function() {
    // Change the text content of the div
    contentDiv.textContent = "i love sandy";
});

