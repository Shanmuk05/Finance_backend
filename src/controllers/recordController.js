const FinancialRecord = require("../models/FinancialRecord");

// CREATE RECORD
exports.createRecord = async (req, res) => {
  try {
    const { amount, type, category, date, notes } = req.body;

    const record = new FinancialRecord({
      amount,
      type,
      category,
      date,
      notes,
    });

    await record.save();

    res.status(201).json({
      message: "Record created successfully",
      record,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ UPDATED GET RECORDS (Pagination + Filters)
exports.getRecords = async (req, res) => {
  try {
    const {
      type,
      category,
      startDate,
      endDate,
      page = 1,
      limit = 5,
    } = req.query;

    let filter = {};

    if (type) filter.type = type;
    if (category) filter.category = category;

    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    const skip = (page - 1) * limit;

    const records = await FinancialRecord.find(filter)
      .skip(skip)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });

    const total = await FinancialRecord.countDocuments(filter);

    res.json({
      total,
      page: parseInt(page),
      limit: parseInt(limit),
      records,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE RECORD
exports.updateRecord = async (req, res) => {
  try {
    const record = await FinancialRecord.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE RECORD
exports.deleteRecord = async (req, res) => {
  try {
    await FinancialRecord.findByIdAndDelete(req.params.id);

    res.json({ message: "Record deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};