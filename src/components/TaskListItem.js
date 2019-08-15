import React from "react";
import PropTypes from "prop-types";

function TaskListItem(props) {
  return (
    <div className="taskListItem" style={crossOut(props)}>
      {props.taskList.title}
    </div>
  );
}

function crossOut(props) {
  if (props.taskList.completed) {
    return {
      textDecoration: "line-through"
    };
  } else if (props.taskList.status === "active") {
    return {
      textDecoration: "underline"
    };
  } else {
    return {
      textDecoration: "none"
    };
  }
}

TaskListItem.propTypes = {
  taskList: PropTypes.object.isRequired
};
export default TaskListItem;
