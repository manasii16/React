/*It displays a single goal item with buttons to complete or delete it, using value and toggle props provided by the ToggleBtn HOC.*/

import {Card,CardContent,IconButton,Stack,} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styles from "./GoalTracker.module.css";
import { Component } from "react";

export default class GoalTracker extends Component{
  state = { 
    show_points: false
  };

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      const delta = this.props.value ? +40 : -40; 
      
      console.log("points -", delta);

      this.setState({ show_points: true, delta }, () =>
        setTimeout(() => this.setState({ show_points: false }), 1000)
      );
    }
  }

  componentWillUnmount() {
    console.log("component unmounted");
  }

  render() {
    const { goal, on_delete, value, toggle } = this.props;
    const { show_points, delta } = this.state;

    const cardClass = value
      ? `${styles.card} ${styles.cardDone}`
      : styles.card;

    const buttonClass = value ? styles.buttonDone : styles.buttonTodo;

    return (
      <Card className={cardClass} elevation={3}>
        {show_points && (
          <div
            className={`${styles.pointsPopup} ${
              delta < 0 ? styles.pointsNegative : ""
            }`}
          >
            {delta > 0 ? "+" : ""}
            {delta} 
          </div>
        )}

        <CardContent>
          <Stack direction="row" alignItems="center" spacing={1} fontSize={18}>
            <span className={styles.habitName}>{goal.name}</span>

            <IconButton size="small" className={buttonClass} 
            onClick={toggle}>
              <CheckCircleIcon fontSize="medium" />
            </IconButton>

            <IconButton
              size="medium"
              onClick={on_delete}
              className={styles.delete_button}
            >
              <DeleteIcon fontSize="medium" />
            </IconButton>
          </Stack>
        </CardContent>
      </Card>
    );
  }
}

