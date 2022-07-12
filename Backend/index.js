import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import question from "./model/model.question.js";
import User from "./model/model.User.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
  "mongodb://localhost:27017/quizDB",

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB Connected");
  }
);
const adminSchema = new mongoose.Schema({
  adminName: "string",
  firstName: "string",
  lastName: "string",
  email: "string",
  password: "string",
});
const Admin = new mongoose.model("Admin", adminSchema);

// Add Question Route

app.post("/admin", async (req, res) => {
  // URL BASE POST APP
  console.log(req.body);
  const { AddyourQuestion, AddOption } = req.body;
  let result = await question
    .findOne({
      AddyourQuestion: req.body.AddyourQuestion,
    })
    .exec();
  if (result === null) {
    const newQuiz = new question(req.body);
    await newQuiz.save();
    console.log("data added succesfully");
    res.send("data added succesfully ");
  } else {
    console.log("question already present ");
    res.send("question already present ");
  }
});

// Display data Route

app.get("/user", async (req, res) => {
  // console.log("showing data")
  console.log("got into user backend");
  const allUsers = await question.find({});
  console.log(allUsers);
  res.send(allUsers);
});

// User Register Route

app.post("/userReg", (req, res) => {
  // URL BASE POST APP
  const { userName, firstName, lastName, email, password } = req.body;
  User.findOne({ userName: userName }, (err, user) => {
    // check email
    if (user) {
      res.send({ message: "user already registerd" });
    } else {
      const user = new User({
        userName: userName,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered , plese Login " });
        }
      });
    }
  });
});

// user Login Route

app.post("/userLogin", (req, res) => {
  // URL BASE POST APP
  const { userName, password } = req.body;
  User.findOne({ userName: userName }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login successfull", user: user });
      } else {
        res.send({ message: "password did not match" });
      }
    } else {
      res.send({ message: "enter wrong User Name" });
    }
  });
});

// Admin Register Route

app.post("/adminReg", (req, res) => {
  // URL BASE POST APP
  const { adminName, firstName, lastName, email, password } = req.body;
  Admin.findOne({ adminName: adminName }, (Err, admin) => {
    // check email
    if (admin) {
      res.send({ message: "Admin already registerd" });
    } else {
      const admin = new Admin({
        adminName: adminName,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      admin.save((Err) => {
        if (Err) {
          res.send(Err);
        } else {
          res.send({ message: "Successfully Registered , plese Login " });
        }
      });
    }
  });
});

// Admin Login Route

app.post("/adminLogin", (req, res) => {
  // URL BASE POST APP
  const { adminName, password } = req.body;
  Admin.findOne({ adminName: adminName }, (err, admin) => {
    if (admin) {
      if (password === admin.password) {
        res.send({ message: "Login successfull", adminLogin: admin });
      } else {
        res.send({ message: "password did not match" });
      }
    } else {
      res.send({ message: "enter wrong Admin Name" });
    }
  });
});

app.listen(8000, () => {
  console.log("BE started at port 8000");
});
