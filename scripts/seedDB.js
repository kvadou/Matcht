const mongoose = require("mongoose");
const db = require("../models");

// We could seed the mongodb with fake jobs here

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactfakejobs"
);

const fakejobSeed = [
  {
    company: "Facebook",
    title: "Software Engineer",
    description: "Build software for Facebook",
    date: new Date(Date.now()),
  },
  {
    company: "Google",
    title: "Software Engineer",
    description: "Build software for Google",
    date: new Date(Date.now()),
  },
  {},
];
