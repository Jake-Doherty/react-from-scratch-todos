import { Switch, Route } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth.js';
import Todos from './components/ToDos/Todos.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/todos" component={Todos} />
      </Switch>
    </div>
  );
}

export default App;
