const express = require("express");
const router = express.Router();
const faker = require("faker");

router.get("/", (req, res, next) => {
  var image = faker.image.image();
  var avatar = faker.image.avatar();
  var imageUrl = faker.image.imageUrl();
  var abstract = faker.image.abstract();
  var animals = faker.image.animals();
  var business = faker.image.business();
  var cats = faker.image.cats();
  var city = faker.image.city();
  var food = faker.image.food();
  var nightlife = faker.image.nightlife();
  var fashion = faker.image.fashion();
  var people = faker.image.people();
  var nature = faker.image.nature();
  var sports = faker.image.sports();
  var technics = faker.image.technics();
  var transport = faker.image.transport();
  var dataUri = faker.image.dataUri();

  res.status(200).json({
    info: {
      image,
      avatar,
      imageUrl,
      abstract,
      animals,
      business,
      cats,
      city,
      food,
      nightlife,
      fashion,
      people,
      nature,
      sports,
      technics,
      transport,
      dataUri,
    },
  });
});

router.post("/", (req, res, next) => {
  var image = faker.image.image();
  var avatar = faker.image.avatar();
  var imageUrl = faker.image.imageUrl();
  var abstract = faker.image.abstract();
  var animals = faker.image.animals();
  var business = faker.image.business();
  var cats = faker.image.cats();
  var city = faker.image.city();
  var food = faker.image.food();
  var nightlife = faker.image.nightlife();
  var fashion = faker.image.fashion();
  var people = faker.image.people();
  var nature = faker.image.nature();
  var sports = faker.image.sports();
  var technics = faker.image.technics();
  var transport = faker.image.transport();
  var dataUri = faker.image.dataUri();

  res.status(201).json({
    info: {
      image,
      avatar,
      imageUrl,
      abstract,
      animals,
      business,
      cats,
      city,
      food,
      nightlife,
      fashion,
      people,
      nature,
      sports,
      technics,
      transport,
      dataUri,
    },
  });
});

module.exports = router;
