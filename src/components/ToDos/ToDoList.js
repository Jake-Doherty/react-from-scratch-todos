import { useContext } from 'react';
import { toggleToDo } from '../../services/todos';
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

  return (
    <>
      {todos.map(({ id, description, completed }) => {
        return <Todo key={id} {...{ id, description, completed, handleChange }} />;
      })}
    </>
  );
}
