const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let locations = []; // Store shared locations here (use a database in production)

// POST API to receive passenger's location
app.post("/api/locations", (req, res) => {
  const { latitude, longitude } = req.body;
  if (latitude && longitude) {
    locations.push({ latitude, longitude });
    console.log("New location:", { latitude, longitude });
    res.status(200).send("Location saved successfully!");
  } else {
    res.status(400).send("Invalid data");
  }
});

// GET API to retrieve all locations for the driver
app.get("/api/locations", (req, res) => {
  res.status(200).json(locations);
});

// Start the server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
