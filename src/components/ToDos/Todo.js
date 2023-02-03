import React from 'react';

export default function Todo({ id, description, completed, handleChange }) {
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
      button
    </div>
  );
}
