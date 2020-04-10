const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "handling GET requests to date",
  });
});

router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "handling POST requests to date",
  });
});

module.exports = router;
