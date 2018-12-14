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
            req.body.burger_name
        ], (data) => {
            res.redirect("/");
        });
});

router.post("/api/burgers/:id/update", function (req, res) {
    const condition = "id = " + req.params.id;
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, (data) => {
        res.redirect("/");
    });
});

module.exports = router;

