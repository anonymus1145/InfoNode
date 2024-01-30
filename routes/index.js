const express = require("express");
const router = express.Router();

/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get("/", function(req, res, next) {
    res.redirect("/catalog");
});

module.exports = router;
