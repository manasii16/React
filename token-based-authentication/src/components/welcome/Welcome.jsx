import React from "react";
import { useNavigate } from "react-router-dom";
// import { getUsername, logout } from "../login/auth/authntication";
import {get_username, logout} from '../login/auth/auth'
import styles from './Welcome.module.css'
import { Box, Typography, Button, AppBar, Toolbar } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export default function Welcome() {
  const navigate = useNavigate();
  const username = get_username();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  

  return (
    <>
      <AppBar position="static" className={styles.appBar} elevation={1}>
        <Toolbar className={styles.toolBar}>
          <Typography variant="h6" className={styles.userName}>
            {username}
          </Typography>

          <Button
            color="inherit"
            startIcon={<ExitToAppIcon />}
            onClick={handleLogout}
            className={styles.logoutBtn}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Box className={styles.contentWrapper}>
          <Typography variant="h4" className={styles.welcomeText}>
            Welcome, {username}! 
          </Typography>
      </Box>
    </>
  );
}
