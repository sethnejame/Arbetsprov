import React from "react";

// component for individual classes
function Task({ task, index, toggleStatus, deleteTask, editTask, toggleComp }) {
  return (
    // ternary operator styles on complete or not
    <div
      style={{
        textDecoration: task.completed ? "line-through" : "",
        backgroundColor:
          task.status === "Completed"
            ? "rgb(128, 192, 134, 0.3)"
            : task.status === "Active"
            ? "rgba(255, 251, 23, 0.3)"
            : task.status === "Archived"
            ? "rgba(255, 23, 23, 0.2)"
            : ""
      }}
      className="task"
    >
      <button className="btn rnd" onClick={() => toggleComp(index)}>
        {task.complexity}
      </button>
      {task.title}
      <div>
        <button className="btn" onClick={() => editTask(task)}>
          Edit
        </button>
        <button
          className="btn toggleStatus"
          onClick={() => toggleStatus(index)}
        >
          {task.status}
        </button>
        <button
          className="btn"
          style={{ color: "red", fontWeight: "800" }}
          onClick={() => deleteTask(index)}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Task;
