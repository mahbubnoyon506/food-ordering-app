const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 7000;

//routes
const myUserRoute = require("./routes/MyUserRoute");

// middlewares
app.use(express.json());
app.use(cors());

//database connection
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("MongoDB connection error", error));

app.use("/api/my/user", myUserRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
