const express = require("express");
const router = express.Router();

const personController = require("../controllers/personController");
const personValidator = require("../validation/personValidator");
const middleWares = require("../middlewares/index");

router.get("/",middleWares.isAuth ,personController.getAllPerson);
router.get("/:id",middleWares.isAuth ,personController.getPersonById);
router.get("/companyGetPersonId/:id",middleWares.isAuth ,personController.companyGetPersonId);
router.get("/titleGetPersonId/:id",middleWares.isAuth ,personController.titleGetPersonId);
router.post("/create", [personValidator.createPerson()], personController.createPerson);
router.put("/update/:id", [personValidator.updatePerson()], personController.updatePerson);
router.delete("/delete/:id",middleWares.isAuth ,personController.deletePersonById);

module.exports = router;