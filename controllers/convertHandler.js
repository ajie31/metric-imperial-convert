function ConvertHandler() {
  const Units = {
    gal: "L",
    mi: "km",
    lbs: "kg",
    l: "gal",
    km: "mi",
    kg: "lbs",
  };
  const spellUnit = {
    gal: "gallon",
    mi: "miles",
    lbs: "pounds",
    km: "kilometers",
    l: "liters",
    kg: "kilograms",
  };
  this.getNum = function (input) {
    let result = input.match(/\d+|[.\/]/gi).join("");
    console.log(result);
    if (/[^.\/]/g.test(input)) {
      return eval(result);
    } else {
      return "invalid number";
    }
  };

  this.getUnit = function (input) {
    let result = input.match(/[a-z]+/gi).join("");
    console.log(result);
    let isUnit = Object.keys(Units).includes(result);
    if (!isUnit) {
      return "invalid unit";
    }

    return result.toLowerCase();
  };

  this.getReturnUnit = function (initUnit) {
    let result = Units[initUnit];
    return result;
  };

  this.spellOutUnit = function (unit) {
    let result = spellUnit[unit];

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit) {
      case "mi":
        result = initNum / miToKm;
        break;
      case "km":
        result = initNum * miToKm;
        break;
      case "lbs":
        result = initNum / lbsToKg;
        break;

      case "kg":
        result = initNum * lbsToKg;
        break;

      case "gal":
        result = initNum / galToL;
        break;

      case "l":
        result = initNum * galTol;
        break;

      default:
        result = "error ";
        break;
    }
    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${spellUnit[initUnit]} convert to ${returnNum} ${returnUnit}`;

    return result;
  };
}

module.exports = ConvertHandler;
