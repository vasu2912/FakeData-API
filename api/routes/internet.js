const express = require("express");
const router = express.Router();
const faker = require("faker");

router.get("/", (req, res, next) => {
  var avatar = faker.internet.avatar();
  var email = faker.internet.email();
  var exampleEmail = faker.internet.exampleEmail();
  var userName = faker.internet.userName();
  var protocol = faker.internet.protocol();
  var url = faker.internet.url();
  var domainName = faker.internet.domainName();
  var domainSuffix = faker.internet.domainSuffix();
  var domainWord = faker.internet.domainWord();
  var ip = faker.internet.ip();
  var ipv6 = faker.internet.ipv6();
  var userAgent = faker.internet.userAgent();
  var mac = faker.internet.mac();
  var password = faker.internet.password();
  res.status(200).json({
    avatar,
    email,
    exampleEmail,
    userName,
    protocol,
    url,
    domainName,
    domainSuffix,
    domainWord,
    ip,
    ipv6,
    userAgent,
    mac,
    password,
  });
});

router.post("/", (req, res, next) => {
  var avatar = faker.internet.avatar();
  var email = faker.internet.email();
  var exampleEmail = faker.internet.exampleEmail();
  var userName = faker.internet.userName();
  var protocol = faker.internet.protocol();
  var url = faker.internet.url();
  var domainName = faker.internet.domainName();
  var domainSuffix = faker.internet.domainSuffix();
  var domainWord = faker.internet.domainWord();
  var ip = faker.internet.ip();
  var ipv6 = faker.internet.ipv6();
  var userAgent = faker.internet.userAgent();
  var mac = faker.internet.mac();
  var password = faker.internet.password();
  res.status(201).json({
    avatar,
    email,
    exampleEmail,
    userName,
    protocol,
    url,
    domainName,
    domainSuffix,
    domainWord,
    ip,
    ipv6,
    userAgent,
    mac,
    password,
  });
});

module.exports = router;
