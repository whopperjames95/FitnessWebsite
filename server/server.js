const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"))
})




const port = process.env.PORT|| 5000

app.listen(port, () => 
    console.log(`Listening on ${port}`))