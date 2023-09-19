import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DuoIcon from "@mui/icons-material/Duo";
import "./UpparNav.css";
import { useNavigate } from "react-router-dom";

export default function ButtonAppBar(props) {
  const navigate = useNavigate();
  const { subject } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#000080" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {subject.name}
          </Typography>
          <Button
            color="inherit"
            endIcon={<DuoIcon />}
            className="meet-btn"
            onClick={() => {
              // navigate(`/room?id=${subject._id}`);
              window.open(`/room?id=${subject._id.substring(5)}`, "_blank");
            }}
          >
            Join the meet
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
