import mongoose from "mongoose";
const questionSchema = new mongoose.Schema({
  AddyourQuestion: String,
  OptionOne: String,
  OptionTwo: String,
  OptionThree: String,
});
const question = new mongoose.model("Question", questionSchema);

export default question;
