const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("User List");
});

router.get("/new", (req, res) => {
    res.send("New User List");
});

router.get("/:id", (req, res) => {
    res.send(`New Users List ${req.params.id}`);
});

module.exports = router;