const express = require("express");
const router = express.Router();
const faker = require("faker");
const casual = require("casual");

router.get("/", (req, res, next) => {
  var word = faker.lorem.word();
  var words = faker.lorem.words();
  var sentence = faker.lorem.sentence();
  var slug = faker.lorem.slug();
  var sentences = faker.lorem.sentences();
  var paragraph = faker.lorem.paragraph();
  var paragraphs = faker.lorem.paragraphs();
  var text = faker.lorem.text();
  var lines = faker.lorem.lines();
  var title = casual.title;
  res.status(200).json({
    info: {
      word,
      words,
      sentence,
      slug,
      sentences,
      paragraph,
      paragraphs,
      text,
      lines,
      title,
    },
  });
});

module.exports = router;
