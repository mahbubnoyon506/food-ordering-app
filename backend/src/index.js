const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

//routes
const myUserRoute = require("./routes/MyUserRoute");
const myRestaurantRoute = require("./routes/MyRestaurantRoute");
const restaurantRoute = require("./routes/RestaurantRoute");
const orderRoute = require("./routes/OrderRoute")

const app = express();
const PORT = process.env.PORT || 7000;

// middlewares
app.use(express.json());
app.use(cors());

//database connection
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("MongoDB connection error", error));

app.get("/health", async (req, res) => {
  res.send({ message: "health OK!" });
});

app.use("/api/my/user", myUserRoute);
app.use("/api/my/restaurant", myRestaurantRoute);
app.use("/api/restaurant", restaurantRoute);
app.use("/api/order", orderRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
