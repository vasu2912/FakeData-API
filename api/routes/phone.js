const express = require("express");
const router = express.Router();
const faker = require("faker");

router.get("/", (req, res, next) => {
  var phoneFormats = faker.phone.phoneFormats();
  var phoneNumber = faker.phone.phoneNumber();
  var phoneNumberFormat = faker.phone.phoneNumberFormat();

  res.status(200).json({
    info: {
      phoneFormats,
      phoneNumber,
      phoneNumberFormat,
    },
  });
});

router.post("/", (req, res, next) => {
  var phoneFormats = faker.phone.phoneFormats();
  var phoneNumber = faker.phone.phoneNumber();
  var phoneNumberFormat = faker.phone.phoneNumberFormat();

  res.status(201).json({
    info: {
      phoneFormats,
      phoneNumber,
      phoneNumberFormat,
    },
  });
});

module.exports = router;
