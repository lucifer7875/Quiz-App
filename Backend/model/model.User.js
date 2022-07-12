import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: "string",
  firstName: "string",
  lastName: "string",
  email: "string",
  password: "string",
});
const User = new mongoose.model("User", userSchema);

export default User;
