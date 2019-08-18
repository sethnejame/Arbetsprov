import React, { useState, useEffect } from "react";

const EditTaskForm = props => {
  const [task, setTask] = useState(props.currentTask);

  const handleInputChange = event => {
    console.log(event.target.value)
    setTask({ ...task, title: event.target.value });
  };

  useEffect(() => {
    setTask(props.currentTask)
  }, [props])

  return (
    <form onSubmit={event => {
      event.preventDefault()

      props.updateTask(task.id, task)
    }}>
      <input
        type="text"
        className="taskForm edit"
        value={task.title} // state value comes in here
        onChange={handleInputChange} // use the hook to set the new val
      />
    </form>
  );
};

export default EditTaskForm;
