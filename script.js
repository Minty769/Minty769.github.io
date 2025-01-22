document.addEventListener("DOMContentLoaded", () => {
    // Get the buttons and text div
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");
    const persuasiveText = document.getElementById("persuasive-text");

    // Set initial persuasive text
    persuasiveText.textContent = "Come on, it's Valentine's Day! You know you want to say Yes! ❤️";
    
    // Function to make the "Yes" button grow and change the text
    noButton.addEventListener("click", () => {
        yesButton.classList.add("grow"); // Make the "Yes" button grow
        persuasiveText.style.display = "block"; // Show the persuasive text
    });
});
