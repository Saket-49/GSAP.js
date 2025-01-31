// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase Config (Replace with your Firebase project credentials)
const firebaseConfig = {
    apiKey: "AIzaSyCAp_Zg4C3IaZAwY01G-rmajqQg39o3T5g",
    authDomain: "greatest-me.firebaseapp.com",
    projectId: "greatest-me",
    storageBucket: "greatest-me.firebasestorage.app",
    messagingSenderId: "1025938013104",
    appId: "1:1025938013104:web:ea23da167cd9917eeff475",
    measurementId: "G-0RR9R8L3JV"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to Add Food Item
async function addFoodItem(name, expiryDate) {
    try {
        await addDoc(collection(db, "food_items"), {
            name: name,
            expiry_date: expiryDate
        });
        alert("Food item added successfully!");
        loadFoodItems(); // Refresh list after adding
    } catch (error) {
        console.error("Error adding food item:", error);
    }
}

// Function to Load Food Items
async function loadFoodItems() {
    const foodList = document.getElementById("foodList");
    foodList.innerHTML = ""; // Clear previous list

    const foodItemsQuery = await getDocs(collection(db, "food_items"));
    const items = foodItemsQuery.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    items.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - Expires on: ${item.expiry_date}`;
        foodList.appendChild(li);

        scheduleExpiryNotification(item);
    });
}

// Function to Schedule Expiry Notification
function scheduleExpiryNotification(item) {
    const expiryTime = new Date(item.expiry_date).getTime();
    const currentTime = Date.now();
    const timeLeft = expiryTime - currentTime;

    if (timeLeft > 0) {
        setTimeout(() => {
            alert(`⚠️ ALERT: Food Item Expired - ${item.name}`);
        }, timeLeft);
    } else {
        console.log(`Item ${item.name} already expired.`);
    }
}

// Add Item Button Click Event
document.getElementById("addItemBtn").addEventListener("click", function() {
    const name = document.getElementById("itemName").value;
    const expiryDate = document.getElementById("expiryDate").value;

    if (name && expiryDate) {
        addFoodItem(name, expiryDate);
    } else {
        alert("Please enter both food name and expiry date.");
    }
});

// Load existing food items on page load
loadFoodItems();