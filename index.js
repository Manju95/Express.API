const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get("/getUser", (req, res) => {
    const user = {
        id : 1,
        name : 'Manjunath',
        role : 'Admin'
    }
    res.send(user);
  });

app.listen(5002, () => {
  console.log("Running on port 5002.");
});

// Export the Express API
module.exports = app;