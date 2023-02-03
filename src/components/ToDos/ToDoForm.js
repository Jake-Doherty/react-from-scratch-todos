import { useContext, useState } from 'react';
import { createToDoItem, deleteAllToDos } from '../../services/todos';
import { ToDosContext } from '../../context/ToDosContext.js';

export default function ToDoForm() {
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const { setToDos } = useContext(ToDosContext);

  const handleNewTodo = async () => {
    try {
      const todo = await createToDoItem(description, completed);
      setToDos((prev) => [...prev, todo]);
      setDescription('');
      setCompleted(false);
    } catch (e) {
      console.error(e.message);
    }
  };

  const handleDeleteAll = async () => {
    try {
      await deleteAllToDos();
      setToDos([]);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div className="todo-form">
      <label>
        <span className="label">{`What's on your todo list?`}</span>
        <input
          accessKey="t"
          onKeyDown={(e) => e.key === 'Enter' && handleNewTodo()}
          title="press 'Alt' + 't' to focus on Todo input"
          className="input m-2"
          type="text"
          placeholder="What needs to be done?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button className="button is-primary m-2" onClick={handleNewTodo}>
        Add
      </button>

      <button className="button is-primary m-2" onClick={handleDeleteAll}>
        Delete All
      </button>
    </div>
  );
}
