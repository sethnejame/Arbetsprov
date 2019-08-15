import React from "react";
import PropTypes from "prop-types";


function TaskListItem(props) {
  return (
    <div>
      {props.taskList.title}
    </div>
  );
}

TaskListItem.propTypes = {
  taskList: PropTypes.object.isRequired
};
export default TaskListItem;
