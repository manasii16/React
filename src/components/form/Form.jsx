/* simple form to input a goal name and add it to the list. Sends the goal name to the parent via "on_add" prop.*/ 

import React, { Component } from "react";
import { Stack, TextField, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styles from './Form.module.css'

export default class Form extends Component {
  state ={ 
    name: "" 
  };

  submit= () => {
    const { name } = this.state;

    if(name.trim()) {
      this.props.on_add(name.trim());
      this.setState({ 
        name: "" 
    });
    }
  };

  render() {
    return (
      <Box className={styles.formWrapper}>
        <Stack direction="row" spacing={2} className={styles.innerStack}>
          <TextField
            placeholder="Add a new Goal…"
            variant="outlined"
            size="small"
            fullWidth
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <Button variant="contained" startIcon={<AddIcon />} onClick={this.submit}>
            Add
          </Button>
        </Stack>
      </Box>
    );
  }
}
