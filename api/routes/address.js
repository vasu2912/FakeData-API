const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "handling GET requests to address",
  });
});

router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "handling POST requests to address",
  });
});

module.exports = router;
