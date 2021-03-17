const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Jobs database schema
const jobSchema = new Schema({
  url: String,
  title: String,
  company_name: String,
  category: String,
  job_type: String,
  publication_date: Date,
  candidate_required_location: String,
  salary: String,
  description: String,
  company_logo_url: String
});

// Export the whole schema
const Job = mongoose.model("Jobs", jobSchema);

module.exports = Job;