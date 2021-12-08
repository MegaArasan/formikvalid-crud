import "./App.css";

import { useState } from "react";
import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import { Switch, Route } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { Studentlist } from "./Studentlist";
import { Studentprofile } from "./Studentprofile.js";
import { Addstudent } from "./Addstudent.js";
import { Editstudent } from "./Editstudent.js";

export default function App() {
  const history = useHistory();
  const [opened, setopened] = useState(false);
  const handleDrawerOpen = () => {
    setopened(true);
  };
  const handleDrawerClose = () => {
    setopened(false);
  };
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar variant="regular">
          <IconButton
            size="large"
            aria-label="menu"
            color="inherit"
            onClick={handleDrawerOpen}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0.1, alignItems: "center", display: "flex" }}
          >
            <PersonIcon sx={{ display: { xs: "none", sm: "block" } }} />
            Student Database
          </Typography>
          <Button
            sx={{ display: { xs: "none", sm: "block" }, ml: "auto" }}
            variant="text"
            color="inherit"
            onClick={() => history.push("/")}
          >
            Home
          </Button>
          <Button
            sx={{ display: { xs: "none", sm: "block" } }}
            variant="text"
            color="inherit"
            onClick={() => history.push("/students")}
          >
            Students
          </Button>
          <Button
            sx={{ display: { xs: "none", sm: "block" } }}
            variant="text"
            color="inherit"
            onClick={() => history.push("/addstudent")}
          >
            Add Student
          </Button>
          <Drawer
            sx={{
              width: "200px",
              height: "100%",
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: "200px",
                height: "100%",
                boxSizing: "border-box",
                backgroundColor: "#1976d2",
                color: "white",
              },
            }}
            anchor="left"
            open={opened}
          >
            <IconButton
              color="inherit"
              aria-label="close"
              component="span"
              onClick={handleDrawerClose}
              sx={{ ml: "auto" }}
            >
              <CloseIcon />
            </IconButton>
            <Button
              variant="text"
              color="inherit"
              onClick={() => history.push("/")}
            >
              Home
            </Button>
            <Button
              variant="text"
              color="inherit"
              onClick={() => history.push("/students")}
            >
              Students
            </Button>
            <Button
              variant="text"
              color="inherit"
              onClick={() => history.push("/addstudent")}
            >
              Add Student
            </Button>
          </Drawer>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/students">
          <Studentlist />
        </Route>
        <Route exact path="/students/edit/:id">
          <Editstudent />
        </Route>
        <Route exact path="/students/profile/:id">
          <Studentprofile />
        </Route>
        <Route exact path="/addstudent">
          <Addstudent />
        </Route>
        <Route exact path="**">
          <Notfound />
        </Route>
      </Switch>
    </div>
  );
}

function Home() {
  return (
    <div className="homepage">
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Xanh Mono",
          fontWeight: "700",
          fontSize: { xs: "3.5em", sm: "5em" },
        }}
      >
        Higher Secondary School
      </Typography>
    </div>
  );
}
function Notfound() {
  const history = useHistory();
  return (
    <div>
      <img
        src="https://static.collectui.com/shots/4144886/pikabu-error-404-large"
        alt="notfound"
        className="notfound"
      />
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
    </div>
  );
}
