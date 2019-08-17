import React, { useState } from "react";

// component for adding tasks to list
function TaskForm({ addTask }) {
  // hooks w/ state for new tasks
  const [value, setValue] = useState("");
  // submit handler for new tasks
  const handleSubmit = e => {
    e.preventDefault(); // prevent form sub & page reload
    if (!value) return;
    addTask(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="taskForm"
        value={value} // state value comes in here
        onChange={e => setValue(e.target.value)} // use the hook to set the new val
        placeholder="Add task. . ."
        autoFocus
      />
    </form>
  );
}

export default TaskForm;
