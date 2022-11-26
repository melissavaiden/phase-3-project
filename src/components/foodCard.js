import React from "react";
import { NavLink } from "react-router-dom";

function FoodCard({foodItems, deleteFood, updateFood}) {

    function handleDelete(e) {
        fetch(`http://localhost:9292/food/${e.target.id}`, {
            method: "DELETE",
          })
            .then((r) => r.json())
            .then((r) => deleteFood(r));
    }


    let foodCard = foodItems.map((food) => {
        return (
        <div key={food.id} className="foodCard">
            <img className='food_url' src={food.picture_url}></img>
            <h2 className="foodCardTitle">{food.name}</h2>
            <h2>${food.price}</h2>
            <h4 className="foodCardUsername">Cooked by: {food.user.username}</h4>
            <p className="foodCardCategory">{food.category}</p>
            <p>{food.description}</p>
            <button id={food.id} onClick={handleDelete}>Delete</button>
            <NavLink to='/updateForm'>
                <button id={food.id} onClick={() => updateFood(food)}>Edit</button>
            </NavLink>
        </div>
     )})

 return (
    <div>
        {foodCard}
    </div>
 )
}

export default FoodCard;
