import React, { useState } from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

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

  const deleteTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
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
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
