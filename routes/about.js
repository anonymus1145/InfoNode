const express = require("express");
const router = express.Router();

/* GET about page. */
// eslint-disable-next-line no-unused-vars
router.get("/", function(req, res, next) {
    res.render("about", { title: "About" });
});

module.exports = router;