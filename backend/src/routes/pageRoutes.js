const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  createPage,
  getPages,
  getPage,
  updatePage,
  deletePage,
} = require("../controllers/pageController");

router.post("/", auth, createPage);

router.get("/", getPages);

router.get("/:id", getPage);

router.put("/:id", auth, updatePage);

router.delete("/:id", auth, deletePage);

module.exports = router;