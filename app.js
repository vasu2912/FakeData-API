const express = require("express");
const app = express();

const personRoutes = require("./api/routes/person");
const addressRoutes = require("./api/routes/address");
const colorsRoutes = require("./api/routes/colors");
const dateRoutes = require("./api/routes/date");
const numberRoutes = require("./api/routes/number");
const textRoutes = require("./api/routes/text");
const paymentRoutes = require("./api/routes/payments");
const miscRoutes = require("./api/routes/misc");
const internetRoutes = require("./api/routes/internet");

app.use("/person", personRoutes);
app.use("/address", addressRoutes);
app.use("/colors", colorsRoutes);
app.use("/date", dateRoutes);
app.use("/internet", internetRoutes);
app.use("/misc", miscRoutes);
app.use("/number", numberRoutes);
app.use("/payments", paymentRoutes);
app.use("/text", textRoutes);

module.exports = app;
