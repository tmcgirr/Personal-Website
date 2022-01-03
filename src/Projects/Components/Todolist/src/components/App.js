import React from "react";
import TodoApp from "./TodoApp";
import useStyles from "../styles/AppStyles";

function Todolist() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <TodoApp />
    </div>
  );
}

export default Todolist;
