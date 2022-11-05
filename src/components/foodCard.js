import React, {useEffect, useState} from "react";

function FoodCard({foodItems}) {
    
    let foodCard = foodItems.map((food) => {
        return (
        <div>
            <img className='food_url' src={food.picture_url}></img>
            <h2>{food.name}---{food.price}</h2>
            <h3>Username</h3>
            <p>{food.category}</p>
            <p>{food.description}</p>
        </div>
     )})

 return (
    <div>
        {foodCard}
    </div>
 )
}

export default FoodCard;
