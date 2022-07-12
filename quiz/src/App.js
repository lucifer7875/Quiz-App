import "./App.css";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import EmailIcon from "@mui/icons-material/Email";
// import Link from "@mui/material/Link";
// import HomeIcon from "@mui/icons-material/Home";
// import Button from "@mui/material/Button";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import TwitterIcon from "@mui/icons-material/Twitter";
import React, { useState } from "react";
import User from "./Components/User/user";
import Admin from "./Components/Admin/admin";
import Home from "./Components/Home/home";
import Posts from "./Components/Posts/Posts";
import UserReg from "./Components/UserRegister/userReg";
import UserLogin from "./Components/UserLogin/userLogin";
import AdminReg from "./Components/Admin/adminReg";
import AdminLogin from "./Components/Admin/adminLogin";
import Main from "./Components/Main/main";
import DashBoard from "./Components/Main/dashboard";
import Setting from "./Components/Main/setting";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [user, setLoginUser] = useState({
    // userName:"",
    // firstName: "",
    // lastName:"",
    // email:"",
    // password:"",
  });
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route
            path="/user"
            element={
              user ? <User setLoginUser={setLoginUser} /> : <UserLogin />
            }
          ></Route>
          {/* <Route path="/user" element={<User />}></Route> */}
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/" element={<Posts />}></Route>
          <Route path="/userReg" element={<UserReg />}></Route>
          <Route
            path="/userLogin"
            element={<UserLogin setLoginUser={setLoginUser} />}
          ></Route>

          {/* admin panel */}

          <Route path="/adminReg" element={<AdminReg />}></Route>
          <Route path="/adminLogin" element={<AdminLogin />}></Route>
          <Route path="/main" element={<Main />}>
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Routes>
      </Router>

      {/* <div className="posts-footer">
        @Coppyright2022. All Rights Reserved.
        <div className="phone">
          <Button>
            <LocalPhoneIcon style={{ color: "blue" }} />
            <Link underline="hover" style={{ color: "white" }}>
              8140187327
            </Link>
          </Button>
        </div>
        <div className=" email">
          <Button>
            <EmailIcon style={{ color: "blue" }} />
            <Link
              href="https://mail.google.com/mail/u/0/#inbox"
              underline="hover"
              style={{ color: "white" }}
            >
              hardiksinhrajput98@gmail.com
            </Link>
          </Button>
        </div>
        <div className="address">
          <HomeIcon />
          <br />
          Rajput Hardiksinh,
          <br />
          VijaycrossRoad,
          <br />
          380009,Ahmedabad
          <br />
          Gujarat
        </div>
        <div className="Button">
          <Button href="https://www.facebook.com/profile.php?id=100008539207073">
            <FacebookIcon />
          </Button>
          <Button href="https://wa.me/918140187327?text=">
            <WhatsAppIcon />
          </Button>
          <Button href="https://twitter.com/HardiksinhRajp4">
            <TwitterIcon />
          </Button>
        </div>
      </div> */}
    </div>
  );
}

export default App;
