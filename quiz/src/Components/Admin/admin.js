import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const [admin, setUser] = useState({
    AddyourQuestion: "",
    OptionOne: "",
    OptionTwo: "",
    OptionThree: "",
    

  });
  // const [Question] = useState({
  //   OptionOne: "",
  //   OptionTwo: "",
  //   OptionThree: "",
  // });
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(admin);
    setUser({
      ...admin,
      [name]: value,
    });
    console.log(admin);
  };

  const handleAnswerButton = () => {};

  const Admin = () => {
    axios.post("http://localhost:8000/admin", admin).then((res) => {
      localStorage.setItem("admin", JSON.stringify(admin));
      alert(res.data);
      navigate("/admin");
    });
  };

  return (
    <div className="Admin">
      <h1>Admin</h1>
      <hr />
      <Box>
        <TextField
          name="AddyourQuestion"
          label="Add your Question"
          multiline
          rows={2}
          variant="standard"
          value={admin.AddyourQuestion}
          onChange={handleChange}
          style={{ width: "20rem" }}
        ></TextField>
        <br />
        <br />
        <FormControl sx={{ m: 3 }} variant="standard">
          <div
            className="Add Option"
            name="AddOption"
            // value={admin.AddOption}
            // onChange={handleChange}
          >
            Add option
            <br />
            <TextField
              id="standard-basic"
              label="option 1"
              variant="standard"
              name="OptionOne"
              value={admin.OptionOne}
              onChange={handleChange}
            ></TextField>
            <br />
            <TextField
              id="standard-basic"
              label="option 2"
              variant="standard"
              name="OptionTwo"
              value={admin.OptionTwo}
              onChange={handleChange}
            ></TextField>
            <br />
            <TextField
              id="standard-basic"
              label="option 3 "
              variant="standard"
              name="OptionThree"
              value={admin.OptionThree}
              onChange={handleChange}
            ></TextField>
            <br />
          </div>
        </FormControl>
        <br />
        <br />
        <Button
          sx={{ mt: 1, mr: 1 }}
          type="submit"
          variant="outlined"
          onClick={Admin}
        >
          submit
        </Button>
      </Box>
    </div>
  );
};
export default Admin;
