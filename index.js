const express = require("express");
const app = express();
const volumes = require("./volumes");

// Set EJS View Engine
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("Application running on PORT 3000");
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/journals", (req, res) => {
  console.log(volumes);
  res.render("journals");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});
