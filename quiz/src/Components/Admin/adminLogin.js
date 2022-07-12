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

const AdminLogin = (setLoginAdmin) => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({
    adminName: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin({
      ...admin,
      [name]: value,
    });
  };

  const AdminLogin = () => {
    axios.post("http://localhost:8000/adminLogin", admin).then((res) => {
      alert(res.data.message);
      localStorage.setItem("admin_values", JSON.stringify(res.data.admin));
      navigate("/main");
      //   setLoginAdmin(res.data.user);
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
        <h3>Admin Login</h3>
      </div>
      <div className="container" style={{ position: "absolute", top: "10%" }}>
        <TableRow>
          <TableCell>
            <div className="textField">
              <AccountCircleIcon style={{ width: "10%", height: "10%" }} />
              <hr />
              <br />
              <TextField
                name="adminName"
                type="text"
                onChange={handleChange}
                value={admin.adminName}
                label="Admin Name"
                variant="outlined"
              />
              <br />
              <br />
              <TextField
                name="password"
                type="password"
                onChange={handleChange}
                value={admin.password}
                label="Password"
                variant="outlined"
              />
              <br />
              <br />
              <Button variant="contained" onClick={AdminLogin}>
                SIGN IN
              </Button>
              <br /> <br />
              New User ?. &nbsp;
              <Link onClick={() => navigate("/adminReg")}>SIGN UP</Link>
            </div>
          </TableCell>

          <TableCell>
            <Card
              sx={{ maxWidth: 1000, height: 620 }}
              style={{
                marginLeft: "6%",
                backgroundColor: "gray",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
                  image="https://www.livecareer.com/wp-content/uploads/2020/09/admin-assistant-summary-statement.jpg"
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

export default AdminLogin;
