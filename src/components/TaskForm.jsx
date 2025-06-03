import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function TaskForm({ onAdd, currentTask, onUpdate }) {
  // eslint-disable-next-line react/prop-types
  const [name, setName] = useState(currentTask?.name || "");
  // eslint-disable-next-line react/prop-types
  const [duration, setDuration] = useState(currentTask?.duration || "Daily");

  useEffect(() => {
    if (currentTask) {
      // eslint-disable-next-line react/prop-types
      setName(currentTask.name);
      // eslint-disable-next-line react/prop-types
      setDuration(currentTask.duration);
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    currentTask
      ? onUpdate({ ...currentTask, name, duration })
      : onAdd({ name, duration });
    setName("");
    setDuration("Daily");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <select value={duration} onChange={(e) => setDuration(e.target.value)}>
        <option>Daily</option>
        <option>Weekly</option>
        <option>Monthly</option>
        <option>Yearly</option>
      </select>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Task"
      />
      <button type="submit">{currentTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
}
