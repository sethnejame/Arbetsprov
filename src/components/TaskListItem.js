import React from "react";

function TaskListItem(props) {
  return (
    <div>
      {props.taskList.title}
    </div>
  );
}

export default TaskListItem;
