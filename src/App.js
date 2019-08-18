import React, { useState } from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";
import EditTaskForm from "./components/EditTaskForm";

// HOC component
function App() {
  // hooks w/ state for tasks
  const [tasks, setTasks] = useState([
    {
      id: 0,
      title: "Complete Arbetsprov TaskList Challenge",
      status: "Active",
      completed: false,
      complexity: 5
    },
    {
      id: 1,
      title: "Get a job offer",
      status: "Pending",
      complexity: 5
    },
    {
      id: 2,
      title: "Drink beer",
      status: "Completed",
      complexity: 5
    }
  ]);

  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, title: "", status: "", completed: null };

  const [currentTask, setCurrentTask] = useState(initialFormState);

  const updateTask = (id, updatedTask) => {
    setEditing(false);

    setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
  };

  const editTask = task => {
    if (editing === false) {
      setEditing(true);

      setCurrentTask({
        id: task.id,
        title: task.title,
        status: task.status,
        complexity: 5
      });
    } else {
      setEditing(false);
    }
  };

  const toggleStatus = index => {
    const newTasks = [...tasks];
    switch (newTasks[index].status) {
      case "Pending":
        newTasks[index].status = "Active";
        break;
      case "Active":
        newTasks[index].status = "Completed";
        break;
      case "Completed":
        newTasks[index].status = "Deleted";
        break;
      case "Deleted":
        newTasks[index].status = "Pending";
        break;
      default:
        newTasks[index].status = "Pending";
    }
    setTasks(newTasks);
  };

  // send new task props to TaskForm via addTask
  const addTask = text => {
    const newTasks = [
      ...tasks,
      { id: tasks.length + 1, title: text, status: "Pending", completed: false }
    ];
    setTasks(newTasks);
  };

  const deleteTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const toggleComp = index => {
    const newTasks = [...tasks];
    newTasks[index].complexity += 1;
    if (newTasks[index].complexity === 11) newTasks[index].complexity = 0;
    setTasks(newTasks);
  };

  // iterate over current tasks here, display in page, inc. addTask
  return (
    <div>
      <h1 className="title">Task List</h1>
      <div className="taskList">
        {editing ? (
          <EditTaskForm
            editing={editing}
            setEditing={setEditing}
            currentTask={currentTask}
            updateTask={updateTask}
          />
        ) : (
          <TaskForm addTask={addTask} />
        )}
        {tasks.map((task, index) => (
          <Task
            task={task}
            key={index}
            index={index}
            toggleStatus={toggleStatus}
            deleteTask={deleteTask}
            editTask={editTask}
            toggleComp={toggleComp}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
