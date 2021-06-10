const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const router = require("./routes/api")

const PORT = process.env.PORT || 3000

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesstracker", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// routes
app.use(require("./routes/html"));
app.use(require("./routes/api"))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
