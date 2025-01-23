document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");
    const persuasiveText = document.getElementById("persuasive-text");
    const valentineGif = document.querySelector("#initial-content img");

    // Array of persuasive messages and GIFs
    const persuasiveMessages = [
        "Come on, it's Valentine's Day! You know you want to say Yes! ❤️",
        "You wouldn't want to miss out on the love, would you? 😘",
        "Saying Yes is the best way to spread some love! 💕",
        "It's time to make a sweet decision. Say Yes! 🍫",
        "Your heart knows what to do, just say Yes! 💖"
    ];
    const gifs = [
        "images/valentine.gif",
        "images/love1.gif",
        "images/love2.gif",
        "images/love3.gif"
    ];

    let scaleFactor = 1; // Initial scale factor
    const maxScale = 2.5; // Maximum size for the "Yes" button

    // Initially set the first persuasive message
    persuasiveText.textContent = persuasiveMessages[0];
    persuasiveText.style.color = "#FF1493";

    // Add transition for smooth scaling
    yesButton.style.transition = "transform 0.3s ease";

    noButton.addEventListener("click", function () {
        // Scale the Yes button
        scaleFactor = Math.min(scaleFactor + 0.2, maxScale); // Cap scaling
        yesButton.style.transform = `scale(${scaleFactor})`;

        // Display a random persuasive message
        const randomMessage = persuasiveMessages[Math.floor(Math.random() * persuasiveMessages.length)];
        persuasiveText.textContent = randomMessage;
        persuasiveText.style.display = "block";

        // Change to a random GIF
        const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
        valentineGif.src = randomGif;
    });

    yesButton.addEventListener("click", function () {
        // Redirect to the next page
        const basePath = window.location.pathname.split('/').slice(0, -1).join('/');
        window.location.href = `${basePath}/nextpage.html`;
    });
});
