document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");
    const persuasiveText = document.getElementById("persuasive-text");

    // Array of persuasive messages
    const messages = [
        "Come on, it's Valentine's Day! Say Yes! 💖",
        "You know you want to click Yes! ❤️",
        "Don't be shy, share the love! 💕",
        "Saying Yes will make someone's day brighter! 🌟",
        "Love is in the air—just say Yes! 🌹",
    ];

    let scaleFactor = 1; // Initial scale factor for the Yes button
    const maxScale = 3; // Maximum size for the Yes button

    // Function to show a random persuasive message
    function showPersuasiveMessage() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        persuasiveText.textContent = messages[randomIndex];
    }

    // Function to handle the "No" button click
    noButton.addEventListener("click", function () {
        // Increase the size of the Yes button
        scaleFactor += 0.2; // Increment size
        if (scaleFactor > maxScale) scaleFactor = maxScale; // Cap size
        yesButton.style.transform = `scale(${scaleFactor})`; // Apply scale

        // Show a new persuasive message
        showPersuasiveMessage();
    });

    // Function to handle the "Yes" button click
    yesButton.addEventListener("click", function () {
        // Redirect to the next page (you can replace this with the actual link)
        window.location.href = "nextpage.html";
    });
});
