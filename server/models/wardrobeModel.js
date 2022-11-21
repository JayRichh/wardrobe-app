const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WardrobeSchema = new Schema({
  name: { type: String, required: true },
  userID: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  occasion: { type: String, required: true },
  color: { type: String, required: true },
  size: { type: String, required: true },
  pricePaid: { type: String, required: true },
  RRP: { type: String, required: true },
  date: { type: String, required: true },
  wearCount: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model("Wardrobe", WardrobeSchema);