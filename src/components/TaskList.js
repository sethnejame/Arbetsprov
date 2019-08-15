import React from "react";
import TaskListItem from "./TaskListItem";
import PropTypes from "prop-types";

function TaskList(props) {
  return props.taskList.map(task => (
    <TaskListItem key={task.id} taskList={task} />
  ));
}

TaskList.propTypes = {
  taskList: PropTypes.array.isRequired
};
export default TaskList;
