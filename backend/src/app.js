const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const pageRoutes = require("./routes/pageRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);
app.use("/api/pages", pageRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "CMS Backend Running",
  });
});

module.exports = app;