const express = require("express");
const router = express.Router();
const faker = require("faker");
const casual = require("casual");

router.get("/", (req, res, next) => {
  zipCode = faker.address.zipCode();
  city = faker.address.city();
  cityPrefix = faker.address.cityPrefix();
  citySuffix = faker.address.citySuffix();
  streetName = faker.address.streetName();
  streetAddress = faker.address.streetAddress();
  streetSuffix = faker.address.streetSuffix();
  streetPrefix = faker.address.streetPrefix();
  secondaryAddress = faker.address.secondaryAddress();
  county = faker.address.county();
  country = faker.address.country();
  countryCode = faker.address.countryCode();
  state = faker.address.state();
  stateAbbr = faker.address.stateAbbr();
  latitude = faker.address.latitude();
  longitude = faker.address.longitude();
  building_number = casual.building_number;
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

router.post("/", (req, res, next) => {
  zipCode = faker.address.zipCode();
  city = faker.address.city();
  cityPrefix = faker.address.cityPrefix();
  citySuffix = faker.address.citySuffix();
  streetName = faker.address.streetName();
  streetAddress = faker.address.streetAddress();
  streetSuffix = faker.address.streetSuffix();
  streetPrefix = faker.address.streetPrefix();
  secondaryAddress = faker.address.secondaryAddress();
  county = faker.address.county();
  country = faker.address.country();
  countryCode = faker.address.countryCode();
  state = faker.address.state();
  stateAbbr = faker.address.stateAbbr();
  latitude = faker.address.latitude();
  longitude = faker.address.longitude();
  building_number = casual.building_number;
  res.status(201).json({
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
