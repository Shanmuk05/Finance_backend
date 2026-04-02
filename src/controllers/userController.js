const { validationResult } = require("express-validator");
const User = require("../models/User");

// Create User
exports.createUser = async (req, res) => {
  try {
    // ✅ VALIDATION CHECK (ADD THIS)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { name, email, role } = req.body;

    const user = new User({
      name,
      email,
      role,
    });

    await user.save();

    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Get All Users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};