const FinancialRecord = require("../models/FinancialRecord");

// Dashboard Summary
exports.getDashboard = async (req, res) => {
  try {
    // Total Income
    const totalIncome = await FinancialRecord.aggregate([
      { $match: { type: "income" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    // Total Expense
    const totalExpense = await FinancialRecord.aggregate([
      { $match: { type: "expense" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    // Category-wise totals
    const categoryTotals = await FinancialRecord.aggregate([
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" },
        },
      },
    ]);

    // Recent activity (last 5)
    const recent = await FinancialRecord.find()
      .sort({ createdAt: -1 })
      .limit(5);

    // Monthly trends
    const monthly = await FinancialRecord.aggregate([
      {
        $group: {
          _id: { $month: "$date" },
          total: { $sum: "$amount" },
        },
      },
    ]);

    res.json({
      totalIncome: totalIncome[0]?.total || 0,
      totalExpense: totalExpense[0]?.total || 0,
      netBalance:
        (totalIncome[0]?.total || 0) -
        (totalExpense[0]?.total || 0),
      categoryTotals,
      recent,
      monthly,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};