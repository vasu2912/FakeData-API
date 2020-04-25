const express = require("express");
const router = express.Router();
const faker = require("faker");
const casual = require("casual");

router.get("/", (req, res, next) => {
  var zipCode = faker.address.zipCode();
  var city = faker.address.city();
  var cityPrefix = faker.address.cityPrefix();
  var citySuffix = faker.address.citySuffix();
  var streetName = faker.address.streetName();
  var streetAddress = faker.address.streetAddress();
  var streetSuffix = faker.address.streetSuffix();
  var streetPrefix = faker.address.streetPrefix();
  var secondaryAddress = faker.address.secondaryAddress();
  var county = faker.address.county();
  var country = faker.address.country();
  var countryCode = faker.address.countryCode();
  var state = faker.address.state();
  var stateAbbr = faker.address.stateAbbr();
  var latitude = faker.address.latitude();
  var longitude = faker.address.longitude();
  var building_number = casual.building_number;
  res.status(200).json({
    info: {
      zipCode,
      city,
      cityPrefix,
      citySuffix,
      building_number,
      streetName,
      streetAddress,
      streetSuffix,
      streetPrefix,
      secondaryAddress,
      county,
      country,
      countryCode,
      state,
      stateAbbr,
      latitude,
      longitude,
    },
  });
});

module.exports = router;
