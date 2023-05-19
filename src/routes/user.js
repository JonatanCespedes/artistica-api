const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
  login
} = require("../controllers/user.controller");
const userLoginValidationRules = require("../validations/loginUser.validator");
const validate = require("../validations/index.validator");

router
  .get("/", getUsers)
  .get("/:id", getUserById)
  .post("/login", userLoginValidationRules(), validate,login)
  .post("/register", createUser)
  .put("/:id", updateUser)
  .delete("/:id", deleteUser);

module.exports = router;
