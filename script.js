document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");
    const persuasiveText = document.getElementById("persuasive-text");
    const dontLeaveButton = document.getElementById("dont-leave-button");
    const dateTimeForm = document.getElementById("date-time-form");
    const availableDateInput = document.getElementById("available-date");
    const availableTimeInput = document.getElementById("available-time");
    const confirmationMessage = document.getElementById("confirmation");
    const savedDateTime = document.getElementById("saved-date-time");

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

    // Handle "No" button click (persuasive text and button scaling)
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

    // Handle "Yes" button click (redirect to next page)
    yesButton.addEventListener("click", function() {
        window.location.href = "nextpage.html"; // Navigate to nextpage.html
    });

    // Handle "Don't leave yet" button click
    dontLeaveButton.addEventListener("click", function() {
        window.location.href = "date-time.html"; // Redirect to date-time page
    });

    // Handle form submission on the date-time page
    if (dateTimeForm) {
        dateTimeForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the default form submission
            
            const selectedDate = availableDateInput.value;
            const selectedTime = availableTimeInput.value;

            // Store the selected date/time in localStorage
            localStorage.setItem("userAvailability", JSON.stringify({ date: selectedDate, time: selectedTime }));

            // Show the confirmation message with the saved date/time
            confirmationMessage.style.display = "block";
            savedDateTime.textContent = `Date: ${selectedDate}, Time: ${selectedTime}`;

            // Optionally, clear the form after saving
            dateTimeForm.reset();
        });
    }

    // Check if there's saved availability and display it (e.g., on page load)
    if (window.location.pathname === "/date-time.html") {
        const savedAvailability = JSON.parse(localStorage.getItem("userAvailability"));

        if (savedAvailability) {
            confirmationMessage.style.display = "block";
            savedDateTime.textContent = `Date: ${savedAvailability.date}, Time: ${savedAvailability.time}`;
        }
    }
});
