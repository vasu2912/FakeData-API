const express = require("express");
const app = express();

const personRoutes = require("./api/routes/person");
const addressRoutes = require("./api/routes/address");

app.use("/person", personRoutes);
app.use("/address", addressRoutes);

module.exports = app;
