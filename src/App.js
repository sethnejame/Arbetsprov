<<<<<<< HEAD
import React, { useState } from "react";
import TaskList from "./components/TaskList";
=======
import React from "react";
>>>>>>> 3d01e45a09ee51217680a03e056c24e0dfaa592b

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
<<<<<<< HEAD
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
      completed: false
    }
  ]);
  return (
    <div>
      <h1 className="title">Task List</h1>
      <TaskList tasklist={tasks} />
=======
      title: "Complete Arbetsprov Task List",
      completed: false,
      status: "active"
    },
    {
      id: 2,
      title: "Drink a beer",
      completed: false,
      status: "onhold"
    },
    {
      id: 3,
      title: "Continue the Job Search",
      completed: false,
      status: "onhold"
    }
  ]);

  return (
    <div>
      <h1 className="title">Task List</h1>
>>>>>>> 3d01e45a09ee51217680a03e056c24e0dfaa592b
    </div>
  );
}

export default App;
