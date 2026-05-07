import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // GET API (Load tasks)
  const getTasks = () => {
    axios.get("http://localhost:8080/api/tasks")
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // POST API (Add task)
  const addTask = () => {

    axios.post("http://localhost:8080/api/tasks", task, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(() => {
      setTask("");
      getTasks();
    });

  };

  // DELETE API
  const deleteTask = (index) => {

    axios.delete(`http://localhost:8080/api/tasks/${index}`)
      .then(() => {
        getTasks();
      });

  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>

      <h1>Task App</h1>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;