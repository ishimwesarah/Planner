import React from 'react';


// eslint-disable-next-line react/prop-types
function TaskList({ tasks, onEdit, onDelete }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div className="task" key={task.id}>
          <div className="info">
            <div className="task-number">{index + 1}</div>
            <div className="task-name">{task.name} ({task.duration})</div>
          </div>
          <div className="task-buttons">
            <button onClick={() => onEdit(task)}>✏️</button>
            <button onClick={() => onDelete(task.id)}>🗑️</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
