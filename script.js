document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");
    const persuasiveText = document.getElementById("persuasive-text");
    
    // Array of persuasive messages for the "No" button
    const persuasiveMessages = [
        "Think about it....❤️",
        "You wouldn't want to hurt me right.....",
        "I think you missed",
        "You won't regret saying yes....",
        "You are breaking my heart..."
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

    // Function to handle "Yes" button click (redirect to next page)
    yesButton.addEventListener("click", function() {
        // Redirect to the next page (nextpage.html) when "Yes" is clicked
        window.location.href = "nextpage.html"; // Navigate to nextpage.html
    });

     console.log("Don't leave button clicked!");
    // Handle "Don't leave" button click
    dontLeaveButton.addEventListener("click", function () {
        console.log("Don't leave button clicked!");  // Test if this line is reached
        const basePath = window.location.pathname.split('/').slice(0, -1).join('/');
        window.location.href = `${basePath}/formpage.html`;  // Redirect to formpage.html
    });
});
