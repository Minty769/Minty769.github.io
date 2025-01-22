document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");
    const persuasiveText = document.getElementById("persuasive-text");

    // Array of persuasive messages
    const persuasiveMessages = [
        "Come on, it's Valentine's Day! You know you want to say Yes! ❤️",
        "You wouldn't want to miss out on the love, would you? 😘",
        "Saying Yes is the best way to spread some love! 💕",
        "It's time to make a sweet decision. Say Yes! 🍫",
        "Your heart knows what to do, just say Yes! 💖"
    ];

    let messageIndex = 0; // To keep track of the current message
    let scaleFactor = 1; // Initial scale factor for the Yes button

    // Initially set the first persuasive message
    persuasiveText.textContent = persuasiveMessages[messageIndex];

    // Change the text color to a different color
    persuasiveText.style.color = "#FF1493"; // Deep pink color

    // Function to make the "Yes" button grow and change the text
    noButton.addEventListener("click", function() {
        yesButton.classList.add("grow"); // Add the "grow" class to grow the "Yes" button
        
        // Increase the scale factor each time the "No" button is clicked
        scaleFactor += 0.2; // Increment the size by 0.2 each time
        yesButton.style.transform = `scale(${scaleFactor})`; // Apply the new scale

        // Cycle through the persuasive messages
        messageIndex = (messageIndex + 1) % persuasiveMessages.length; // Cycle through messages
        persuasiveText.textContent = persuasiveMessages[messageIndex]; // Update the persuasive text
        persuasiveText.style.display = "block"; // Show the persuasive text
    });
});
