import React, {useEffect, useState} from "react";

function FoodCard() {
    const [foodItems, setFoodItems] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/")
    .then((r) => r.json())
    .then((foodFromDB) => setFoodItems(foodFromDB))
    },[])
    console.log(foodItems)


 return (
    <div>
        <img className='food_url' src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg"></img>
        <h2>Food Name---Price</h2>
        <h3>Username</h3>
        <p>Category</p>
        <p>Food Description</p>
    </div>
 )
}

export default FoodCard;
