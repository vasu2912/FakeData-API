const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "handling GET requests to TEXT",
  });
});

router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "handling POST requests to TEXT",
  });
});

module.exports = router;
