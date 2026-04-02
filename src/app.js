const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Routes
const userRoutes = require("./routes/userRoutes");
const recordRoutes = require("./routes/recordRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes"); // ✅ ADD THIS

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// User Routes
app.use("/api/users", userRoutes);

// Record Routes
app.use("/api/records", recordRoutes);

// Dashboard Routes ✅ ADD THIS
app.use("/api/dashboard", dashboardRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});