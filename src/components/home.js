import React, {useEffect, useState} from "react";
import FoodCard from "./foodCard";
import FoodSelections from "./FoodSelections";
import NavBar from "./NavBar";

function Home() {
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
    <div>   
         <h1>Home Chef</h1>
         <NavBar />
         <FoodSelections changeCategory={changeCategory}/>
         <FoodCard foodItems={foodItems}/>
    </div>
)}

export default Home;