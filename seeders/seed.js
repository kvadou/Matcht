const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb://localhost/reactjob", {
  useNewUrlParser: true,
  useFindAndModify: false,
});
