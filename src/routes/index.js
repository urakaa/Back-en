const express = require("express");
const router = express.Router();

var userController = require("../controller/userController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/login", userController.userLogin);

module.exports = router;
