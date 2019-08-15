import React from "react";
import TaskListItem from "./TaskListItem";

function TaskList(props) {
  return props.tasklist.map(task => <h3>{task.title}</h3>);
}

export default TaskList;
