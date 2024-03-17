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

const port = process.env.PORT || 5002
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

// Export the Express API
module.exports = app;