const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/product_management_express")
  .then(() => {
    console.log("Connected to database successfully..");
  })
  .catch((err) => console.log("Error While Connecting To DB !!", err));
module.exports = mongoose;
