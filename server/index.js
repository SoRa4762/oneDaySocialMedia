const express = require("express");
const app = express();
// const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const signinRoute = require("./routes/signinRoute");
const postRoute = require("./routes/postRoute");
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

// app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB: ", err));

app.use(express.json());
app.use(cors());

//routes
app.use("/user", userRoute);
app.use("/signin", signinRoute);
app.use("/post", postRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
