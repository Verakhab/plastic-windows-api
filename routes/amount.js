var express = require('express');
var router = express.Router();

router.post('/amount', function (req, res, next) {
  const amount = [];
  req.body.forEach(el => {
    const amountGlazedWindows = el.option.glazedWindows === "Стеклопакет 1" ? el.option.widthSash * el.option.heightSash * 0.001 : el.option.glazedWindows === "Стеклопакет 2" ? el.option.widthSash * el.option.heightSash * 0.0015 : el.option.glazedWindows === "Стеклопакет 3" ? el.option.widthSash * el.option.heightSash * 0.002 : 0;
    const amountProfil = el.option.profil === "Профиль 1" ? el.option.widthSash * el.option.heightSash * 0.001 : el.option.profil === "Профиль 2" ? el.option.widthSash * el.option.heightSash * 0.0015 : el.option.profil === "Профиль 3" ? el.option.widthSash * el.option.heightSash * 0.002 : 0;
    const amountAccessories = el.option.accessories === "Фурнитура 1" ? 10000 * el.quantitySash : el.option.accessories === "Фурнитура 2" ? 15000 * el.quantitySash : el.option.accessories === "Фурнитура 3" ? 20000 * el.quantitySash : 0;
    const amountExternalLamination = el.option.externalLamination === "Белый" ? 0 : el.option.externalLamination === "Коричневый" ? 10000 : el.option.externalLamination === "Черный" ? 15000 : 0;
    const amountInternalLamination = el.option.internalLamination === "Белый" ? 0 : el.option.internalLamination === "Коричневый" ? 10000 : el.option.internalLamination === "Черный" ? 15000 : 0;
    const amountSill = el.option.windowsillWidth * el.option.windowsillLength * 0.05;
    const amountSlope = el.option.upperSlopeWidth * el.option.upperSlopeLength * 0.05;
    const amountLowTide = el.option.lowTideWidth * el.option.lowTideLength * 0.05;
    const amountSideSlopes = el.option.sideSlopesWidth * el.option.sideSlopesLength * 0.05;
    const summ = Number(amountGlazedWindows) + Number(amountProfil) + Number(amountAccessories) + Number(amountExternalLamination) + Number(amountInternalLamination) + Number(amountSill) + Number(amountSlope) + Number(amountLowTide) + Number(amountSideSlopes);
    amount.push(Math.floor(summ));
  });
  res.send(amount);
});

module.exports = router;
