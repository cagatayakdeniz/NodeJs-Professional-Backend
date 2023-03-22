const express = require("express");
const router = express.Router();

const commonController = require("../controllers/commonController");
const commonValidator = require("../validation/commonValidator");

router.get("/:countryId", [commonValidator.getCityByIdValid()],commonController.getCityByCountryId);
router.get("/",commonController.getAllCountry);

module.exports = router;