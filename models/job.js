const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Jobs database schema
const jobSchema = new Schema({
  name: { type: String, required: true },
  logoUrl: { type: String, required: true }
});

// Export the whole schema
const Job = mongoose.model("Jobs", jobSchema);

module.exports = Job;