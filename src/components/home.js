import React, {useEffect, useState} from "react";
import FoodCard from "./foodCard";
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
        fetch("http://localhost:9292/")
    .then((r) => r.json())
    .then((foodFromDB) => setFoodItems(foodFromDB))
    },[])
    console.log(foodItems)

    return (
    <div>   
         <h1>Home Chef</h1>
         <NavBar />
         <FoodCard foodItems={foodItems}/>
    </div>
)}

export default Home;