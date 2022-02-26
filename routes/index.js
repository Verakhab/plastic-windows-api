var express = require('express');
var router = express.Router();

const components = {
  profilOption: ["Профиль 1", "Профиль 2", "Профиль 3"],
  accessories: ["Фурнитура 1", "Фурнитура 2", "Фурнитура 3"],
  externalLamination: ["Белый", "Коричневый", "Черный"],
  internalLamination: ["Белый", "Коричневый", "Черный"],
  glazedWindows: ["Стеклопакет 1", "Стеклопакет 2", "Стеклопакет 3"],
  windowsillWidth: ["150", "200", "250"],
  windowsillLength: ["1000", "1500", "2000"],
  upperSlopeWidth: ["150", "200", "250"],
  upperSlopeLength: ["1000", "1500", "2000"],
  lowTideWidth: ["150", "200", "250"],
  lowTideLength: ["1000", "1500", "2000"],
  sideSlopesWidth: ["150", "200", "250"],
  sideSlopesLength: ["1000", "1500", "2000"],
}

router.get('/', function(req, res, next) {
  res.send(JSON.stringify(components));
});

module.exports = router;
