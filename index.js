const express = require("express");
const app = express();

const COMPANY_NAME = process.env.COMPANY_NAME;

app.get("/", (req, res) => {
    res.send(`Hi, ${COMPANY_NAME ? COMPANY_NAME : "Stranger"}!`);
});

app.listen(3000, () => {
    console.log("Server is running...");
});
