import React, { useContext, memo } from "react";
import { DispatchContext } from "../contexts/todos.context";
import EditTodoForm from "./EditTodoForm";
import useToggleState from "../hooks/useToggleState";
import useStyles from "../styles/TodoStyles.js";
import { REMOVE_TODO, TOGGLE_TODO } from "../constants/actions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function Todo({ id, task, completed }) {
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggle] = useToggleState(false);

  if (isEditing) {
    return (
      <li
        className={classes.Todo}
        style={{ overflowY: "hidden" }}
        onClick={() => toggle()}
      >
        <EditTodoForm id={id} task={task} toggleEditForm={toggle} />
      </li>
    );
  }

  return (
    <li
      className={classes.Todo}
      onClick={() => dispatch({ type: TOGGLE_TODO, id })}
    >
      <div>
        {/* style={{ maxWidth: 100 }} */}
        <span
          style={{
            textDecoration: completed ? "line-through" : "",
            color: completed ? "grey" : "#000",
          }}
        >
          {task}
        </span>
      </div>
      <div className={classes.icons}>
        <IconButton>
          <DeleteIcon
            style={{ color: "#c0392b" }}
            className="fas fa-trash"
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: REMOVE_TODO, id });
            }}
          />
        </IconButton>
        <IconButton>
          <Button
            style={{ color: "#blue" }}
            //className="fas fa-pen"
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
            variant="outlined"
          >
            Edit
          </Button>
        </IconButton>
      </div>
    </li>
  );
}

export default memo(Todo);
