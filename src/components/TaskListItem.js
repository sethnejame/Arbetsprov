import React from "react";
import PropTypes from "prop-types";


function TaskListItem(props) {
  return (
    <div className="taskListItem">
      {props.taskList.title}
    </div>
  );
}

TaskListItem.propTypes = {
  taskList: PropTypes.object.isRequired
};
export default TaskListItem;
