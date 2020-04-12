const express = require("express");
const router = express.Router();
const faker = require("faker");
const casual = require("casual");

router.get("/", (req, res, next) => {
  var country_code = casual.country_code;
  var language_code = casual.language_code;
  var locale = casual.locale;
  var currency = casual.currency;
  var currency_code = casual.currency_code;
  var currency_symbol = casual.currency_symbol;
  var currency_name = casual.currency_name;
  var mime_type = casual.mime_type;
  var boolean = casual.boolean;
  var uuid = casual.uuid;
  var number = faker.random.number();
  var alphaNumeric = faker.random.alphaNumeric();
  var objectElement = faker.random.objectElement();
  var words = faker.random.words();
  var word = faker.random.word();
  var image = faker.random.image();
  var arrayElement = faker.random.arrayElement();
  var abbreviation = faker.hacker.abbreviation();
  var adjective = faker.hacker.adjective();
  var noun = faker.hacker.noun();
  var verb = faker.hacker.verb();
  var ingverb = faker.hacker.ingverb();
  var phrase = faker.hacker.phrase();
  var color_name = casual.color_name;
  var safe_color_name = casual.safe_color_name;
  var rgb_hex = casual.rgb_hex;
  var rgb_array = casual.rgb_array;
  res.status(200).json({
    info: {
      country_code,
      language_code,
      currency,
      currency_code,
      currency_symbol,
      currency_name,
      mime_type,
      number,
      alphaNumeric,
      objectElement,
      uuid,
      boolean,
      words,
      word,
      image,
      locale,
      arrayElement,
      abbreviation,
      adjective,
      noun,
      verb,
      ingverb,
      phrase,
      color_name,
      safe_color_name,
      rgb_hex,
      rgb_array,
    },
  });
});

router.post("/", (req, res, next) => {
  var country_code = casual.country_code;
  var language_code = casual.language_code;
  var locale = casual.locale;
  var currency = casual.currency;
  var currency_code = casual.currency_code;
  var currency_symbol = casual.currency_symbol;
  var currency_name = casual.currency_name;
  var mime_type = casual.mime_type;
  var boolean = casual.boolean;
  var uuid = casual.uuid;
  var number = faker.random.number();
  var alphaNumeric = faker.random.alphaNumeric();
  var objectElement = faker.random.objectElement();
  var words = faker.random.words();
  var word = faker.random.word();
  var image = faker.random.image();
  var arrayElement = faker.random.arrayElement();
  var abbreviation = faker.hacker.abbreviation();
  var adjective = faker.hacker.adjective();
  var noun = faker.hacker.noun();
  var verb = faker.hacker.verb();
  var ingverb = faker.hacker.ingverb();
  var phrase = faker.hacker.phrase();
  var color_name = casual.color_name;
  var safe_color_name = casual.safe_color_name;
  var rgb_hex = casual.rgb_hex;
  var rgb_array = casual.rgb_array;
  res.status(201).json({
    info: {
      country_code,
      language_code,
      currency,
      currency_code,
      currency_symbol,
      currency_name,
      mime_type,
      number,
      alphaNumeric,
      objectElement,
      uuid,
      boolean,
      words,
      word,
      image,
      locale,
      arrayElement,
      abbreviation,
      adjective,
      noun,
      verb,
      ingverb,
      phrase,
      color_name,
      safe_color_name,
      rgb_hex,
      rgb_array,
    },
  });
});

module.exports = router;
