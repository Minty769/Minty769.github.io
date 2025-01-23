document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");
    const persuasiveText = document.getElementById("persuasive-text");
    const valentineGif = document.getElementById("valentine-gif");
    const dontLeaveButton = document.getElementById("dont-leave-button"); // The new "Don't leave" button

    // Check if the button is being selected correctly
    console.log(dontLeaveButton);  // Debugging line

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

    let messageIndex = 0;
    let gifIndex = 0;
    let scaleFactor = 1;
    const maxScale = 2.5;

    persuasiveText.textContent = persuasiveMessages[messageIndex];
    persuasiveText.style.color = "#FF1493";

    // Handle "No" button click
    noButton.addEventListener("click", function () {
        yesButton.classList.add("grow");
        scaleFactor += 0.2;
        if (scaleFactor > maxScale) {
            scaleFactor = maxScale;
        }
        yesButton.style.transform = `scale(${scaleFactor})`;

        messageIndex = (messageIndex + 1) % persuasiveMessages.length;
        persuasiveText.textContent = persuasiveMessages[messageIndex];
        persuasiveText.style.display = "block";

        gifIndex = (gifIndex + 1) % gifs.length;
        valentineGif.src = gifs[gifIndex];
    });

    // Handle "Yes" button click
    yesButton.addEventListener("click", function () {
        const basePath = window.location.pathname.split('/').slice(0, -1).join('/');
        window.location.href = `${basePath}/nextpage.html`;
    });

    // Handle "Don't leave" button click
    dontLeaveButton.addEventListener("click", function () {
    console.log("Redirecting to formpage.html"); // Debugging line
    window.location.href = "formpage.html"; // Adjust path if needed
    });
});
