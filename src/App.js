import React, { useState } from "react";
import TaskList from "./components/TaskList";

function App() {
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
  return (
    <div>
      <h1 className="title">Task List</h1>
      <TaskList taskList={tasks} />
    </div>
  );
}

export default App;
