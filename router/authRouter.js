const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.post("/signin",authController.signIn);
router.post("/signup",authController.signUp);
router.get("/logout",authController.signUp);

module.exports = router;