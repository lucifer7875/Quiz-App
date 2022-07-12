import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MainContent
            </Typography>
            <Button color="inherit" onClick={() => navigate("dashboard")}>
              DashBoard
            </Button>
            {/* <Link to="dashboard">DashBoard</Link> */}
            {/* <Link to="setting">Setting</Link> */}
            <Button color="inherit" onClick={() => navigate("setting")}>
              Setting
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
export default Navbar;
