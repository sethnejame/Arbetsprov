import React from "react";

// component for individual classes
function Task({ task, index, completeTask, deleteTask, editTask }) {
  return (
    // ternary operator styles on complete or not
    <div
      style={{ textDecoration: task.completed ? "line-through" : "" }}
      className="task"
    >
      {task.title}
      <div>
        <button className="btn" onClick={() => editTask(task)}>
          Edit
        </button>
        <button className="btn" onClick={() => completeTask(index)}>
          Complete
        </button>
        <button className="btn" onClick={() => deleteTask(index)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;
