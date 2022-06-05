const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Application running on PORT 3000");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/Home");
});
