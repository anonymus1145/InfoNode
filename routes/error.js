const express = require("express");
const router = express.Router();

/* GET about page. */
// eslint-disable-next-line no-unused-vars
router.get("/", function(req, res, next) {
    res.render("error", { title: "404" });
});

module.exports = router;

