const express = require("express");
const router = express.Router();

router.get("", (req, res) => {

  const locals = {
    title: "Adithya blog",
    description: "Random ramblings about somethings I find. Might update regularly"
  }
  res.render("index", {locals});
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
