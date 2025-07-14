import React, { useState, useEffect } from "react";
import { Box, Paper, Typography, TextField, FormControlLabel, Checkbox, Button, Link } from '@mui/material';
import { useNavigate } from "react-router-dom";
// import { login, isAuthenticated } from "../login/auth/authntication";
import {userData, validate_token, generate_token, get_token, store_userData, clear_userData} from './auth/auth';
import styles from "./Login.module.css"; 

export default function Login() {

  const data = {
    username: '',
    password: ''
  }
  const [formData, setFormData] = useState(data);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  function inputChange(e) {
    const { name, value } = e.target;          
    setFormData((prev) => ({ 
      ...prev, 
      [name]: value 
    }));
  }

  //redirect page to welcome
  function check_Token() {
    const token = get_token(); //localstorage
    if(!token) 
      return; 

    return validate_token(token)        // returns promise
      .then(isValid => {
        if (isValid) {
          navigate("/welcome");         
        }
      })
      .catch(() => {
        // clear_userData();       
        navigate("/");
      });
  }

  useEffect(() => {
    check_Token();
  }, [navigate])

  //check user details
  async function loginClick(event){
    event.preventDefault();
    const { username, password } = formData;

    if(username === userData.username && password === userData.password){
      const token = await generate_token(username);
      store_userData(token, username);
      navigate("/welcome");
    } 
    else{
      setErr("Invalid username or password");
    }
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
              name="username"
              placeholder="Username"
              fullWidth
              variant="outlined"
              className={styles.input}
              value={formData.username}
              onChange={inputChange}
            />
            <TextField
              name="password"
              placeholder="Password"
              type="password"
              fullWidth
              variant="outlined"
              className={styles.input}
              value={formData.password}
              onChange={inputChange}
            />

            {err && (
                <Typography
                    variant="body2"
                    style={{ color: "red", marginTop: "12px", textAlign: "center" }}
                >
                    {err}
                </Typography>
            )}

            <Box className={styles.options}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Keep me signed in"
                classes={{ label: styles.keepSignedInLabel }}
              />
              <Link href="#" underline="none" className={styles.forgotLink}>
                Forgot password?
              </Link>
            </Box>

            <Box className={styles.buttonGroup}>
              <Button
                type="submit"
                variant="contained"
                className={styles.loginBtn}
              >
                Login
              </Button>
              <Button variant="outlined" className={styles.registerBtn}>
                Register
              </Button>
            </Box>
          </form>
          
        </Paper>
      </Box>

      
    </>
  );
}
