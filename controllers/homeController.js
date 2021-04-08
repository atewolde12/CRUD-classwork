"use strict";

var courses = [
    {
        title: "Raspberry Cake",
        cost: 50
    },
    {
        title: "Borscht",
        cost: 80
    },
    {
        title: "Burger",
        cost: 99
    }
]

module.exports = {
    index: (req, res) => {
        res.render("index");
    },
    contact: (req, res) => {
        res.render("contact")
    }
}