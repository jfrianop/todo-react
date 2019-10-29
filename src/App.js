import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([{ title: "Tarea de ejemplo", done: false, id: "0" }]);
  const [newTask, setNewTask] = useState("Nueva Tarea");
  const [taskCount, setTaskCount] = useState(1);

  function addTask() {
    let task = { title: newTask, done: false, id: taskCount };
    setNewTask("");
    setTaskCount(taskCount + 1);
    setTasks([...tasks, task]);
  }

  function changeDone(id) {
    setTasks(tasks.map(task =>
      id === task.id ? { ...task, done: !task.done } : task
    ))
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => id !== task.id))
  }


  return (
    <div className="App">
      <ul>
        {tasks.map((task) => {
          const classDone = task.done ? "done" : "undone";
          return (<li
            key={task.id}
            className={classDone}>
            {task.title}
            <button onClick={() => changeDone(task.id)}>✓</button>
            <button onClick={() => deleteTask(task.id)}>X</button>
          </li>)
        })}
      </ul>
      <input value={newTask} onChange={e => setNewTask(e.target.value)} onKeyPress={e => { if (e.which === 13) addTask() }} /><button onClick={addTask}>Añadir Tarea</button>
    </div>
  );
}

export default App;
