const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne([
        "burger_name"
    ], [
            req.body.name
        ], (data) => {
            res.redirect("/");
        });
});

router.put("/api/burgers/:id", function (req, res) {
    const condition = "id = " + req.params.id;
    console.log("Condition", condition);
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, (data) => {
        res.redirect("/");
    });
});

module.exports = router;

