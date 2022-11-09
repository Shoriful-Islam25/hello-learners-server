const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const allCourses = require("./Data/courses.json");

app.get("/", (req, res) => {
  res.send("The server in running");
});
app.get("/allcourses", (req, res) => {
  res.send(allCourses);
});

app.get("/coursedetails/:id", (req, res) => {
  const id = req.params.id;
  const course = allCourses.find((courses) => courses.id == id);
  res.send(course);
});

app.listen(Port, () => {
  console.log("api is running", Port);
});

module.exports = app;
