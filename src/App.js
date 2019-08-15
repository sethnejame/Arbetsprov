import React, { useState } from "react";

// component for individual classes
function Task({ task, index }) {
  return <div className="task">{task.title}</div>;
}

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
        className="task"
        value={value} // state value comes in here
        onChange={e => setValue(e.target.value)} // use the hook to set the new val
        placeholder="Add new task here. . ."
      />
    </form>
  );
}

// HOC component
function App() {
  // hooks w/ state for tasks
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete Arbetsprov TaskList Challenge",
      status: "active",
      completed: false
    },
    {
      id: 2,
      title: "Get a job offer",
      status: "on hold",
      completed: false
    },
    {
      id: 3,
      title: "Drink beer",
      status: "on hold",
      completed: true
    }
  ]);

  // send new task props to TaskForm via addTask
  const addTask = text => {
    const newTasks = [...tasks, { title: text }];
    setTasks(newTasks);
  };

  // iterate over current tasks here, display in page, inc. addTask
  return (
    <div>
      <h1 className="title">Task List</h1>
      <div className="taskList">
        {tasks.map((task, index) => (
          <Task task={task} key={index} index={index} />
        ))}
        <TaskForm addTask={addTask} />
      </div>
    </div>
  );
}

export default App;
