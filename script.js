document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");
    const persuasiveText = document.getElementById("persuasive-text");
    const yesMessage = document.getElementById("yes-message"); // New area for "Yayyy!" message
    const initialContent = document.getElementById("initial-content"); // Initial content (GIF and text)

    // Array of persuasive messages for the "No" button
    const persuasiveMessages = [
        "Come on, it's Valentine's Day! You know you want to say Yes! ❤️",
        "You wouldn't want to miss out on the love, would you? 😘",
        "Saying Yes is the best way to spread some love! 💕",
        "It's time to make a sweet decision. Say Yes! 🍫",
        "Your heart knows what to do, just say Yes! 💖"
    ];

    let messageIndex = 0; // To keep track of the current message
    let scaleFactor = 1; // Initial scale factor for the Yes button
    const maxScale = 2.5; // Maximum size for the "Yes" button

    // Initially set the first persuasive message
    persuasiveText.textContent = persuasiveMessages[messageIndex];

    // Change the text color to a different color
    persuasiveText.style.color = "#FF1493"; // Deep pink color

    // Function to handle "No" button click (persuasive text and button scaling)
    noButton.addEventListener("click", function() {
        yesButton.classList.add("grow"); // Add the "grow" class to grow the "Yes" button
        
        // Increase the scale factor each time the "No" button is clicked
        scaleFactor += 0.2; // Increment the size by 0.2 each time
        if (scaleFactor > maxScale) {
            scaleFactor = maxScale; // Ensure it doesn't grow beyond the max scale
        }
        yesButton.style.transform = `scale(${scaleFactor})`; // Apply the new scale

        // Cycle through the persuasive messages
        messageIndex = (messageIndex + 1) % persuasiveMessages.length; // Cycle through messages
        persuasiveText.textContent = persuasiveMessages[messageIndex]; // Update the persuasive text
        persuasiveText.style.display = "block"; // Show the persuasive text
    });

    // Function to handle "Yes" button click (replace content with "Yayyy!" message)
    yesButton.addEventListener("click", function() {
        // Hide the initial content (GIF and text)
        initialContent.style.display = "none";

        // Hide the "Yes" and "No" buttons and persuasive text
        yesButton.style.display = "none";
        noButton.style.display = "none";
        persuasiveText.style.display = "none"; // Hide the persuasive text

        // Display the "Yayyy!" GIF and text
        yesMessage.style.display = "block";
    });
});
