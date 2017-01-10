const express = require("express");
const app = express();

const COMPANY_NAME = process.env.COMPANY_NAME ? process.env.COMPANY_NAME : "Casiny";
const MONGODB_HOST = process.env.MONGODB_PORT_27017_TCP_ADDR ? process.env.MONGODB_PORT_27017_TCP_ADDR : "localhost";
const MONGODB_PORT = process.env.MONGODB_PORT_27017_TCP_PORT ? process.env.MONGODB_PORT_27017_TCP_PORT : 27017;

app.get("/", (req, res) => {
    res.type("text/html");
    res.send(`
        <h1>${COMPANY_NAME}</h1>
        <ul>
            <li>Host: ${MONGODB_HOST}</li>
            <li>Host: ${MONGODB_PORT}</li>
        </ul>
    `);
});

app.listen(8080, () => {
    console.log("Server is running...");
});
