const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StylerSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

module.exports = mongoose.model("Styler", StylerSchema);