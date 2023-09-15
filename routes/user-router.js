const express = require("express");
const User = require("../model/User");
const router = express.Router();
const userController = require("../controllers/user-controller");

router.get("/", userController.getAllUser);
router.post("/", userController.addUser);
router.get("/:id", userController.getById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;