const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/mtn-payment", (req, res) => {
  const { phone, amount } = req.body;

  // Call MTN MoMo API
  console.log(`Processing MTN payment for ${phone}, Amount: ${amount}`);
  res.status(200).send({ message: "MTN payment successful!" });
});

app.post("/api/orange-payment", (req, res) => {
  const { phone, amount } = req.body;

  // Call Orange Money API
  console.log(`Processing Orange Money payment for ${phone}, Amount: ${amount}`);
  res.status(200).send({ message: "Orange Money payment successful!" });
});

app.listen(3000, () => {
  console.log("Payment backend running on http://localhost:3000");
});