const express = require("express");
const router = express.Router();
const roleMiddleware = require("../middleware/roleMiddleware");
const { body } = require("express-validator");

const {
  createUser,
  getUsers,
} = require("../controllers/userController");

// Validation rules
const userValidation = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email required"),
];

// Admin only
router.post(
  "/",
  roleMiddleware(["admin"]),
  userValidation,
  createUser
);

// Admin + Analyst
router.get("/", roleMiddleware(["admin", "analyst"]), getUsers);

module.exports = router;