import React from 'react';

export default function Todo({ id, description, completed, handleChange, handleDelete }) {
  return (
    <div id={`todo-${id}`}>
      <label className="checkbox">
        <span>ToDone</span>
        <input
          className="m-1"
          type="checkbox"
          checked={completed}
          onChange={() => handleChange({ id, description, completed })}
        />
      </label>
      <span className="description">{description}</span>
      <button onClick={() => handleDelete({ id })}>Delete</button>
    </div>
  );
}
