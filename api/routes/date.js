const express = require("express");
const router = express.Router();
const casual = require("casual");

router.get("/", (req, res, next) => {
  var unix_time = casual.unix_time;
  var moment = casual.moment;
  var date = casual.date((format = "YYYY-MM-DD"));
  var time = casual.time((format = "HH:mm:ss"));
  var century = casual.century;
  var am_pm = casual.am_pm;
  var day_of_month = casual.day_of_month;
  var day_of_year = casual.day_of_year;
  var day_of_week = casual.day_of_week;
  var month_number = casual.month_number;
  var month_name = casual.month_name;
  var year = casual.year;
  var timezone = casual.timezone;
  res.status(200).json({
    info: {
      unix_time,
      moment,
      date,
      time,
      century,
      am_pm,
      day_of_month,
      day_of_year,
      day_of_week,
      month_number,
      month_name,
      year,
      timezone,
    },
  });
});

router.post("/", (req, res, next) => {
  var unix_time = casual.unix_time;
  var moment = casual.moment;
  var date = casual.date((format = "YYYY-MM-DD"));
  var time = casual.time((format = "HH:mm:ss"));
  var century = casual.century;
  var am_pm = casual.am_pm;
  var day_of_month = casual.day_of_month;
  var day_of_year = casual.day_of_year;
  var day_of_week = casual.day_of_week;
  var month_number = casual.month_number;
  var month_name = casual.month_name;
  var year = casual.year;
  var timezone = casual.timezone;
  res.status(201).json({
    info: {
      unix_time,
      moment,
      date,
      time,
      century,
      am_pm,
      day_of_month,
      day_of_year,
      day_of_week,
      month_number,
      month_name,
      year,
      timezone,
    },
  });
});

module.exports = router;
