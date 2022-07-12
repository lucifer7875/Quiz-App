import React from "react";
import { useNavigate } from "react-router-dom";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import HomeIcon from "@mui/icons-material/Home";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./home.css";

// import IconButton from "@mui/material/IconButton";
import "./home.css";
import { Button } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="posts-header">
        <Button style={{ position: "absolute", left: "0%" }}>
          <HomeIcon />
          HOME{" "}
        </Button>
        <Button
          variant="contained"
          style={{ position: "absolute", right: "0%", marginRight: "1%" }}
          onClick={() => navigate("/userLogin")}
        >
          User
        </Button>
      </div>
      {/* container */}
      <div>
        <h1>Welcome to Quiz-world</h1>
      </div>
      {/* table */}
      <TableRow>
        <TableCell style={{ width: "50%" }}>
          <img
            src={
              "https://cdn.images.express.co.uk/img/dynamic/130/590x/Easy-quiz-questions-1282929.jpg?r=1621866486163"
            }
          ></img>
        </TableCell>
        <TableCell>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <AccountCircleIcon style={{ width: "10%", height: "10%" }} />
                User
              </Typography>
              <Typography variant="body2" color="text.secondary">
                New user Register Fist.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => navigate("/userReg")}>
                Register
              </Button>
            </CardActions>
          </Card>
        </TableCell>
      </TableRow>
    </div>
  );
};
export default Home;
