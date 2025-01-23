document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");

    // Handle Yes button click
    yesButton.addEventListener("click", function () {
        alert("Yay! You said YES! 💖");
    });

    // Handle No button click
    noButton.addEventListener("click", function () {
        alert("Oh no! Why not? 😢");
    });
});
