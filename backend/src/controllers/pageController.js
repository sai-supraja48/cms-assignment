const Page = require("../models/Page");

// Create Page
exports.createPage = async (req, res) => {
  try {
    const page = await Page.create(req.body);

    res.status(201).json({
      success: true,
      page,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Pages
exports.getPages = async (req, res) => {
  try {
    const pages = await Page.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      pages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Page
exports.getPage = async (req, res) => {
  try {
    const page = await Page.findById(req.params.id);

    res.json({
      success: true,
      page,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Page
exports.updatePage = async (req, res) => {
  try {
    const page = await Page.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      success: true,
      page,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Page
exports.deletePage = async (req, res) => {
  try {
    await Page.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Page deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};