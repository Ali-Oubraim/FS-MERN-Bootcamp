const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/UsersDb")
    .then(() => console.log("Connected To MongoDb"))
    .catch((error) =>
      console.log("Error While Connecting to Data Base !!", error)
    );
};

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

async function createUser(user) {
  await new User(user)
    .save()
    .then(() => console.log("User Created Successfuly "))
    .catch((err) => console.log("Error while adding user ", err));
}
async function getAll() {
  const users = await User.find();
  console.log({ users });
}

async function updateUser(name, email) {
  await User.findOneAndUpdate(
    { name: name },
    { $set: { email: email } },
    { new: true }
  )
    .then((user) => console.log("user updated successfuly", user))
    .catch((err) => console.log("error while updating", err));

  //   const updatedUser = await User.findOne({ name: name });
}

async function findByNameOrEmail(name = "", email = "") {
  try {
    if (name != null || email != null) {
      if (name) {
        await User.findOne({ name: name }).then((user) => {
          if (user == null) {
            console.log("User not exist");
          } else {
            console.log(user);
          }
        });
      } else if (email) {
        await User.findOne({ email: email }).then((user) => {
          if (user == null) {
            console.log("User not exist");
          } else {
            console.log(user);
          }
        });
      } else {
        console.log("please give name or email");
      }
    } else {
      console.log("please give name or email");
    }
  } catch (error) {
    console.log("Error Happen while searching", error);
  }
}

async function deleteByDate(date) {
  await User.deleteMany({ createdAt: { $lt: date } })
    .then(() => console.log("Delete was success !"))
    .catch((err) => console.log(err));
}

(async function main() {
  await connectDb();
  /**Get All Users */
  // await getAll();

  /**Create New User */
  // createUser({ name: "Jhone", email: "Jhone@gmail.com", age: 18 });

  /**Update Spiciefic User */
  // await updateUser('Ali','newEmail@gmail.com');

  /**Find By Name Or Email */
  // await findByNameOrEmail("Ali");

  /**Delete Users */
  // await deleteByDate();
})();
