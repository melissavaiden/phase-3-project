import Home from './components/home';
import './App.css'
import { Route, Routes, Switch } from 'react-router-dom';
import FoodSelections from './components/FoodSelections';

function App() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/categories">
        <FoodSelections />
      </Route>
    </Switch>

  );
}

export default App;
