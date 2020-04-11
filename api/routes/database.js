const express = require("express");
const router = express.Router();
const faker = require("faker");

router.get("/", (req, res, next) => {
  var column = faker.database.column();
  var type = faker.database.type();
  var collation = faker.database.collation();
  var engine = faker.database.engine();
  res.status(200).json({
    info: {
      column,
      type,
      collation,
      engine,
    },
  });
});

router.post("/", (req, res, next) => {
  var column = faker.database.column();
  var type = faker.database.type();
  var collation = faker.database.collation();
  var engine = faker.database.engine();
  res.status(201).json({
    info: {
      column,
      type,
      collation,
      engine,
    },
  });
});

module.exports = router;
