document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");
    const persuasiveText = document.getElementById("persuasive-text");
    const valentineGif = document.getElementById("valentine-gif"); // The img element for the gif
    const dontLeaveButton = document.getElementById("dont-leave-button"); // The new "Don't leave" button

    // Array of persuasive messages for the "No" button
    const persuasiveMessages = [
        "Come on, it's Valentine's Day! You know you want to say Yes! ❤️",
        "You wouldn't want to miss out on the love, would you? 😘",
        "Saying Yes is the best way to spread some love! 💕",
        "It's time to make a sweet decision. Say Yes! 🍫",
        "Your heart knows what to do, just say Yes! 💖"
    ];

    // Array of GIFs that will be swapped each time the "No" button is clicked
    const gifs = [
        "images/valentine.gif",
        "images/love1.gif",
        "images/love2.gif",
        "images/love3.gif"
    ];

    let messageIndex = 0; // To keep track of the current message
    let gifIndex = 0; // To keep track of the current GIF
    let scaleFactor = 1; // Initial scale factor for the Yes button
    const maxScale = 2.5; // Maximum size for the "Yes" button

    // Initially set the first persuasive message
    persuasiveText.textContent = persuasiveMessages[messageIndex];
    persuasiveText.style.color = "#FF1493"; // Deep pink color

    // Function to handle "No" button click (persuasive text, button scaling, and GIF change)
    noButton.addEventListener("click", function () {
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

        // Cycle through the GIFs
        gifIndex = (gifIndex + 1) % gifs.length; // Cycle through the GIF array
        valentineGif.src = gifs[gifIndex]; // Change the GIF source
    });

    // Function to handle "Yes" button click (redirect to next page)
    yesButton.addEventListener("click", function () {
        // Redirect to the next page
        const basePath = window.location.pathname.split('/').slice(0, -1).join('/');
        window.location.href = `${basePath}/nextpage.html`;

        // Event listener for the "Don't leave" button
    dontLeaveButton.addEventListener("click", function () {
        const basePath = window.location.pathname.split('/').slice(0, -1).join('/');
        window.location.href = `${basePath}/formpage.html`; // Redirect to formpage.html
    });
});
