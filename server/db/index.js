const mongoose = require("mongoose");
const dbConnectionUrl = "mongodb+srv://jsrich:Sp00kMyN00g!@cluster0.vhzrp69.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(
    dbConnectionUrl,
    console.log("Connected to MongoDB"),
    { useNewUrlParser: true, dbName: "clothing-ordering" }
  )
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;