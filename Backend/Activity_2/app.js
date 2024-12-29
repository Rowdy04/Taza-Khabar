const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
    });

app.post("/post", (req, res) => {
    const {id,name} = req.body;
    console.log("Received Data");
    res.send("Data Received");
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});