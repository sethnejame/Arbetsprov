import React from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
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
    </div>
  );
}

export default App;
