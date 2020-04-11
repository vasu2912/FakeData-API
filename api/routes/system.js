const express = require("express");
const router = express.Router();
const faker = require("faker");

router.get("/", (req, res, next) => {
  var fileExt = faker.system.fileExt();
  var commonFileExt = faker.system.commonFileExt();
  var commonFileName = faker.system.commonFileName();
  var commonFileType = faker.system.commonFileType();
  var fileName = faker.system.fileName();
  var filePath = faker.system.filePath();
  var fileType = faker.system.fileType();
  var mimeType = faker.system.mimeType();
  var semver = faker.system.semver();
  var directoryPath = faker.system.directoryPath();
  res.status(200).json({
    info: {
      fileExt,
      commonFileExt,
      commonFileName,
      commonFileType,
      fileName,
      filePath,
      fileType,
      mimeType,
      semver,
      directoryPath,
    },
  });
});

router.post("/", (req, res, next) => {
  var fileExt = faker.system.fileExt();
  var commonFileExt = faker.system.commonFileExt();
  var commonFileName = faker.system.commonFileName();
  var commonFileType = faker.system.commonFileType();
  var fileName = faker.system.fileName();
  var filePath = faker.system.filePath();
  var fileType = faker.system.fileType();
  var mimeType = faker.system.mimeType();
  var semver = faker.system.semver();
  var directoryPath = faker.system.directoryPath();
  res.status(201).json({
    info: {
      fileExt,
      commonFileExt,
      commonFileName,
      commonFileType,
      fileName,
      filePath,
      fileType,
      mimeType,
      semver,
      directoryPath,
    },
  });
});

module.exports = router;
