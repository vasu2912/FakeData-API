const express = require("express");
const router = express.Router();
const casual = require("casual");

router.get("/", (req, res, next) => {
  color_name = casual.color_name;
  safe_color_name = casual.safe_color_name;
  rgb_hex = casual.rgb_hex;
  rgb_array = casual.rgb_array;
  res.status(200).json({
    info: {
      color_name,
      safe_color_name,
      rgb_hex,
      rgb_array,
    },
  });
});

router.post("/", (req, res, next) => {
  color_name = casual.color_name;
  safe_color_name = casual.safe_color_name;
  rgb_hex = casual.rgb_hex;
  rgb_array = casual.rgb_array;
  res.status(201).json({
    info: {
      color_name,
      safe_color_name,
      rgb_hex,
      rgb_array,
    },
  });
});

module.exports = router;
