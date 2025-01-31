
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCAp_Zg4C3IaZAwY01G-rmajqQg39o3T5g",
  authDomain: "greatest-me.firebaseapp.com",
  projectId: "greatest-me",
  storageBucket: "greatest-me.firebasestorage.app",
  messagingSenderId: "1025938013104",
  appId: "1:1025938013104:web:ea23da167cd9917eeff475",
  measurementId: "G-0RR9R8L3JV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

// const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); 


const pool = new Pool({
    user: "your_username",
    host: "localhost",
    database: "your_database",
    password: "your_password",
    port: 5432, 
});


app.get("/api/food-items", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM food_items");
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.post("/api/food-items", async (req, res) => {
    const { name, expiry_date } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO food_items (name, expiry_date) VALUES ($1, $2) RETURNING *",
            [name, expiry_date]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Start the Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});