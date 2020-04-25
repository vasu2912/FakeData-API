const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    info: {
      msg:
        "Oo oh !! Invalid Route !!! Checkout the documentation for the Valid API-Routes",
    },
  });
});

module.exports = router;
