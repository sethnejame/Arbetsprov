import React from "react";
import TaskListItem from "./TaskListItem";

function TaskList(props) {
  return props.tasklist.map(task => <TaskListItem taskList={task} />);
}

export default TaskList;
