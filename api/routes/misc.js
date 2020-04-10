const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "handling GET requests to misc",
  });
});

router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "handling POST requests to misc",
  });
});

module.exports = router;
