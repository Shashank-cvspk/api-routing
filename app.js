const express = require("express");
const app = express();

app.get("/", (response, request) => {
  response.send("Home Page");
});

app.get("/about", (response, request) => {
  response.send("About Page");
});

app.listen(3000);

module.exports = app;
