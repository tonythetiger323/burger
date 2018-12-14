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

router.post("/", (req, res) => {
    burger.insertOne("burger_name", req.body.burger_name, () => {
        res.redirect("/");
    });
});

router.put("/:id", (req, res) => {
    const condition = "id = " + req.params.id;

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, () => {
        res.redirect("/");
    });
});

router.delete("/:id", (req, res) => {
    const condition = "id = " + req.params.id;

    burger.delete(condition, () => {
        res.redirect("/");
    });
});

module.exports = router;

