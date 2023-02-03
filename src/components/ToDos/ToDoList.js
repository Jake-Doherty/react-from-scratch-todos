import { useContext } from 'react';
import { toggleToDo, deleteToDo } from '../../services/todos';
import { ToDosContext } from '../../context/ToDosContext.js';
import Todo from './Todo.js';

export default function ToDoList() {
  const { todos, setToDos } = useContext(ToDosContext);

  if (!todos) return null;

  const handleChange = async ({ id, completed }) => {
    try {
      const updatedToDo = await toggleToDo({ id, completed });
      setToDos((prevToDos) =>
        prevToDos.map((prevToDo) => (prevToDo.id === id ? updatedToDo : prevToDo))
      );
    } catch (e) {
      console.error(e.message);
    }
  };

  const handleDelete = async ({ id }) => {
    try {
      await deleteToDo({ id });

      const filteredTodos = (todos) => todos.filter((todo) => todo.id !== id);

      setToDos(filteredTodos(todos));
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <>
      {todos.map(({ id, description, completed }) => {
        return <Todo key={id} {...{ id, description, completed, handleChange, handleDelete }} />;
      })}
    </>
  );
}
