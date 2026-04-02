const express = require("express");
const router = express.Router();
const roleMiddleware = require("../middleware/roleMiddleware");

const { getDashboard } = require("../controllers/dashboardController");

// Analyst + Admin
router.get("/", roleMiddleware(["admin", "analyst"]), getDashboard);

module.exports = router;