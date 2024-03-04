const express = require("express");
const mongoose = require("mongoose");

// const app = express();

mongoose
  .connect("mongodb://localhost:27017/mydb")
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("Error: ", error));

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number },
});

const User = mongoose.model("User", userSchema);

const createUser = async (user) => {
  await new User(user)
    .save()
    .then((user) => console.log("User created succesfully: ", user))
    .catch((error) => console.log("Error creating user: ", error));
};

createUser({ name: "Ahmed", email: "ahmed@gamil.com", age: 25 });

const getAllUsers = () => {
  console.log("***All Users :\n");
  User.find().then((users) => console.log(users));
};

getAllUsers();
