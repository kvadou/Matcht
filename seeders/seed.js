const mongoose = require("mongoose");
const db = require("../models");

// We could seed the mongodb with fake jobs here

mongoose.connect("mongodb://localhost/fakejob", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const fakejob = [
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
