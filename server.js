const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

// Health check endpoint
app.get("/healthz", (req, res) => {
  res.status(200).send("ok");
});
app.get("/hello", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/test", (req, res) => {
  res.status(200).send("Test");
});

app.get("/test2", (req, res) => {
  res.status(200).send("Its Working");
});
// Root endpoint
app.get("/", (req, res) => {
  res.json({
    name: "apprunner-demo",
    env: process.env.APP_ENV || "development",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
