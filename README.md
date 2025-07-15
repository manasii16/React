## HOC Component

This is a special wrapper (called a Higher-Order Component) that gives toggle on/off ability to any component you wrap it around.

    - It keeps track of whether something is ON or OFF (true or false).
    - When you click to toggle it, it also tells the main component:
    - +40 points if turned ON
    - -40 points if turned OFF

The goal component doesn't need to manage this logic itself — it's all handled here and passed down!

##  GoalDashBoard.jsx

  - This is the main dashboard component that shows user goals and total points.
  - Users can add or delete goals using the form.
  - Each goal is displayed using a GoalTracker, wrapped in ToggleBtn HOC.
  - Toggling a goal updates the total points (+40 or -40).

## GoalTracker.jsx

  - Displays a single goal item.
  - Uses props like "value" and "toggle" from the ToggleBtn HOC.
  - Has a button to mark goal as done and delete the goal.
