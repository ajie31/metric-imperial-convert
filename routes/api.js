"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.get("/api/convert", (req, res) => {
    let num = convertHandler.getNum(JSON.stringify(req.query.input));
    let unit = convertHandler.getUnit(JSON.stringify(req.query.input));
    let unitResult = convertHandler.getReturnUnit(unit);
    let numResult = convertHandler.convert(num, unitResult);
    let spellUnit = convertHandler.spellOutUnit(unitResult);
    console.log("API get : " + unit);
    let stringResult = convertHandler.getString(
      num,
      unit,
      numResult,
      spellUnit
    );

    res.json({
      initNum: num,
      initUnit: unit,
      returnNum: numResult,
      returnUnit: unitResult,
      string: stringResult,
    });
  });
};
