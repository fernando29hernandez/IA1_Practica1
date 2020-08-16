var mongoose = require("mongoose");
var StudentSchema = new mongoose.Schema({
  name: String,
  carne: String,
  dpi: String,
  email: String,
  semester: String,
  year: String,
  no_group: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Student", StudentSchema);
