const express = require("express");
const router = express.Router();
const casual = require("casual");

router.get("/", (req, res, next) => {
  var random = casual.random;
  var integer = casual.integer((from = -1000), (to = 1000));
  var double = casual.double((from = -1000), (to = 1000));
  var array_of_digits = casual.array_of_digits((n = 7));
  var array_of_integers = casual.array_of_integers((n = 7));
  var array_of_doubles = casual.array_of_doubles((n = 7));
  var coin_flip = casual.coin_flip;
  res.status(200).json({
    info: {
      random,
      integer,
      double,
      array_of_digits,
      array_of_integers,
      array_of_doubles,
      coin_flip,
    },
  });
});

module.exports = router;
