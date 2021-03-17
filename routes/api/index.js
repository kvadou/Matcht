const router = require("express").Router();
const jobRoutes = require("./jobs");

// Job routes
router.use("/jobpage", jobRoutes);

module.exports = router;
