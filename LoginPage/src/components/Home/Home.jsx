import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import styles from './Home.module.css';

export default function Home({ onLogout }) {
  const email = localStorage.getItem('email');
  const username = email.split('@')[0];

  const message = "You're 100% bug-free today (probably)";

  return (
    <Box className={styles.container}>

      <Box className={styles.navbar}>
        <Typography className={styles.username}>{username}</Typography>
        <Button
          variant="outlined"
          className={styles.logoutBtn}
          onClick={onLogout}
        >
          Logout
        </Button>
      </Box>

      <Box className={styles.msg}>
        <Typography variant="h4" align="center">
          Welcome to HomePage!
        </Typography>

        <Box className={styles.msgbox}>
          <Typography variant="h6" align="center">
            {message}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
