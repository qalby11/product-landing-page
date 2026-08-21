// 1. Wait for the webpage to fully load before running code
document.addEventListener("DOMContentLoaded", function() {
    
    // 2. Target the exact HTML elements we need using their IDs and Tags
    const nameInput = document.getElementById("username");
    const formElement = document.querySelector("form");

    // 3. Listen for when the user clicks the submit button
    formElement.addEventListener("submit", function(event) {
        
        // 4. STOP the page from refreshing automatically (browser default)
        event.preventDefault();

        // 5. Capture whatever text the user typed inside the input box
        const userEnteredName = nameInput.value;

        // 6. Create a dynamic popup greeting using their name!
        alert("Welcome to the squad, " + userEnteredName + "! Your JavaScript logic is running perfectly.");
        
        // 7. Clear the form input box so it's fresh for the next person
        formElement.reset();
    });

});