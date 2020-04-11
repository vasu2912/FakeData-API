const express = require("express");
const app = express();

//importing routes
const personRoutes = require("./api/routes/person");
const addressRoutes = require("./api/routes/address");
const colorsRoutes = require("./api/routes/colors");
const dateRoutes = require("./api/routes/date");
const numberRoutes = require("./api/routes/number");
const textRoutes = require("./api/routes/text");
const paymentRoutes = require("./api/routes/payments");
const internetRoutes = require("./api/routes/internet");
const commerceRoutes = require("./api/routes/commerce");
const companyRoutes = require("./api/routes/company");
const databaseRoutes = require("./api/routes/database");
const hackerRoutes = require("./api/routes/hacker");
const helpersRoutes = require("./api/routes/helpers");
const loremRoutes = require("./api/routes/lorem");
const systemRoutes = require("./api/routes/system");
const randomRoutes = require("./api/routes/random");
const phoneRoutes = require("./api/routes/phone");
const imageRoutes = require("./api/routes/image");

//CORS Handling
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Routes to handle the requests
app.use("/person", personRoutes);
app.use("/address", addressRoutes);
app.use("/colors", colorsRoutes);
app.use("/date", dateRoutes);
app.use("/internet", internetRoutes);
app.use("/number", numberRoutes);
app.use("/payments", paymentRoutes);
app.use("/text", textRoutes);
app.use("/commerce", commerceRoutes);
app.use("/company", companyRoutes);
app.use("/database", databaseRoutes);
app.use("/hacker", hackerRoutes);
app.use("/helpers", helpersRoutes);
app.use("/lorem", loremRoutes);
app.use("/system", systemRoutes);
app.use("/random", randomRoutes);
app.use("/phone", phoneRoutes);
app.use("/image", imageRoutes);

//Error Handling for incoming requests
app.use((req, res, next) => {
  const error = new Error("Error!! Undefined Function");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
