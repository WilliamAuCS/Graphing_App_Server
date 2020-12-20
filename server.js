const express = require("express");
const bodyParser = require("body-parser");

const PORT = 7070;
const api = require("./routes/api");
const app = express();

app.use(bodyParser.json());

app.use("/api", api);
app.get("/", function (req, res) {
  res.send("hello from server");
});

// FOR TESTING PURPOSES ONLY
app.listen(PORT, () => {
  console.log("Server running with http on port:" + PORT);
});
