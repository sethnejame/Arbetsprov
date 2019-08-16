import React, { useState } from "react";

// component for individual classes
function Task({ task, index, completeTask }) {
  return (
    // ternary operator styles on complete or not
    <div
      style={{ textDecoration: task.completed ? "line-through" : "" }}
      className="task"
    >
      {task.title}
      <div>
        <button className="btn" onClick={() => completeTask(index)}>Complete</button>
      </div>
    </div>
  );
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
        className="taskForm"
        value={value} // state value comes in here
        onChange={e => setValue(e.target.value)} // use the hook to set the new val
        placeholder="Give me a task. . ."
        autoFocus
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

  const completeTask = index => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

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
      <TaskForm addTask={addTask} />
        {tasks.map((task, index) => (
          <Task
            task={task}
            key={index}
            index={index}
            completeTask={completeTask}
          />
        ))}
       
      </div>
    </div>
  );
}

export default App;
