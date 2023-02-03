import { createContext, useEffect, useState } from 'react';
import { getToDos } from '../services/todos';

const ToDosContext = createContext();

const ToDosProvider = ({ children }) => {
  const [todos, setToDos] = useState([]);
  useEffect(() => {
    const fetchToDos = async () => {
      try {
        const data = await getToDos();
        setToDos(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchToDos();
  }, []);
  return <ToDosContext.Provider value={{ todos, setToDos }}>{children}</ToDosContext.Provider>;
};

export { ToDosContext, ToDosProvider };
