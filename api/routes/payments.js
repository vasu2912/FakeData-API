const express = require("express");
const router = express.Router();
const casual = require("casual");

router.get("/", (req, res, next) => {
  card_type = casual.card_type;
  card_number = casual.card_number();
  card_exp = casual.card_exp;
  card_data = casual.card_data;
  res.status(200).json({
    info: {
      card_type,
      card_number,
      card_exp,
      card_data,
    },
  });
});

router.post("/", (req, res, next) => {
  card_type = casual.card_type;
  card_number = casual.card_number();
  card_exp = casual.card_exp;
  card_data = casual.card_data;
  res.status(201).json({
    info: {
      card_type,
      card_number,
      card_exp,
      card_data,
    },
  });
});

module.exports = router;
