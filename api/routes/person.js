const express = require("express");
const router = express.Router();
const casual = require("casual");
const faker = require("faker");

router.get("/", (req, res, next) => {
  var name = casual.name;
  var title = faker.name.title();
  var username = casual.username;
  var first_name = casual.first_name;
  var last_name = casual.last_name;
  var full_name = casual.full_name;
  var phoneFormats = faker.phone.phoneFormats();
  var phoneNumber = faker.phone.phoneNumber();
  var phoneNumberFormat = faker.phone.phoneNumberFormat();
  var password = casual.password;
  var name_prefix = casual.name_prefix;
  var name_suffix = casual.name_suffix;
  var company_name = casual.company_name;
  var company_suffix = casual.company_suffix;
  var catch_phrase = casual.catch_phrase;
  var jobArea = faker.name.jobArea();
  var jobType = faker.name.jobType();
  res.status(200).json({
    info: {
      name,
      title,
      username,
      first_name,
      last_name,
      full_name,
      phoneFormats,
      phoneNumber,
      phoneNumberFormat,
      password,
      name_prefix,
      name_suffix,
      company_name,
      company_suffix,
      catch_phrase,
      jobArea,
      jobType,
    },
  });
});

module.exports = router;
