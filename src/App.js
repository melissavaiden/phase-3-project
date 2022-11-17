import Home from './components/homePage';
import './App.css'
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FoodForm from './components/FoodForm';
import FoodSelections from './components/FoodSelections';
import NavBar from './components/NavBar';

function App() {
  const [foodItems, setFoodItems] = useState([])
  const [user, setUser] = useState([])


  useEffect(() => {
    fetch("http://localhost:9292/users")
    .then((r) => r.json())
    .then((user) => setUser(user))
  },[])

  useEffect(() => {
    fetch("http://localhost:9292/food")
    .then((r) => r.json())
    .then((foodFromDB) => setFoodItems(foodFromDB))
  },[])

  function changeCategory(category) {
    fetch(`http://localhost:9292/food/${category}`)
    .then((r) => r.json())
    .then((foodFromDB) => setFoodItems(foodFromDB))
}



  return (
  <>
  <NavBar />
    <Switch>
      <Route exact path="/food/categories">
        <FoodSelections changeCategory={changeCategory} foodItems={foodItems}/>
      </Route>
      <Route  exact path="/foodform">
        <FoodForm />
      </Route>
      <Route path="/">
        <Home />
      </Route>
  
    </Switch>
  </>

  );
}

export default App;
