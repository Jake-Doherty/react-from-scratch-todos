import { useContext, useState } from 'react';

import { signOut } from '../../services/auth';
import { useUser } from '../../context/UserContext';
import { ToDosContext } from '../../context/ToDosContext.js';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const { setToDos } = useContext(ToDosContext);

  const { user, setUser } = useUser();

  const handleLogout = async () => {
    try {
      setToDos([]);
      await signOut();
      setUser(null);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <nav className="navbar is-success" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <h1 className="navbar-item is-size-4 has-text-light">Todo List</h1>
        <a
          role="button"
          className={`navbar-burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-list"
          onClick={() => setIsActive((prev) => !prev)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id="navbar-list">
        <div className="navbar-end">
          <div className="navbar-item">
            {user && (
              <>
                <div>hello {user.email}</div>
                <button className="button is-light" onClick={handleLogout}>
                  Sign Out
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      {}
    </nav>
  );
}
