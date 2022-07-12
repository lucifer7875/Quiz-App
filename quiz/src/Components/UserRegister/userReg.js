import { React, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import "./userReg.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, TableCell, TableRow } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const UserReg = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const UserReg = () => {
    const { userName, firstName, lastName, email, password, cPassword } = user;
    if (
      userName &&
      firstName &&
      lastName &&
      email &&
      password &&
      password === cPassword
    ) {
      axios.post("http://localhost:8000/userReg", user).then((res) => {
        alert(res.data.message);
        navigate("/userLogin");
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
        <h3>User Registration</h3>{" "}
      </div>
      {/* body section */} {/* create two TableCell for much better view  */}
      {/* create TableRow */}
      <div className="container" style={{ position: "absolute", top: "10%" }}>
        <TableRow>
          <TableCell>
            <div className="textField">
              <AccountCircleIcon style={{ width: "10%", height: "10%" }} />
              <hr />
              <br />
              <TextField
                id="outlined-basic"
                name="userName"
                type="text"
                onChange={handleChange}
                value={user.userName}
                label="User Name"
                variant="outlined"
              />
              <br />
              <br />
              <TextField
                id="outlined-basic"
                name="firstName"
                type="text"
                onChange={handleChange}
                value={user.firstName}
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
                value={user.lastName}
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
                value={user.email}
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
                value={user.password}
                label="Password"
                variant="standard"
              />
              &nbsp;&nbsp;
              <TextField
                id="standard-basic"
                name="cPassword"
                type="password"
                onChange={handleChange}
                value={user.cPassword}
                label="Confirm Password"
                variant="standard"
              />
              <br />
              <br />
              <Button variant="contained" onClick={UserReg}>
                SIGN UP
              </Button>
              <br />
              <br />
              already have an Account ?. &nbsp;
              <Link onClick={() => navigate("/userLogin")}>SIGN IN</Link>
            </div>
          </TableCell>

          {/* second cell */}

          <TableCell>
            <Card
              sx={{ maxWidth: 1500, height: 600 }}
              style={{
                marginLeft: "6%",
                backgroundColor: "gray",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
                  image="https://www.socialbakers.com/website/img/pages/quiz/social-media/og-social-media-master.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Quiz
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "black" }}
                >
                  Share
                </Button>
              </CardActions>
            </Card>
          </TableCell>
        </TableRow>
      </div>
    </div>
  );
};

export default UserReg;
