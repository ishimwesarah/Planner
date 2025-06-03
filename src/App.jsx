import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";


function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [currentTask, setCurrentTask] = useState(null);

  const handleAdd = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleEdit = (task) => {
    setCurrentTask(task);
  };

  const handleUpdate = (updated) => {
    setTasks(tasks.map((t) => (t.id === updated.id ? updated : t)));
    setCurrentTask(null);
  };

  const filtered = filter === "All" ? tasks : tasks.filter((t) => t.duration === filter);

  return (
    <div className="app">
      <section className="hero">

   <h1>Make a <span style={{ color: "violet" }}>better</span> plan for your life</h1>
      <p>whoever you are, whatever you are looking for, we have the perfect place for you</p>
      </section>
   
      <TaskForm onAdd={handleAdd} currentTask={currentTask} onUpdate={handleUpdate} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <TaskList tasks={filtered} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
