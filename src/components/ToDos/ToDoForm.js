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
    <div className="field is-grouped m-2">
      <input
        className="input m-2"
        type="text"
        placeholder="new item"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="button is-primary m-2" onClick={handleNewTodo}>
        Add
      </button>

      <button className="button is-primary m-2" onClick={handleDeleteAll}>
        Delete All
      </button>
    </div>
  );
}
