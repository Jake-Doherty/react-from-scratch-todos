import { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getToDos } from '../services/todos';

const ToDosContext = createContext();

const ToDosProvider = ({ children }) => {
  const location = useLocation();
  const [todos, setToDos] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (location.pathname === '/todos') {
      const fetchToDos = async () => {
        try {
          setLoading(true);
          const data = await getToDos();
          setToDos(data);
        } catch (e) {
          console.error(e.message);
        }
      };
      fetchToDos();
    }
    setLoading(false);
  }, [location.pathname]);
  return (
    <ToDosContext.Provider value={{ todos, setToDos, loading }}>{children}</ToDosContext.Provider>
  );
};

export { ToDosContext, ToDosProvider };
