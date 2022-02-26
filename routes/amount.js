var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
  const amount = [];
  req.body.forEach(el => {
    const amountGlazedWindows = el.option.glazedWindows === "Стеклопакет 1" ? el.option.widthSash + el.option.heightSash * 0.001 : el.option.glazedWindows === "Стеклопакет 2" ? el.option.widthSash + el.option.heightSash * 0.0015 : el.option.glazedWindows === "Стеклопакет 3" ? el.option.widthSash + el.option.heightSash * 0.002 : 0;
    const amountProfil = el.option.profil === "Профиль 1" ? el.option.widthSash + el.option.heightSash * 1000 : el.option.profil === "Профиль 2" ? el.option.widthSash + el.option.heightSash * 1500 : el.option.profil === "Профиль 3" ? el.option.widthSash + el.option.heightSash * 2000 : 0;
    const amountAccessories = el.option.accessories === "Фурнитура 1" ? 1000 * el.quantitySash : el.option.accessories === "Фурнитура 2" ? 1500 * el.quantitySash : el.option.accessories === "Фурнитура 3" ? 2000 * el.quantitySash : 0;
    const amountExternalLamination = el.option.externalLamination === "Белый" ? 1000 : el.option.externalLamination === "Коричневый" ? 1500 : el.option.externalLamination === "Черный" ? 2000 : 0;
    const amountInternalLamination = el.option.internalLamination === "Белый" ? 1000 : el.option.internalLamination === "Коричневый" ? 1500 : el.option.internalLamination === "Черный" ? 2000 : 0;
    const amountSill = el.option.windowsillWidth * el.option.windowsillLength * 0.5;
    const amountSlope = el.option.upperSlopeWidth * el.option.upperSlopeLength * 0.5;
    const amountLowTide = el.option.lowTideWidth * el.option.lowTideLength * 0.5;
    const amountSideSlopes = el.option.sideSlopesWidth * el.option.sideSlopesLength * 0.5;
    const am = amountGlazedWindows + amountProfil + amountAccessories + amountExternalLamination + amountInternalLamination + amountSill + amountSlope + amountLowTide + amountSideSlopes;
    amount.push(Math. floor (am));
  });
  console.log(amount);
  res.send(amount);
});

module.exports = router;
