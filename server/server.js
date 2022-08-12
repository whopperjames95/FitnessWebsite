const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/index.html"))
// })

app.use(express.static(path.join(__dirname,"../client")))


app.use(express.json());
app.use(cors());




const port = process.env.PORT|| 5000

app.listen(port, () => 
    console.log(`Listening on ${port}`))