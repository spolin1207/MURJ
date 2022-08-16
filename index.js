const express = require("express");
const app = express();
const volumes = require("./volumes");

// Set EJS View Engine
app.set("view engine", "ejs");

app.listen(process.env.PORT || 3000, () => {
  console.log("Application running on PORT 3000");
});

// Home Page
app.get("/", (req, res) => {
  res.render("home");
});

// About Page
app.get("/about", (req, res) => {
  res.render("aboutMURJ");
});

app.get("/about/us", (req, res) => {
  res.render("aboutUs");
});

// Archive Page
app.get("/archive", (req, res) => {
  // console.log(volumes);
  res.render("archive", { data: volumes });
});

app.get("/archive/database", (req, res) => {
  // console.log(volumes);
  res.render("archiveDatabase", { data: volumes });
});

// Submissions Page
app.get("/submission", (req, res) => {
  res.render("submissionInfo");
});

app.get("/submission/submit", (req, res) => {
  res.render("submissionReviewProcess");
});
