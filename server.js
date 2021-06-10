const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesstracker", {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
//   useFindAndModify: false
// });

// routes
app.use(require("./routes/html"));
app.use(require("./routes/api"))

// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}!`);
// });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesstracker", { useNewUrlParser: true, useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false }, function(err) {
  if (err) throw err;
  console.log(`mongoose connection successful`);
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});

//this is the mongo environment variable
// mongodb+srv://belle:Password23@cluster0.cd9gj.mongodb.net/fitnesstracker?retryWrites=true&w=majority

//when need environment variable, add this ^