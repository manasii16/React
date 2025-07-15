/*Dashboard component
 - Shows total points and current user goals
 - Form lets users add or delete goals
 - Each goal rendered with GoalTracker (wrapped in ToggleBtn HOC)
 - Toggling a goal updates total points by ±40
*/

import React, { Component } from "react";
import { Stack, Container, Typography, Box, Chip } from "@mui/material";
import Form from "../form/Form";
import StarIcon from "@mui/icons-material/Star";
import GoalTracker from "../goalTracker/GoalTracker";
import styles from './GoalDashboard.module.css';
import ToggleBtn from "../goalTracker/ToggleBtn"; 
//hoc 
const Tracker = ToggleBtn(GoalTracker, false);


export default class GoalBoard extends Component {
  constructor(props) {
    super(props);

    this.state ={ 
        goals: [],
        points: 0,
    };
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("1. getDerivedStateFromProps");
  //   return null;            
  // }

  componentDidMount(){
    console.log('2. Component Mount');
  }

  // shouldComponentUpdate() {
  //   console.log("3. shouldComponentUpdate");
  //   return true;            
  // }

  // getSnapshotBeforeUpdate() {
  //   console.log("4. getSnapshotBeforeUpdate");
  //   return null;            
  // }
  
  componentDidUpdate(prev) {
    if (prev.goals !== this.state.goals){
      console.log('5. Component update');
    }
  }

  points_handle = (point) =>
    this.setState((prev) => ({ 
      points: Math.max(prev.points + point, 0),
    }));
    

  add =(name) => {
    const new_goal = {
      id: Date.now(),
      name,
    };

    this.setState((s) => ({ 
        goals: [
          ...s.goals, 
          new_goal] 
    }));
  };

  delete = (id) =>
    this.setState((prev) => ({ 
        goals: prev.goals.filter((goal) =>{
          
          if(goal.id !== id){
            return true;
          } 
          else {
            return false;
          }
    }),
  }));


  render(){
    const {goals, points}=this.state;
    
    return(
      <Container
        maxWidth="sm"
        sx={{ mt: 6, mb: 6, textAlign: "center" }}   
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "primary.main",
            mb: 4,
          }}
        >
          Goals Tracker
        </Typography>

        <Box
          sx={{
            backgroundColor: "background.paper",
            borderRadius: "20px",
            p: 1,
            mb: 4,
            px: 5,
            boxShadow: 4,
          }}
        >
          <Form on_add={this.add} />
        </Box>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1.5}      
          sx={{ mb: 5 }}     
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, color: "text.secondary" }}
          >
            Total Points
          </Typography>

          <Chip
            icon={<StarIcon color="warning"/>}
            label={points}
            sx={{
              bgcolor:"background.default",
              color: "#3b0a61",             
              fontWeight: 600,
              fontSize: "1.5rem",
              px: 0,
              py: 2,
              
            }}
          />
        </Stack>

        <div className={styles.board_grid}>
          {goals.map(h => (
            <Tracker
              key={h.id}
              goal={h}
              on_delete={() => this.delete(h.id)}
              on_complete={this.points_handle}
            />
          ))}
        </div>
      </Container>
    );
  }
}
