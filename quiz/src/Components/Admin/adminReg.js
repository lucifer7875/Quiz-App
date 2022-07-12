import { React, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import "./adminpage.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, TableCell, TableRow } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const AdminReg = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({
    adminName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin({
      ...admin,
      [name]: value,
    });
  };
  const adminReg = () => {
    const { adminName, firstName, lastName, email, password, cPassword } =
      admin;
    if (
      adminName &&
      firstName &&
      lastName &&
      email &&
      password &&
      password === cPassword
    ) {
      axios.post("http://localhost:8000/adminReg", admin).then((res) => {
        alert(res.data.message);
        navigate("/adminLogin");
      });
    } else {
      alert("incorrect input");
    }
  };
  return (
    <div className="Ureg">
      {/* header section */}
      <div
        className="header"
        style={{
          position: "absolute",
          top: "0%",
          backgroundColor: "black",
          color: "white",
          width: "100%",
        }}
      >
        <Button style={{ position: "absolute", left: "0%", color: "white" }}>
          <HomeIcon onClick={() => navigate("/home")} />
        </Button>
        <h3>admin Registration</h3>{" "}
      </div>
      {/* body section */} {/* create two TableCell for much better view  */}
      {/* create TableRow */}
      <div className="container2" style={{}}>
        <TableRow>
          <TableCell>
            <div className="textfield">
              <AccountCircleIcon style={{ width: "10%", height: "10%" }} />
              <hr />
              <br />
              <TextField
                id="outlined-basic"
                name="adminName"
                type="text"
                onChange={handleChange}
                value={admin.adminName}
                label="admin Name"
                variant="outlined"
              />
              <br />
              <br />
              <TextField
                id="outlined-basic"
                name="firstName"
                type="text"
                onChange={handleChange}
                value={admin.firstName}
                label="First Name"
                variant="outlined"
              />
              <br />
              <br />
              <TextField
                id="outlined-basic"
                name="lastName"
                type="text"
                onChange={handleChange}
                value={admin.lastName}
                label="Last Name"
                variant="outlined"
              />
              <br />
              <br />
              <TextField
                id="outlined-basic"
                name="email"
                type="email"
                onChange={handleChange}
                value={admin.email}
                label="Email"
                variant="outlined"
              />
              <br />
              <br />
              <TextField
                id="standard-basic"
                name="password"
                type="password"
                onChange={handleChange}
                value={admin.password}
                label="Password"
                variant="standard"
              />
              &nbsp;&nbsp;
              <TextField
                id="standard-basic"
                name="cPassword"
                type="password"
                onChange={handleChange}
                value={admin.cPassword}
                label="Confirm Password"
                variant="standard"
              />
              <br />
              <br />
              <Button variant="contained" onClick={adminReg}>
                SIGN UP
              </Button>
              <br />
              <br />
              already have an Account ?. &nbsp;
              <Link onClick={() => navigate("/adminLogin")}>SIGN IN</Link>
            </div>
          </TableCell>

          {/* second cell */}

          <TableCell>
            <div className="boxone">
              <h2>
                <b>Quiz Admin Panel</b>
              </h2>
              <hr />
              <p>
                <b>
                  <h1>wlcome to Admin Panel,</h1>
                  <hr />
                </b>
                <h1>
                  Modern Register UI
                  <br />
                  & cool Gradiant
                  <br />
                  Buttons
                  <hr />
                  BeautiFul UI <br /> & <br /> Clean Design
                  <br />
                </h1>
              </p>
              <Button variant="contained" style={{ backgroundColor: "black" }}>
                Share
              </Button>
            </div>
          </TableCell>
        </TableRow>
      </div>
    </div>
  );
};

export default AdminReg;
