const express = require("express");
const router = express.Router();
const roleMiddleware = require("../middleware/roleMiddleware");

const {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require("../controllers/recordController");

// Admin only
router.post("/", roleMiddleware(["admin"]), createRecord);

// All roles can read
router.get("/", roleMiddleware(["admin", "analyst", "viewer"]), getRecords);

// Admin only
router.put("/:id", roleMiddleware(["admin"]), updateRecord);

// Admin only
router.delete("/:id", roleMiddleware(["admin"]), deleteRecord);

module.exports = router;