import Home from './components/homePage';
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FoodForm from './components/FoodForm';
import FoodSelections from './components/FoodSelections';
import NavBar from './components/NavBar';
import UpdateForm from './components/updateForm';

function App() {
  const [foodItems, setFoodItems] = useState([])
  const [user, setUser] = useState([])
  const [editItem, setEditItem] = useState({
    id:"",
    name:"",
    price:"",
    category:"",
    description:"",
    username:"",
    picture_url:""
})

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

function handleAddFoodItem(newFoodItem) {
  setFoodItems([...foodItems, newFoodItem])
}

function handleDeleteFoodItem(deletedItem) {
  const updatedList = foodItems.filter((foodItem) => deletedItem.id !== foodItem.id)
  setFoodItems(updatedList)
}

function handleUpdateClick(updatedFoodItem) {  
  const formValues = {
    id: updatedFoodItem.id,
    name: updatedFoodItem.name,
    price: updatedFoodItem.price,
    category: updatedFoodItem.category,
    description: updatedFoodItem.description,
    username: updatedFoodItem.user.username,
    picture_url: updatedFoodItem.picture_url
  }
  setEditItem(formValues)
  console.log(editItem)
}



  return (
  <>
  <h1>Home Chef</h1>
  <NavBar />
    <Switch>
      <Route exact path="/food">
        <Home />
      </Route>
      <Route exact path="/food/categories">
        <FoodSelections changeCategory={changeCategory} foodItems={foodItems} deleteFood={handleDeleteFoodItem} updateFood={handleUpdateClick}/>
      </Route>
      <Route  exact path="/foodform">
        <FoodForm user={user} addFood={handleAddFoodItem}/>
      </Route>
      <Route>
        <UpdateForm exact path="/updateForm" editItem={editItem} user={user} />
      </Route>
    </Switch>
  </>

  );
}

export default App;
