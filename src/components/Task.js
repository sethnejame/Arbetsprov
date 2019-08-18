import React from "react";

// component for individual classes
function Task({ task, index, completeTask, deleteTask, editTask, toggleComp }) {
  return (
    // ternary operator styles on complete or not
    <div
      style={{ textDecoration: task.completed ? "line-through" : "" }}
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
        <button className="btn" onClick={() => completeTask(index)}>
          Complete
        </button>
        <button className="btn" style={{ color: 'red', fontWeight: '800' }} onClick={() => deleteTask(index)}>
          X
        </button>
      </div>
    </div>
  );
}

export default Task;
