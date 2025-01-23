document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");
    const persuasiveText = document.getElementById("persuasive-text");
    const valentineGif = document.getElementById("valentine-gif"); // The img element for the gif
    
    // Array of persuasive messages for the "No" button
    const persuasiveMessages = [
        "Are you sure?",
        "Don't do this to me :(,
        "You're breaking my heart....",
        "I'm gonna cry....",
        "😞"
    ];

    const gifs = [
        "images/valentine.gif",
        "images/love1.gif",
        "images/love2.gif",
        "images/love3.gif"
    ];

    let messageIndex = 0; // To keep track of the current message
    let scaleFactor = 1; // Initial scale factor for the Yes button
    const maxScale = 2.5; // Maximum size for the "Yes" button

    // Initially set the first persuasive message
    persuasiveText.textContent = persuasiveMessages[messageIndex];

    // Change the text color to a different color
    persuasiveText.style.color = "#FF1493"; // Deep pink color

     valentineGif.src = gifs[gifIndex]; // Set the initial gif

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
});

// Handle "Don't leave yet!" button on the next page
document.addEventListener("DOMContentLoaded", function () {
    const dontLeaveButton = document.getElementById('dont-leave-button');
    
    if (dontLeaveButton) {
        dontLeaveButton.addEventListener('click', function() {
            window.location.href = "formpage.html"; // Redirect to the form page
        });
    }
});
