const express = require("express");
const router = express.Router();

const companyController = require("../controllers/companyController");
const middleWares = require("../middlewares/index");

router.get("/",companyController.getAllCompany);
router.get("/:id",companyController.getCompanyById);
router.get("/getPersonsByCompanyId/:id",companyController.getPersonsByCompanyId);
router.post("/create",middleWares.isAuth ,companyController.createCompany);
router.put("/update/:id",middleWares.isAuth ,companyController.updateCompany);
router.delete("/delete/:id",middleWares.isAuth ,companyController.deleteCompany);

module.exports = router;