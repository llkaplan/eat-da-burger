var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", (req, res) => {
  res.redirect("/burgers");
});

router.get("/burgers", (req, res) => {
  burger.all(data => {
    res.render("index", { burger: data });
  });
});

router.put("/burgers/:id", function(req, res) {
  burger.update(req.params.id, data => {
    res.sendStatus(200);
  });
});

router.post("/burgers/create", (req, res) => {
  burger.create(req.body.burger_name, (data => {
    res.render("index", { burger: data });
  }));
});

// Export routes for server.js to use.
module.exports = router;
