const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log("Server is running...");
    res.send(`Hi docker!`);
});

app.listen(3000);
