import { React, useState } from "react";
import axios from "axios";
import "../UserRegister/userReg.css";
import { Link, TableCell, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const UserLogin = (setLoginUser) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const UserLogin = () => {
    axios.post("http://localhost:8000/userLogin", user).then((res) => {
      alert(JSON.stringify(res.data.message));
      // console.log(res.data);
      if (res.data.user) {
        localStorage.setItem("user_values", JSON.stringify(res.data.user));
        navigate("/user");
        setLoginUser(res.data.user);
      }
    });
  };
  return (
    <div className="UL">
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
        <h3>User Login</h3>{" "}
      </div>
      <div className="container" style={{ position: "absolute", top: "10%" }}>
        <TableRow>
          <TableCell>
            <div className="textField">
              <AccountCircleIcon style={{ width: "10%", height: "10%" }} />
              <hr />
              <br />
              <TextField
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
                name="password"
                type="password"
                onChange={handleChange}
                value={user.password}
                label="Password"
                variant="outlined"
              />
              <br />
              <br />
              <Button variant="contained" onClick={UserLogin}>
                SIGN IN
              </Button>
              <br /> <br />
              New User ?. &nbsp;
              <Link onClick={() => navigate("/userReg")}>SIGN UP</Link>
            </div>
          </TableCell>

          <TableCell>
            <Card
              sx={{ maxWidth: 1500, height: 620 }}
              style={{
                marginLeft: "6%",
                backgroundColor: "gray",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
                  image="https://img.freepik.com/free-vector/quiz-show-concept-illustration_114360-9621.jpg?t=st=1657088466~exp=1657089066~hmac=b4d21eae375fd550b899b6abc8efde80cd0d308b2fe029a8d1a01e5470f19164&w=1060"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Quiz
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Our quiz is intresting for young age student It is a fun
                    Quiz. In this quiz question is relatable with
                    GeneralKowledge, Current-Affairs, Sports and many other
                    things included
                    <b>
                      <h3>Use Your Mind.</h3>
                    </b>
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

export default UserLogin;
