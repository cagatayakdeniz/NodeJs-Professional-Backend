const express = require("express");
const router = express.Router();

const titleController = require("../controllers/titleController");
const titleValidator = require("../validation/titleValidator");
const middleWares = require("../middlewares/index");

router.get("/",titleController.getAllTitle);
router.get("/:id",titleController.getTitleById);
router.get("/getPersonsByTitleId/:id",titleController.getPersonsByTitleId);
router.post("/create", [titleValidator.createTitle()] ,middleWares.isAuth ,titleController.createTitle);
router.put("/update/:id", [titleValidator.updateTitle()] ,middleWares.isAuth ,titleController.updateTitle);
router.delete("/delete/:id",middleWares.isAuth ,titleController.deleteTitle);

module.exports = router;