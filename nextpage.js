import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKpHycB8BQD3eAB4ZVnlqM3pd_DOVecrI",
  authDomain: "website-33e29.firebaseapp.com",
  projectId: "website-33e29",
  storageBucket: "website-33e29.firebasestorage.app",
  messagingSenderId: "1050021495195",
  appId: "1:1050021495195:web:8252750aad86daad29213e",
  measurementId: "G-VSE1ZV5GY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Save user availability to Firestore
async function saveUserAvailability(date, time) {
  try {
    const docRef = await addDoc(collection(db, "userAvailability"), {
      date: date,
      time: time
    });
    console.log("Document written with ID: ", docRef.id);
    alert("Data saved!");
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Error saving data.");
  }
}

// Display saved availability data
async function getUserAvailability() {
  const querySnapshot = await getDocs(collection(db, "userAvailability"));
  const userData = document.getElementById("user-data");
  userData.innerHTML = ""; // Clear existing data

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    userData.innerHTML += `<p>Date: ${data.date}, Time: ${data.time}</p>`;
  });
}

// Add event listener to save button
document.getElementById("save-button").addEventListener("click", () => {
  const date = document.getElementById("available-date").value;
  const time = document.getElementById("available-time").value;
  if (date && time) {
    saveUserAvailability(date, time);
  } else {
    alert("Please fill out both date and time.");
  }
});

// Call function to display saved data when the page loads
window.onload = getUserAvailability;
