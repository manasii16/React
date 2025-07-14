import React, { useState, Fragment, useEffect } from 'react';
import { Box, Paper, Typography, TextField, FormControlLabel, Checkbox, Button, Link } from '@mui/material';
import styles from './Login.module.css';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import Home from '../Home/Home';

export default function Login(){
  //login
  const data={
    email: '',
    password: ''
  }
  const [form, setForm] = useState(data);
  const [ message, setMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [status, setStatus] = useState('');

  //refresh page

  //1. no dependency array - run every render 

  // useEffect(() =>{
  //   const loginData = localStorage.getItem('loggedIn');
  //   if (loginData === 'true'){
  //     setLoggedIn(true);                                   //componenet re-render 
  //     console.log('refresh -1');
  //   }
  //   console.log('useeffect with no dependency array');
  // });

  
  //2. empty dependency array - refresh ppage

  useEffect(() =>{
    const loginData = localStorage.getItem('loggedIn');
    if (loginData === 'true'){
      setLoggedIn(true);                                   
      console.log('refresh -1');
    }
    // console.log('useeffect with empty dependency array');

  }, []);  //effect runs only once


  // 3. login status  - useEffect with dependency array

  // useEffect(()=>{
  //   console.log(loggedIn);
  //   localStorage.setItem('loggedIn',loggedIn);
  // });

  // useEffect(() => {
  //   console.log('logged-in -', loggedIn);
  //   localStorage.setItem('loggedIn', loggedIn);
  // }, 
  // [loggedIn]);  //run this only when login status changes

  
  useEffect(() => {
    // console.log('start..');

    const timeout = setTimeout(() => {
      // new timeout is scheduled again for the new effect
      if (status === 'logout'){
        setMessage('Logout successfully'); }
    }, 1000);

    return() =>{
      clearTimeout(timeout);
      // console.log('clear');
    };
  }, [loggedIn]);


  const inputChange = (event) => {
    const {name, value} = event.target;
    setForm(prev =>({ 
      ...prev, 
      [name]: value 
    }));
  };

  const formValid = () => {
    if(!form.email.includes('@') || !form.email.includes('.') || !form.email){
      return 'Enter a valid email address.';
    }
    if(!form.password || form.password.length < 8){
      return 'Password must be at least 8 characters long.';
    }
    return null;
  };

  //login
  const loginClick = (e) => {
    e.preventDefault();
    const errorMsg = formValid();
    
    if (errorMsg){
      // console.log('error');
      setMessage(errorMsg);
    } 
    else{
      console.log('Login successfully!!');
      setForm(data);
      setLoggedIn(true);
      setStatus('login')
      localStorage.setItem('loggedIn', 'true');  //for refresh page
      localStorage.setItem('email', form.email);  //store email in localstorage
    }
  };

  //logout
  const logoutClick = () => {
    setLoggedIn(false);
    setStatus('logout');
    localStorage.removeItem('loggedIn');
  };

  if (loggedIn) {
    return <Home onLogout={logoutClick} />;
  }



  return (
    <>
      <Box className={styles.container}>
        <Paper elevation={10} className={styles.card}>
          <Typography variant="h5" className={styles.title}>
            Login account
          </Typography>

          <form className={styles.form} onSubmit={loginClick}>
            <TextField
              name="email"
              placeholder="Email"
              fullWidth
              variant="outlined"
              className={styles.input}
              value={form.email}
              onChange={inputChange}
            />
            <TextField
              name="password"
              placeholder="Password"
              type="password"
              fullWidth
              variant="outlined"
              className={styles.input}
              value={form.password}
              onChange={inputChange}
            />

            <Box className={styles.options}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Keep me signed in"
              />
              <Link href="#" underline="none" className={styles.forgotLink}>
                Forgot password?
              </Link>
            </Box>

            <Box className={styles.buttonGroup}>
              <Button type="submit" variant="contained" className={styles.loginBtn}>
                Login
              </Button>
              <Button variant="outlined" className={styles.registerBtn}>
                Register
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>

      {message && (
        <ErrorMsg message={message} onClose={() => setMessage('')} />
      )}
    </>
  );
}
