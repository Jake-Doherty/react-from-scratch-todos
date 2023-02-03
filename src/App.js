import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth.js';
import Header from './components/Header/Header.js';
import Todos from './components/ToDos/Todos.js';
import { useUser } from './context/UserContext.js';

function App() {
  const { user } = useUser();
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/todos" component={Todos} />
        <Route exact path="/">
          <>
            {user && <Redirect to="/todos" />}
            {!user && <Redirect to="/auth/sign-in" />}
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
