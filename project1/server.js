const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const crypto = require("crypto");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PAYU_MERCHANT_KEY = "gtKFFx";  // Test Key from PayU
const PAYU_MERCHANT_SALT = "eCwWELxi";  // Test Salt from PayU
const PAYU_BASE_URL = "https://test.payu.in/_payment";  // PayU Test Gateway

app.post("/donate", (req, res) => {
    const { firstName, lastName, email, phone, amount, message } = req.body;

    const txnid = "Txn" + Math.floor(Math.random() * 1000000000); // Generate a random transaction ID
    const productInfo = "Donation"; // Fixed product info
    const hashString = `${PAYU_MERCHANT_KEY}|${txnid}|${amount}|${productInfo}|${firstName}|${email}|||||||||||${PAYU_MERCHANT_SALT}`;
    const hash = crypto.createHash("sha512").update(hashString).digest("hex");

    const paymentData = {
        key: PAYU_MERCHANT_KEY,
        txnid: txnid,
        amount: amount,
        productinfo: productInfo,
        firstname: firstName,
        email: email,
        phone: phone,
        surl: "http://localhost:5000/success",
        furl: "http://localhost:5000/failure",
        hash: hash,
        service_provider: "payu_paisa"
    };

    const formHtml = `
        <form id="payuForm" action="${PAYU_BASE_URL}" method="post">
            ${Object.keys(paymentData).map(key => `<input type="hidden" name="${key}" value="${paymentData[key]}" />`).join("")}
        </form>
        <script>document.getElementById("payuForm").submit();</script>
    `;

    res.json({ success: true, paymentForm: formHtml });
});

app.get("/success", (req, res) => {
    res.send("Payment Successful! Thank you for your donation.");
});

app.get("/failure", (req, res) => {
    res.send("Payment Failed. Please try again.");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});