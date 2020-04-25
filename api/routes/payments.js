const express = require("express");
const router = express.Router();
const casual = require("casual");
const faker = require("faker");

router.get("/", (req, res, next) => {
  var account = faker.finance.account();
  var accountName = faker.finance.accountName();
  var mask = faker.finance.mask();
  var amount = faker.finance.amount();
  var transactionType = faker.finance.transactionType();
  var currencyCode = faker.finance.currencyCode();
  var currencyName = faker.finance.currencyName();
  var currencySymbol = faker.finance.currencySymbol();
  var bitcoinAddress = faker.finance.bitcoinAddress();
  var bic = faker.finance.bic();
  var iban = faker.finance.iban();
  var card_type = casual.card_type;
  var card_number = casual.card_number();
  var card_exp = casual.card_exp;
  var card_data = casual.card_data;
  res.status(200).json({
    info: {
      account,
      accountName,
      mask,
      amount,
      transactionType,
      currencyCode,
      currencyName,
      currencySymbol,
      bitcoinAddress,
      bic,
      iban,
      card_type,
      card_number,
      card_exp,
      card_data,
    },
  });
});

module.exports = router;
