const express = require("express");
const router = express.Router();
const faker = require("faker");
const casual = require("casual");

router.get("/", (req, res, next) => {
  var department = faker.commerce.department();
  var productName = faker.commerce.productName();
  var price = faker.commerce.price();
  var productAdjective = faker.commerce.productAdjective();
  var productMaterial = faker.commerce.productMaterial();
  var product = faker.commerce.product();
  res.status(200).json({
    info: {
      department,
      productName,
      price,
      productAdjective,
      productMaterial,
      product,
    },
  });
});

router.post("/", (req, res, next) => {
  var department = faker.commerce.department();
  var productName = faker.commerce.productName();
  var price = faker.commerce.price();
  var productAdjective = faker.commerce.productAdjective();
  var productMaterial = faker.commerce.productMaterial();
  var product = faker.commerce.product();
  res.status(201).json({
    info: {
      department,
      productName,
      price,
      productAdjective,
      productMaterial,
      product,
    },
  });
});

module.exports = router;
